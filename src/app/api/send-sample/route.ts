import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const emailStyles = {
  container: 'background-color: #011410; color: #ffffff; font-family: "Outfit", Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border-radius: 40px; border: 1px solid rgba(255,255,255,0.05); overflow: hidden;',
  header: 'margin-bottom: 30px; text-align: center; padding: 40px 40px 0 40px;',
  title: 'color: #84cc16; font-size: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: -1px; margin-bottom: 5px; line-height: 1;',
  subTitle: 'color: rgba(255,255,255,0.5); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 2px;',
  personalNote: 'font-family: "Caveat", cursive, "Dancing Script"; font-size: 22px; color: #84cc16; line-height: 1.4; margin-top: 20px; text-align: center;',
  card: 'background: rgba(13, 43, 36, 0.4); padding: 30px; border-radius: 32px; border: 1px solid rgba(132, 204, 22, 0.15); margin-top: 30px; backdrop-blur: 10px;',
  label: 'color: #84cc16; font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;',
  value: 'color: #ffffff; font-size: 18px; font-weight: 700; margin-bottom: 20px;',
  footer: 'margin-top: 0; text-align: center; padding: 40px; background: rgba(0,0,0,0.2);',
  footerText: 'color: rgba(255,255,255,0.3); font-size: 11px; text-transform: uppercase; letter-spacing: 1px;',
  ctaBox: 'margin-top: 30px; background: #84cc16; padding: 25px; border-radius: 24px; text-align: center; box-shadow: 0 10px 30px rgba(132, 204, 22, 0.2);',
  signature: 'margin-top: 30px; text-align: right; padding-right: 20px;'
};

const cropImages: Record<string, string> = {
  groente: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800',
  fruit: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=800',
  boomteelt: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
  sierteelt: 'https://images.unsplash.com/photo-1563245159-f793f19d8c37?auto=format&fit=crop&q=80&w=800',
  akkerbouw: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
  default: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800'
};

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, address, city, crop, comments } = await request.json();
    const headerImage = cropImages[crop] || cropImages.default;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'RESEND_API_KEY missing' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    // 1. Send data to PlantiPower HQ
    await resend.emails.send({
      from: 'PlantiPower HQ <info@mail.plantipower.com>',
      to: 'info@plantipower.com',
      replyTo: email,
      subject: `PROEFPAKKET AANVRAAG: ${company}`,
      html: `
        <div style="${emailStyles.container}">
          <div style="${emailStyles.header}">
             <div style="${emailStyles.title}">Nieuwe Aanvraag</div>
             <div style="${emailStyles.subTitle}">Sample Request</div>
          </div>
          <div style="padding: 0 40px 40px 40px;">
            <div style="${emailStyles.card}">
              <div style="${emailStyles.label}">Klantgegevens</div>
              <div style="${emailStyles.value}">${name} - ${company}</div>
              <div style="${emailStyles.label}">Contact</div>
              <div style="${emailStyles.value}">${email}<br/>${phone}</div>
              <div style="${emailStyles.label}">Leveradres</div>
              <div style="${emailStyles.value}">${address}<br/>${city}</div>
              <div style="${emailStyles.label}">Sectie / Teelt</div>
              <div style="${emailStyles.value}">${crop}</div>
              <div style="${emailStyles.label}">Opmerkingen</div>
              <div style="${emailStyles.value}">${comments || 'Geen'}</div>
            </div>
          </div>
        </div>
      `
    });

    // 2. PREMIUM CONFIRMATION TO CUSTOMER
    await resend.emails.send({
      from: 'PlantiPower <info@mail.plantipower.com>',
      to: email,
      replyTo: 'info@plantipower.com',
      subject: 'Bedankt voor je aanvraag - PlantiPower',
      html: `
        <html>
          <head>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">
          </head>
          <body style="margin: 0; padding: 0;">
            <div style="${emailStyles.container}">
              <!-- Top Image -->
              <div style="width: 100%; height: 240px; overflow: hidden;">
                <img src="${headerImage}" alt="Natural Growth" style="width: 100%; height: 240px; object-fit: cover;" />
              </div>

              <!-- Header Content -->
              <div style="${emailStyles.header}">
                <img src="https://plantipower.com/logo-white.png" alt="PlantiPower" style="height: 35px; margin-bottom: 25px;" />
                <div style="${emailStyles.title}">Bedankt voor<br/>je aanvraag</div>
                <div style="${emailStyles.subTitle}">De natuur staat niet stil – wij ook niet.</div>
              </div>

              <!-- Body Copy -->
              <div style="padding: 0 40px 40px 40px;">
                <p style="color: rgba(255,255,255,0.7); font-size: 16px; line-height: 1.6; text-align: center;">
                  Beste ${name}, we hebben je aanvraag voor het proefpakket in goede orde ontvangen. Onze experts bereiden je pakket momenteel voor op verzending.
                </p>

                <!-- Personal Note (Handwritten style) -->
                <div style="${emailStyles.personalNote}">
                  "Onze unieke formule helpt planten om op eigen kracht <br/> weerbaarder te worden tegen stress en extreme weersomstandigheden."
                </div>

                <!-- Product Box -->
                <div style="${emailStyles.card}">
                  <div style="display: flex; align-items: center; margin-bottom: 20px;">
                    <div style="background: rgba(132, 204, 22, 0.15); padding: 12px; border-radius: 16px; margin-right: 15px; font-size: 24px;">🚀</div>
                    <div>
                      <div style="${emailStyles.label}">Geselecteerd Pakket</div>
                      <div style="${emailStyles.value}">Premium Sample Bundle</div>
                      <div style="color: rgba(255,255,255,0.4); font-size: 13px;">1x 1L All12 + 1x 60ml Shield</div>
                    </div>
                  </div>
                  
                  <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between;">
                    <div style="color: rgba(255,255,255,0.6); font-weight: 500;">Totaal incl. verzending</div>
                    <div style="color: #84cc16; font-weight: 900; font-size: 22px;">€29,95</div>
                  </div>
                </div>

                <!-- Green Info Box -->
                <div style="${emailStyles.ctaBox}">
                  <div style="color: #011410; font-weight: 900; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">Wat kun je verwachten?</div>
                  <div style="color: #011410; font-size: 16px; margin-top: 8px; font-weight: 600;">Factuur volgt na levering. Levertijd: 1-2 werkdagen.</div>
                </div>

                <!-- Signature & Photos -->
                <div style="${emailStyles.signature}">
                  <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin-bottom: 5px;">Vriendelijke groet,</p>
                  <p style="color: #84cc16; font-size: 18px; font-weight: 900; margin-top: 0; text-transform: uppercase;">Team PlantiPower</p>
                </div>
              </div>

              <!-- Bottom Team/Nature Photo -->
              <div style="width: 100%; height: 180px; overflow: hidden; border-top: 1px solid rgba(255,255,255,0.05);">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="PlantiPower Lab" style="width: 100%; height: 180px; object-fit: cover; opacity: 0.8;" />
              </div>

              <!-- Footer -->
              <div style="${emailStyles.footer}">
                <div style="${emailStyles.footerText}">
                  L.J. Costerstraat 48  |  5916 PS Venlo, NL<br/>
                  <a href="https://plantipower.com" style="color: #84cc16; text-decoration: none; margin-top: 10px; display: inline-block; font-weight: 800;">PLANTIPOWER.COM</a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error (Sample):', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
