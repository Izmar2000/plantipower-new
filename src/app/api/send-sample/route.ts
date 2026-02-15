import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const emailStyles = {
  container: 'background-color: #011410; color: #ffffff; font-family: "Outfit", Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border-radius: 0; border: none; overflow: hidden;',
  topBar: 'background-color: #ffffff; color: #011410; padding: 10px 40px; text-align: right; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;',
  heroSection: 'position: relative; width: 100%; height: 480px; overflow: hidden;',
  logoSquare: 'position: absolute; top: 0; left: 40px; background-color: #012b24; padding: 20px; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; z-index: 10;',
  tag: 'display: inline-block; background-color: #84cc16; color: #011410; font-size: 11px; font-weight: 900; padding: 6px 14px; border-radius: 0; text-transform: uppercase; margin-bottom: 25px; letter-spacing: 1px;',
  heroTitle: 'font-size: 56px; font-weight: 900; line-height: 0.95; margin-bottom: 0; text-transform: uppercase; letter-spacing: -3px;',
  heroAccent: 'color: #84cc16;',
  profileSection: 'padding: 60px 40px 40px 40px; display: flex; align-items: center; gap: 30px;',
  profilePic: 'width: 80px; height: 80px; border-radius: 50%; object-fit: cover;',
  quoteBar: 'width: 6px; height: 40px; background-color: #84cc16; border-radius: 2px;',
  quoteText: 'font-size: 20px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.5px; line-height: 1.2; flex: 1;',
  bodyArea: 'padding: 0 40px 60px 40px;',
  greeting: 'font-size: 18px; font-weight: 800; margin-bottom: 30px; color: #ffffff;',
  bodyText: 'color: rgba(255,255,255,0.7); font-size: 16px; line-height: 1.8; margin-bottom: 30px;',
  sectionTitle: 'display: block; font-size: 12px; font-weight: 900; color: #84cc16; text-transform: uppercase; letter-spacing: 3px; margin: 60px 0 30px 0;',
  productCard: 'background: linear-gradient(135deg, rgba(13, 43, 36, 0.8) 0%, rgba(1, 20, 16, 1) 100%); border-radius: 24px; border: 1px solid rgba(132, 204, 22, 0.1); margin-bottom: 24px; overflow: hidden;',
  productContent: 'padding: 35px;',
  signatureArea: 'margin-top: 50px;',
  signatureImg: 'height: 60px; margin-bottom: 10px;',
  signatureName: 'font-size: 18px; font-weight: 900; color: #ffffff; text-transform: uppercase;',
  reviewCard: 'background: rgba(255,255,255,0.03); border-radius: 20px; padding: 25px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);',
};

