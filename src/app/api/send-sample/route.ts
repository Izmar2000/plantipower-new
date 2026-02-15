import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const emailStyles = {
  container: 'background-color: #011410; color: #ffffff; font-family: "Outfit", Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border-radius: 0; border: none; overflow: hidden;',
  tag: 'display: inline-block; background-color: #84cc16; color: #011410; font-size: 10px; font-weight: 900; padding: 4px 12px; border-radius: 4px; text-transform: uppercase; margin-bottom: 20px; letter-spacing: 1px;',
  heroTitle: 'font-size: 48px; font-weight: 900; line-height: 1.1; margin-bottom: 30px; text-transform: uppercase; letter-spacing: -2px;',
  accentText: 'color: #84cc16;',
  quoteSection: 'border-left: 4px solid #84cc16; padding-left: 24px; margin: 40px 0; font-style: italic; color: rgba(255,255,255,0.9); font-size: 18px; line-height: 1.6;',
  bodyText: 'color: rgba(255,255,255,0.6); font-size: 16px; line-height: 1.8; margin-bottom: 30px;',
  subHeading: 'font-size: 12px; font-weight: 900; color: #84cc16; text-transform: uppercase; letter-spacing: 3px; margin: 60px 0 20px 0; display: block;',
  productCard: 'background: linear-gradient(135deg, rgba(13, 43, 36, 0.8) 0%, rgba(1, 20, 16, 1) 100%); border-radius: 24px; border: 1px solid rgba(132, 204, 22, 0.1); margin-top: 20px; overflow: hidden;',
  productContent: 'padding: 32px;',
  productTag: 'background: #84cc16; color: #011410; font-size: 9px; font-weight: 900; padding: 3px 10px; border-radius: 4px; display: inline-block; margin-bottom: 15px; text-transform: uppercase;',
  productTitle: 'font-size: 32px; font-weight: 900; margin-bottom: 15px; text-transform: uppercase; letter-spacing: -1px;',
  productDesc: 'color: rgba(255,255,255,0.5); font-size: 14px; line-height: 1.6; margin-bottom: 25px;',
  checkItem: 'display: block; margin-bottom: 10px; color: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;',
  checkIcon: 'color: #84cc16; margin-right: 8px;',
  reviewCard: 'background: rgba(255,255,255,0.03); border-radius: 20px; padding: 25px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);',
  reviewText: 'font-style: italic; color: rgba(255,255,255,0.8); font-size: 15px; line-height: 1.6; margin-bottom: 15px;',
  reviewAuthor: 'color: #84cc16; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;',
  ctaBox: 'background: #84cc16; padding: 35px; text-align: center; margin: 50px 0; border-radius: 24px; box-shadow: 0 20px 40px rgba(132, 204, 22, 0.2);',
  personalNote: 'font-family: "Caveat", cursive; font-size: 26px; color: #84cc16; line-height: 1.4; margin: 40px 0; text-align: center;',
  signature: 'text-align: right; padding-right: 40px; margin-bottom: 40px;',
  footer: 'background: rgba(0,0,0,0.3); padding: 50px 40px; text-align: center;'
};

