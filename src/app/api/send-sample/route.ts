import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailStyles = {
  container: 'background-color: #011410; color: #ffffff; font-family: "Outfit", sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border-radius: 40px; border: 1px solid rgba(255,255,255,0.05); overflow: hidden;',
  header: 'margin-bottom: 30px; text-align: center; padding: 40px 40px 0 40px;',
  title: 'color: #84cc16; font-size: 28px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;',
  subTitle: 'color: rgba(255,255,255,0.6); font-size: 16px; font-weight: 500;',
  card: 'background: rgba(13, 43, 36, 0.5); padding: 30px; border-radius: 24px; border: 1px solid rgba(132, 204, 22, 0.2); margin-top: 30px;',
  label: 'color: #84cc16; font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;',
  value: 'color: #ffffff; font-size: 18px; font-weight: 700; margin-bottom: 20px;',
  footer: 'margin-top: 50px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); padding: 30px;',
  footerText: 'color: rgba(255,255,255,0.3); font-size: 11px; text-transform: uppercase; letter-spacing: 1px;'
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

    // 1. Send data to PlantiPower HQ
    await resend.emails.send({
      from: 'PlantiPower HQ <info@mail.plantipower.com>',
      to: 'info@plantipower.com',
      replyTo: 'info@plantipower.com',
      subject: `PROEFPAKKET AANVRAAG: ${company}`,
      html: `
        <div style="${emailStyles.container}">
          <div style="${emailStyles.header}">
             <div style="${emailStyles.title}">Nieuwe Aanvraag</div>
             <div style="${emailStyles.subTitle}">Via plantipower.com</div>
          </div>
          
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
      `
    });

    // 2. Premium Confirmation to the Customer
    await resend.emails.send({
      from: 'PlantiPower <info@mail.plantipower.com>',
      to: email,
      replyTo: 'info@plantipower.com',
      subject: 'Bevestiging: Je PlantiPower Proefpakket is Onderweg',
      html: `
        <div style="${emailStyles.container}">
          <div style="width: 100%; height: 200px; overflow: hidden;">
            <img src="${headerImage}" alt="Crop" style="width: 100%; h-200px; object-fit: cover;" />
          </div>

          <div style="${emailStyles.header}">
            <img src="https://plantipower.com/logo-white.png" alt="PlantiPower" style="height: 35px; margin-bottom: 25px;" />
            <div style="${emailStyles.title}">Bedankt voor je aanvraag</div>
            <div style="font-size: 18px; color: #ffffff; margin-top: 10px;">Beste ${name}, de natuur staat niet stil – en wij ook niet.</div>
          </div>

          <div style="padding: 0 40px;">
            <p style="color: rgba(255,255,255,0.7); font-size: 16px; line-height: 1.6; text-align: center; margin-bottom: 40px;">
              We hebben je aanvraag voor het proefpakket goed ontvangen. Onze experts bereiden je pakket momenteel voor op verzending. 
            </p>
            
            <div style="${emailStyles.card}">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="background: rgba(132, 204, 22, 0.1); padding: 10px; border-radius: 12px; margin-right: 15px;">🚀</div>
                <div>
                  <div style="${emailStyles.label}">Geselecteerd Pakket</div>
                  <div style="${emailStyles.value}">Premium Sample Bundle</div>
                  <div style="color: rgba(255,255,255,0.4); font-size: 13px;">1x 1L All12 + 1x 60ml Shield</div>
                </div>
              </div>
              
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between;">
                <div style="color: rgba(255,255,255,0.6);">Totaal (incl. verzending)</div>
                <div style="color: #84cc16; font-weight: 800; font-size: 20px;">€29,95</div>
              </div>
            </div>

            <div style="margin-top: 40px; background: #84cc16; padding: 25px; border-radius: 20px; text-align: center;">
              <div style="color: #011410; font-weight: 800; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">Wat kun je verwachten?</div>
              <div style="color: #011410; font-size: 16px; margin-top: 5px;">Factuur volgt na levering. Levertijd: 1-2 werkdagen.</div>
            </div>
          </div>

          <div style="${emailStyles.footer}">
            <div style="${emailStyles.footerText}">
              PlantiPower BV  |  Venlo, Nederland<br/>
              <a href="https://plantipower.com" style="color: #84cc16; text-decoration: none; margin-top: 10px; display: inline-block;">plantipower.com</a>
            </div>
          </div>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
