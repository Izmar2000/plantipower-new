import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const emailStyles = {
  container: 'background-color: #011410; color: #ffffff; font-family: "Outfit", Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border-radius: 0; border: none; overflow: hidden;',
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

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, address, city, crop, comments } = await request.json();
    const headerImage = cropImages[crop] || cropImages.default;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ error: 'API_KEY missing' }, { status: 500 });
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'PlantiPower HQ <info@mail.plantipower.com>',
      to: 'info@plantipower.com',
      replyTo: email,
      subject: `PROEFPAKKET: ${company}`,
      html: `<div>Aanvraag van ${name} - ${company}</div>`
    });

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
              
              <!-- Clean Hero Section with Logo Overlay -->
              <div style="position: relative; width: 100%; height: 420px; overflow: hidden;">
                <img src="${headerImage}" style="width: 100%; height: 420px; object-fit: cover;" />
                
                <!-- Logo Overlay Top Right -->
                <div style="position: absolute; top: 30px; right: 30px;">
                  <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" alt="PlantiPower" style="height: 28px;" />
                </div>

                <!-- Text Overlay Bottom -->
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
                  We hebben je aanvraag voor <b>${company}</b> in goede orde ontvangen.
                </div>

                <div style="${emailStyles.subHeading}"><span style="${emailStyles.dash}"></span>Uitgelichte Oplossingen</div>

                <!-- ALL12 Card -->
                <div style="${emailStyles.productCard}">
                  <div style="${emailStyles.productContent}">
                    <div style="${emailStyles.productTag}">Innovation</div>
                    <div style="${emailStyles.productTitle}">ALL12</div>
                    <div style="${emailStyles.productDesc}">De ultieme biostimulant voor maximale groei.</div>
                    <div style="${emailStyles.checkItem}"><span style="${emailStyles.checkIcon}">✓</span> 100% Natuurlijk</div>
                    <div style="${emailStyles.checkItem}"><span style="${emailStyles.checkIcon}">✓</span> Optimale Opname</div>
                  </div>
                  <div style="width: 150px; position: relative;">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" style="width: 100%; height: 100%; object-fit: cover;" />
                  </div>
                </div>

                <div style="${emailStyles.personalNote}">
                  "We maken producten die niet alleen werken,<br/>maar het verschil maken."
                </div>

                <div style="${emailStyles.ctaBox}">
                  <div style="${emailStyles.ctaTitle}">Wat kun je verwachten?</div>
                  <div style="${emailStyles.ctaText}">Factuur volgt na levering (€29,95).<br/>Levertijd: 1-2 werkdagen.</div>
                </div>

                <div style="${emailStyles.signature}">
                  <p style="color: rgba(255,255,255,0.4); font-size: 14px; margin-bottom: 5px;">Vriendelijke groet,</p>
                  <p style="color: #84cc16; font-size: 20px; font-weight: 900; margin-top: 0; text-transform: uppercase;">Team PlantiPower</p>
                </div>
              </div>

              <div style="${emailStyles.footer}">
                <div style="${emailStyles.footerText}">
                  Venlo, Nederland  |  <a href="https://plantipower.com" style="color: #84cc16; text-decoration: none;">PLANTIPOWER.COM</a>
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

const cropImages: Record<string, string> = {
  groente: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800',
  default: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800'
};