const cropImages: Record<string, string> = {
  groente: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800',
  fruit: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=800',
  default: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800'
};

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, address, city, crop, comments } = await request.json();
    const headerImage = cropImages[crop] || cropImages.default;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ error: 'API_KEY missing' }, { status: 500 });
    const resend = new Resend(apiKey);

    // 1. HQ Email
    await resend.emails.send({
      from: 'PlantiPower HQ <info@mail.plantipower.com>',
      to: 'info@plantipower.com',
      replyTo: email,
      subject: `PROEFPAKKET: ${company}`,
      html: `<div>Aanvraag van ${name} - ${company}</div>`
    });

    // 2. ULTIMATE NEWSLETTER STYLE CONFIRMATION
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
              
              <!-- HERO -->
              <div style="position: relative; width: 100%; height: 440px; overflow: hidden;">
                <img src="${headerImage}" style="width: 100%; height: 440px; object-fit: cover;" />
                <div style="position: absolute; top: 30px; right: 30px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">
                  <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" alt="PlantiPower" style="height: 28px;" />
                </div>
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(0deg, #011410 0%, transparent 100%); padding: 40px;">
                  <div style="${emailStyles.tag}">Innovation</div>
                  <div style="${emailStyles.heroTitle}">Wij veranderen niets.<br/><span style="${emailStyles.accentText}">Jij optimaliseert alles.</span></div>
                </div>
              </div>

              <div style="padding: 0 40px;">
                <div style="${emailStyles.quoteSection}">
                  "De perfecte oogst begint bij een gezonde bodem. Niet alleen wat je ziet, maar vooral wat je niet ziet onder de oppervlakte."
                </div>

                <div style="${emailStyles.bodyText}">
                  Beste ${name},<br/><br/>
                  Bedankt voor je aanvraag voor het proefpakket van <b>${company}</b>. Terwijl onze experts je pakket klaarmaken voor verzending, delen we graag waar PlantiPower voor staat.
                </div>

                <span style="${emailStyles.subHeading}">De Krachtbronnen</span>

                <!-- ALL12 -->
                <div style="${emailStyles.productCard}">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="${emailStyles.productContent}">
                        <div style="${emailStyles.productTag}">Biostimulant</div>
                        <div style="${emailStyles.productTitle}">ALL12</div>
                        <div style="${emailStyles.productDesc}">Onze vlaggenschip formule voor maximale groei, betere beworteling en een efficiënte nutriëntenopname.</div>
                        <div style="${emailStyles.checkItem}"><span style="${emailStyles.checkIcon}">✓</span> 100% Natuurlijk</div>
                        <div style="${emailStyles.checkItem}"><span style="${emailStyles.checkIcon}">✓</span> +12% Gemiddelde Opbrengst</div>
                      </td>
                      <td width="200" style="vertical-align: middle; padding-right: 32px;">
                        <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/all12-product.png" style="width: 100%;" />
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- SHIELD -->
                <div style="${emailStyles.productCard}">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="${emailStyles.productContent}">
                        <div style="${emailStyles.productTag}">Protection</div>
                        <div style="${emailStyles.productTitle}">SHIELD</div>
                        <div style="${emailStyles.productDesc}">Versterkt de natuurlijke weerstand tegen biotische en abiotische stressfactoren.</div>
                        <div style="${emailStyles.checkItem}"><span style="${emailStyles.checkIcon}">✓</span> Stress Preventie</div>
                        <div style="${emailStyles.checkItem}"><span style="${emailStyles.checkIcon}">✓</span> Krachtige Celwanden</div>
                      </td>
                      <td width="200" style="vertical-align: middle; padding-right: 32px;">
                        <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/shield-product.png" style="width: 100%;" />
                      </td>
                    </tr>
                  </table>
                </div>

                <span style="${emailStyles.subHeading}">Wat Kwekers Zeggen</span>

                <div style="${emailStyles.reviewCard}">
                  <div style="${emailStyles.reviewText}">"Sinds we ALL12 gebruiken zien we een duidelijk verschil in de uniformiteit van de oogst. De investering verdient zich dubbel en dwars terug."</div>
                  <div style="${emailStyles.reviewAuthor}">— Glastuinbouw Westland</div>
                </div>

                <div style="${emailStyles.reviewCard}">
                  <div style="${emailStyles.reviewText}">"Shield is onze vaste waarde geworden voor de start van het seizoen. De weerbaarheid van de jonge planten is ongekend."</div>
                  <div style="${emailStyles.reviewAuthor}">— Boomkwekerij Venlo</div>
                </div>

                <div style="${emailStyles.personalNote}">
                  "Snel aan de slag met jouw proefpakket."
                </div>

                <div style="${emailStyles.ctaBox}">
                  <div style="${emailStyles.ctaTitle}">Status Update</div>
                  <div style="${emailStyles.ctaText}">Je pakket wordt momenteel verpakt.<br/>Factuur (€29,95) volgt na levering.</div>
                </div>

                <div style="${emailStyles.signature}">
                  <p style="color: rgba(255,255,255,0.4); font-size: 14px; margin-bottom: 5px;">Vriendelijke groet,</p>
                  <p style="color: #84cc16; font-size: 20px; font-weight: 900; margin-top: 0; text-transform: uppercase;">Team PlantiPower</p>
                </div>
              </div>

              <div style="${emailStyles.footer}">
                <div style="${emailStyles.footerText}">
                  Venlo, Nederland  |  <a href="https://plantipower.com" style="color: #84cc16; text-decoration: none; font-weight: 900;">PLANTIPOWER.COM</a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
