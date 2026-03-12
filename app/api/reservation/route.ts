import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resend est instancié dans le handler pour éviter une erreur au chargement si RESEND_API_KEY est absente.
// Clé API : .env.local (dev) ou Vercel (prod), ex. RESEND_API_KEY=re_xxxxxxxxx

// Expéditeur : nom d'affichage (optionnel, via FROM_NAME) + adresse.
// Sans domaine vérifié dans Resend, seule l'adresse onboarding@resend.dev est autorisée.
// Avec un domaine vérifié sur resend.com, définir FROM_EMAIL dans .env (ex. "contact@votredomaine.fr").
function getFromEmail(): string {
  const name = process.env.FROM_NAME || "Gîtes Périgord";
  const address = process.env.FROM_EMAIL || "onboarding@resend.dev";
  return `${name} <${address}>`;
}

export type ReservationPayload = {
  name: string;
  email: string;
  phone?: string;
  logement: string;
  guests: string;
  message?: string;
  dateFrom: string;
  dateTo: string;
};

function validatePayload(body: unknown): body is ReservationPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  const guestsOk =
    typeof b.guests === "string" &&
    b.guests.trim().length > 0 &&
    !Number.isNaN(Number(b.guests)) &&
    Number(b.guests) >= 1 &&
    Number(b.guests) <= 8;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.logement === "string" &&
    b.logement.trim().length > 0 &&
    guestsOk &&
    typeof b.dateFrom === "string" &&
    typeof b.dateTo === "string"
  );
}

// Styles communs pour les emails (compatibles clients mail) — palette moderne slate + bleu
const emailStyles = {
  wrapper:
    "margin:0;padding:0;background-color:#f1f5f9;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-size:16px;line-height:1.6;color:#1e293b;",
  container: "max-width:560px;margin:0 auto;padding:32px 24px;",
  card: "background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);",
  headerBg: "background:#0f172a;",
  headerPadding: "padding:28px 32px;",
  title:
    "margin:0;font-size:22px;font-weight:600;color:#ffffff;letter-spacing:0.02em;",
  subtitle: "margin:6px 0 0;font-size:14px;color:rgba(255,255,255,0.85);",
  bodyPadding: "padding:28px 32px;",
  label:
    "display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#2563eb;margin-bottom:4px;",
  value: "font-size:16px;color:#334155;margin:0 0 16px;",
  row: "margin-bottom:16px;",
  divider: "height:1px;background:#e2e8f0;margin:24px 0;border:none;",
  footer:
    "padding:20px 32px;background:#f8fafc;font-size:13px;color:#64748b;text-align:center;",
  highlight: "color:#2563eb;font-weight:600;",
};