const cropImages: Record<string, string> = {
  groente: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800',
  default: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800'
};

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, address, city, crop, comments } = await request.json();
    const headerImage = cropImages[crop] || cropImages.default;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ error: 'API_KEY missing' }, { status: 500 });
    const resend = new Resend(apiKey);

    // 1. HQ Notification
    await resend.emails.send({
      from: 'PlantiPower HQ <info@mail.plantipower.com>',
      to: 'info@plantipower.com',
      replyTo: email,
      subject: `PROEFPAKKET AANVRAAG: ${company}`,
      html: `<div>Nieuwe aanvraag van ${name} (${company}) voor ${crop}</div>`
    });

    // 2. ULTIMATE DESIGNER CONFIRMATION
    await resend.emails.send({
      from: 'PlantiPower <info@mail.plantipower.com>',
      to: email,
      replyTo: 'info@plantipower.com',
      subject: 'Welkom bij PlantiPower - Je aanvraag is ontvangen',
      html: `
        <html>
          <head>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">
          </head>
          <body style="margin: 0; padding: 0; background-color: #000;">
            <div style="${emailStyles.container}">
              
              <!-- Top Bar -->
              <div style="${emailStyles.topBar}">
                Mail 1 van 3 | Welkom bij PlantiPower
              </div>

              <!-- Hero Section -->
              <div style="${emailStyles.heroSection}">
                <div style="${emailStyles.logoSquare}">
                  <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" style="width: 100%;" />
                </div>
                <img src="${headerImage}" style="width: 100%; height: 100%; object-fit: cover;" />
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(0deg, #011410 0%, transparent 100%); padding: 40px;">
                  <div style="${emailStyles.tag}">Product Update</div>
                  <div style="${emailStyles.heroTitle}">Wij veranderen<br/>niets. <span style="${emailStyles.heroAccent}">Jij optimali-<br/>seert alles.</span></div>
                </div>
              </div>

              <!-- Profile & Quote -->
              <div style="${emailStyles.profileSection}">
                <img src="https://plantipower.com/images/email/John.jpeg" style="${emailStyles.profilePic}" />
                <div style="${emailStyles.quoteBar}"></div>
                <div style="${emailStyles.quoteText}">"De perfecte oogst begint bij een gezonde bodem."</div>
              </div>

              <!-- Content Area -->
              <div style="${emailStyles.bodyArea}">
                <div style="${emailStyles.greeting}">Beste partner in groei,</div>
                
                <div style="${emailStyles.bodyText}">
                  Bij PlantiPower geloven we dat elke kweker een eigen verhaal heeft. Een verhaal van passie, doorzettingsvermogen en de constante zoektocht naar die extra procenten aan efficiëntie en kwaliteit.<br/><br/>
                  In deze eerste nieuwsbrief nemen we je mee achter de schermen van onze labs in Nederland, waar we werken aan de biostimulanten van de toekomst. Geen magie, maar pure plantfysiologie.<br/><br/>
                  Wij veranderen niets aan jouw vakmanschap, wij geven je enkel de tools om het nog beter te laten renderen.
                </div>

                <!-- Signature -->
                <div style="${emailStyles.signatureArea}">
                  <div style="color: rgba(255,255,255,0.5); font-size: 14px; margin-bottom: 15px;">Met vriendelijke groet,</div>
                  <img src="https://plantipower.com/images/email/handtekening.webp" style="${emailStyles.signatureImg}" />
                  <div style="${emailStyles.signatureName}">John Geenen</div>
                </div>

                <!-- Product Extras -->
                <span style="${emailStyles.sectionTitle}">De Krachtbronnen</span>

                <!-- ALL12 -->
                <div style="${emailStyles.productCard}">
                  <div style="${emailStyles.productContent}">
                    <div style="color:#84cc16; font-size:10px; font-weight:900; margin-bottom:10px; text-transform:uppercase;">Biostimulant</div>
                    <div style="font-size:28px; font-weight:900; margin-bottom:10px;">ALL12</div>
                    <div style="color:rgba(255,255,255,0.5); font-size:14px; line-height:1.6;">De ultieme formule voor maximale groei en weerbaarheid.</div>
                  </div>
                </div>

                <!-- SHIELD -->
                <div style="${emailStyles.productCard}">
                  <div style="${emailStyles.productContent}">
                    <div style="color:#84cc16; font-size:10px; font-weight:900; margin-bottom:10px; text-transform:uppercase;">Protection</div>
                    <div style="font-size:28px; font-weight:900; margin-bottom:10px;">SHIELD</div>
                    <div style="color:rgba(255,255,255,0.5); font-size:14px; line-height:1.6;">Versterkt de natuurlijke weerstand tegen biotische stress.</div>
                  </div>
                </div>

                <span style="${emailStyles.sectionTitle}">Pakket Status</span>
                <div style="background:#84cc16; padding:30px; border-radius:24px; text-align:center;">
                  <div style="color:#011410; font-weight:900; text-transform:uppercase; font-size:13px; letter-spacing:1px;">In voorbereiding</div>
                  <div style="color:#011410; font-size:15px; margin-top:5px;">Je proefpakket (€29,95) wordt binnen 1-2 werkdagen geleverd.</div>
                </div>

              </div>

              <!-- Footer -->
              <div style="background: rgba(0,0,0,0.3); padding: 50px 40px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
                <div style="color: rgba(255,255,255,0.2); font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">
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
