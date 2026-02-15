import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const emailStyles = {
  container: 'background-color: #011410; color: #ffffff; font-family: "Outfit", Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border-radius: 0; border: none; overflow: hidden;',
  header: 'text-align: left; padding: 40px 40px 20px 40px; display: flex; justify-content: space-between; align-items: flex-start;',
  topLine: 'display: flex; justify-content: space-between; width: 100%; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px; margin-bottom: 30px;',
  logoArea: 'text-align: left;',
  newsletterInfo: 'text-align: right; color: rgba(255,255,255,0.4); font-size: 10px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;',
  tag: 'display: inline-block; background-color: #84cc16; color: #011410; font-size: 10px; font-weight: 900; padding: 4px 12px; border-radius: 4px; text-transform: uppercase; margin-bottom: 20px; letter-spacing: 1px;',
  heroTitle: 'font-size: 48px; font-weight: 900; line-height: 1.1; margin-bottom: 30px; text-transform: uppercase; letter-spacing: -2px;',
  accentText: 'color: #84cc16;',
  quoteSection: 'border-left: 4px solid #84cc16; padding-left: 24px; margin: 40px 0; font-style: italic; color: rgba(255,255,255,0.9); font-size: 18px; line-height: 1.6;',
  bodyText: 'color: rgba(255,255,255,0.6); font-size: 16px; line-height: 1.8; margin-bottom: 30px;',
  subHeading: 'display: flex; align-items: center; gap: 12px; font-size: 12px; font-weight: 900; color: #84cc16; text-transform: uppercase; letter-spacing: 3px; margin: 50px 0 20px 0;',
  dash: 'width: 30px; height: 2px; background-color: #84cc16; display: inline-block; vertical-align: middle; margin-right: 12px;',
  productCard: 'background: linear-gradient(135deg, rgba(13, 43, 36, 0.8) 0%, rgba(1, 20, 16, 1) 100%); border-radius: 24px; border: 1px solid rgba(132, 204, 22, 0.1); margin-top: 20px; overflow: hidden; display: flex;',
  productContent: 'padding: 32px; flex: 1;',
  productTag: 'background: #84cc16; color: #011410; font-size: 9px; font-weight: 900; padding: 3px 10px; border-radius: 4px; display: inline-block; margin-bottom: 15px; text-transform: uppercase;',
  productTitle: 'font-size: 32px; font-weight: 900; margin-bottom: 10px; text-transform: uppercase; letter-spacing: -1px;',
  productDesc: 'color: rgba(255,255,255,0.5); font-size: 14px; line-height: 1.5; margin-bottom: 20px;',
  checkItem: 'display: flex; align-items: center; gap: 12px; margin-bottom: 10px; color: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;',
  checkIcon: 'color: #84cc16; font-size: 14px;',
  statBox: 'background: rgba(0,0,0,0.4); border-radius: 16px; padding: 15px 20px; display: inline-block; text-align: center; margin-top: 10px;',
  statValue: 'color: #84cc16; font-size: 24px; font-weight: 900; display: block;',
  statLabel: 'color: rgba(255,255,255,0.4); font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;',
  ctaBox: 'background: #84cc16; padding: 30px; text-align: center; margin: 50px 40px; border-radius: 20px;',
  ctaTitle: 'color: #011410; font-weight: 900; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px;',
  ctaText: 'color: #011410; font-weight: 600; font-size: 16px;',
  personalNote: 'font-family: "Caveat", cursive; font-size: 24px; color: #84cc16; line-height: 1.4; margin: 40px 0; text-align: center;',
  signature: 'text-align: right; padding-right: 40px; margin-bottom: 40px;',
  footer: 'background: rgba(0,0,0,0.3); padding: 50px 40px; text-align: center;',
  footerText: 'color: rgba(255,255,255,0.2); font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;'
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
      html: `<div style="background-color: #011410; color: #fff; padding: 40px; font-family: sans-serif;">
        <h2 style="color: #84cc16;">Nieuwe Aanvraag</h2>
        <p><b>Naam:</b> ${name}</p>
        <p><b>Bedrijf:</b> ${company}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefoon:</b> ${phone}</p>
        <p><b>Adres:</b> ${address}, ${city}</p>
        <p><b>Teelt:</b> ${crop}</p>
        <p><b>Bericht:</b> ${comments}</p>
      </div>`
    });

    // 2. PREMIUM CONFIRMATION TO CUSTOMER (NEWSLETTER STYLE)
    await resend.emails.send({
      from: 'PlantiPower <info@mail.plantipower.com>',
      to: email,
      replyTo: 'info@plantipower.com',
      subject: 'Bevestiging: Je PlantiPower Upgrade is onderweg',
      html: `
        <html>
          <head>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">
          </head>
          <body style="margin: 0; padding: 0; background-color: #000;">
            <div style="${emailStyles.container}">
              
              <!-- Header Top Line -->
              <div style="padding: 40px 40px 0 40px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" alt="PlantiPower" style="height: 40px;" />
                      <div style="color: #84cc16; font-size: 10px; font-weight: 800; letter-spacing: 2px; margin-top: 5px; text-transform: uppercase;">Made in Holland</div>
                    </td>
                    <td align="right" valign="top">
                      <div style="${emailStyles.newsletterInfo}">
                        Sample Update Vol. 1<br/>
                        Professional Growth
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Hero Image with Overlay -->
              <div style="position: relative; width: 100%; height: 400px; margin-top: 40px; overflow: hidden;">
                <img src="${headerImage}" style="width: 100%; height: 400px; object-fit: cover;" />
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(0deg, #011410 0%, transparent 100%); padding: 40px;">
                  <div style="${emailStyles.tag}">Sample Request</div>
                  <div style="${emailStyles.heroTitle}">Wij veranderen niets.<br/><span style="${emailStyles.accentText}">Jij optimaliseert alles.</span></div>
                </div>
              </div>

              <!-- Body Content -->
              <div style="padding: 0 40px;">
                <div style="${emailStyles.quoteSection}">
                  "De perfecte oogst begint bij een gezonde bodem. Niet alleen wat je ziet, maar vooral wat je niet ziet onder de oppervlakte."
                </div>

                <div style="${emailStyles.bodyText}">
                  Beste ${name},<br/><br/>
                  Bij PlantiPower geloven we dat elke kweker een eigen verhaal heeft. Een verhaal van passie, doorzettingsvermogen en de constante zoektocht naar die extra procenten aan efficiëntie en kwaliteit.<br/><br/>
                  We hebben je aanvraag voor het proefpakket voor <b>${company}</b> in goede orde ontvangen. Onze experts bereiden je pakket momenteel voor op verzending.
                </div>

                <div style="${emailStyles.subHeading}"><span style="${emailStyles.dash}"></span>Uitgelichte Oplossingen</div>

                <!-- Product Card ALL12 -->
                <div style="${emailStyles.productCard}">
                  <div style="${emailStyles.productContent}">
                    <div style="${emailStyles.productTag}">Innovation</div>
                    <div style="${emailStyles.productTitle}">ALL12</div>
                    <div style="${emailStyles.productDesc}">De ultieme biostimulant voor maximale groei en weerbaarheid.</div>
                    
                    <div style="${emailStyles.checkItem}"><span style="${emailStyles.checkIcon}">✓</span> 100% Natuurlijk</div>
                    <div style="${emailStyles.checkItem}"><span style="${emailStyles.checkIcon}">✓</span> Bredere wortels</div>
                    <div style="${emailStyles.checkItem}"><span style="${emailStyles.checkIcon}">✓</span> Optimale opname</div>
                  </div>
                  <div style="width: 200px; position: relative;">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" style="width: 100%; height: 100%; object-fit: cover;" />
                    <div style="position: absolute; bottom: 20px; right: 20px;">
                      <div style="${emailStyles.statBox}">
                        <span style="${emailStyles.statValue}">+12%</span>
                        <span style="${emailStyles.statLabel}">Opbrengst boost</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style="${emailStyles.personalNote}">
                  "We maken producten die niet alleen werken,<br/>maar het verschil maken tussen een goede en een legendarische oogst."
                </div>

                <div style="${emailStyles.ctaBox}">
                  <div style="${emailStyles.ctaTitle}">Wat kun je verwachten?</div>
                  <div style="${emailStyles.ctaText}">Factuur volgt na levering (€29,95).<br/>Levertijd: 1-2 werkdagen.</div>
                </div>

                <div style="${emailStyles.signature}">
                  <p style="color: rgba(255,255,255,0.4); font-size: 14px; margin-bottom: 5px;">Vriendelijke groet,</p>
                  <p style="color: #84cc16; font-size: 20px; font-weight: 900; margin-top: 0; text-transform: uppercase; letter-spacing: 1px;">Team PlantiPower</p>
                </div>
              </div>

              <!-- Footer -->
              <div style="${emailStyles.footer}">
                <div style="${emailStyles.footerText}">
                  L.J. Costerstraat 48  |  5916 PS Venlo, NL<br/>
                  <a href="https://plantipower.com" style="color: #84cc16; text-decoration: none; margin-top: 15px; display: inline-block; font-weight: 900; letter-spacing: 2px;">PLANTIPOWER.COM</a>
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