function buildOwnerEmailHtml(p: ReservationPayload): string {
  const dateFrom = new Date(p.dateFrom).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const dateTo = new Date(p.dateTo).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const messageHtml = p.message
    ? `
    <tr><td style="${emailStyles.row}">
      <span style="${emailStyles.label}">Message</span>
      <p style="${emailStyles.value};white-space:pre-wrap;">${escapeHtml(p.message)}</p>
    </td></tr>`
    : "";

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="${emailStyles.wrapper}">
  <div style="${emailStyles.container}">
    <div style="${emailStyles.card}">
      <div style="${emailStyles.headerBg}${emailStyles.headerPadding}">
        <h1 style="${emailStyles.title}">Nouvelle demande de réservation</h1>
        <p style="${emailStyles.subtitle}">Gîtes Périgord Noir — Site web</p>
      </div>
      <div style="${emailStyles.bodyPadding}">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr><td style="${emailStyles.row}">
            <span style="${emailStyles.label}">Nom</span>
            <p style="${emailStyles.value}">${escapeHtml(p.name)}</p>
          </td></tr>
          <tr><td style="${emailStyles.row}">
            <span style="${emailStyles.label}">Email</span>
            <p style="${emailStyles.value}"><a href="mailto:${escapeHtml(p.email)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(p.email)}</a></p>
          </td></tr>
          <tr><td style="${emailStyles.row}">
            <span style="${emailStyles.label}">Téléphone</span>
            <p style="${emailStyles.value}">${p.phone ? escapeHtml(p.phone) : "—"}</p>
          </td></tr>
          <tr><td><hr style="${emailStyles.divider}"/></td></tr>
          <tr><td style="${emailStyles.row}">
            <span style="${emailStyles.label}">Logement souhaité</span>
            <p style="${emailStyles.value};${emailStyles.highlight}">${escapeHtml(p.logement)}</p>
          </td></tr>
          <tr><td style="${emailStyles.row}">
            <span style="${emailStyles.label}">Nombre de voyageurs</span>
            <p style="${emailStyles.value}">${p.guests ? escapeHtml(p.guests) : "—"}</p>
          </td></tr>
          <tr><td style="${emailStyles.row}">
            <span style="${emailStyles.label}">Dates du séjour</span>
            <p style="${emailStyles.value}">${escapeHtml(dateFrom)}<br/>→ ${escapeHtml(dateTo)}</p>
          </td></tr>
          ${messageHtml}
        </table>
      </div>
    </div>
  </div>
</body>
</html>`;
}

function buildConfirmationEmailHtml(p: ReservationPayload): string {
  const dateFrom = new Date(p.dateFrom).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const dateTo = new Date(p.dateTo).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="${emailStyles.wrapper}">
  <div style="${emailStyles.container}">
    <div style="${emailStyles.card}">
      <div style="${emailStyles.headerBg}${emailStyles.headerPadding}">
        <h1 style="${emailStyles.title}">Demande bien reçue</h1>
        <p style="${emailStyles.subtitle}">Gîtes Périgord Noir</p>
      </div>
      <div style="${emailStyles.bodyPadding}">
        <p style="margin:0 0 16px;">Bonjour ${escapeHtml(p.name)},</p>
        <p style="margin:0 0 20px;">Nous avons bien reçu votre demande de réservation pour <strong style="${emailStyles.highlight}">${escapeHtml(p.logement)}</strong> du <strong>${escapeHtml(dateFrom)}</strong> au <strong>${escapeHtml(dateTo)}</strong>.</p>
        <p style="margin:0 0 24px;">Nous vous recontacterons très prochainement par email pour confirmer la disponibilité, le tarif exact et les modalités de votre séjour.</p>
        <hr style="${emailStyles.divider}"/>
        <p style="margin:0;font-size:15px;">À bientôt en Dordogne,<br/><strong>Sophie</strong></p>
      </div>
      <div style="${emailStyles.footer}">
        Saint-Martial-de-Nabirat · Périgord Noir
      </div>
    </div>
  </div>
</body>
</html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const to = process.env.RESERVATION_EMAIL;
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Configuration serveur : RESEND_API_KEY manquante." },
      { status: 500 },
    );
  }
  if (!to) {
    return NextResponse.json(
      { error: "Configuration serveur : RESERVATION_EMAIL manquante." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corps de la requête invalide." },
      { status: 400 },
    );
  }

  if (!validatePayload(body)) {
    return NextResponse.json(
      { error: "Données invalides (nom, email, logement, nombre de voyageurs et dates requis)." },
      { status: 400 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const ownerSubject = `[Réservation] ${body.name} – ${body.logement} (${body.dateFrom} → ${body.dateTo})`;
    const ownerResult = await resend.emails.send({
      from: getFromEmail(),
      to: [to],
      subject: ownerSubject,
      html: buildOwnerEmailHtml(body),
    });

    if (ownerResult.error) {
      console.error("Resend owner email error:", ownerResult.error);
      return NextResponse.json(
        {
          error:
            "Échec de l'envoi. Veuillez réessayer ou nous contacter par téléphone.",
        },
        { status: 502 },
      );
    }

    const confirmResult = await resend.emails.send({
      from: getFromEmail(),
      to: [body.email],
      subject: "Demande de réservation reçue – Gîtes Périgord Noir",
      html: buildConfirmationEmailHtml(body),
    });

    if (confirmResult.error) {
      console.error("Resend confirmation email error:", confirmResult.error);
      // La demande a bien été reçue par le propriétaire, on considère que c'est ok
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Reservation API error:", err);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer plus tard." },
      { status: 500 },
    );
  }
}
