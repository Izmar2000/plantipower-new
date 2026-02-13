import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

const emailStyles = {
  container: 'background-color: #011410; color: #ffffff; font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border-radius: 40px; border: 1px solid rgba(255,255,255,0.05);',
  header: 'margin-bottom: 40px; text-align: center;',
  title: 'color: #84cc16; font-size: 28px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;',
  card: 'background: rgba(13, 43, 36, 0.5); padding: 30px; border-radius: 24px; border: 1px solid rgba(132, 204, 22, 0.2); margin-top: 30px;',
  label: 'color: #84cc16; font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;',
  value: 'color: #ffffff; font-size: 18px; font-weight: 700; margin-bottom: 20px;',
  footer: 'margin-top: 50px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 30px;',
  footerText: 'color: rgba(255,255,255,0.3); font-size: 11px; text-transform: uppercase; letter-spacing: 1px;'
};

export async function POST(request: Request) {
  try {
    const { name, company, email, message } = await request.json();

    // 1. Send to HQ
    await resend.emails.send({
      from: 'PlantiPower HQ <info@mail.plantipower.com>',
      to: 'info@plantipower.com',
      replyTo: 'info@plantipower.com',
      subject: `Nieuw Contactbericht: ${company || name}`,
      html: `
        <div style="${emailStyles.container}">
          <div style="${emailStyles.header}">
             <div style="${emailStyles.title}">Contact Bericht</div>
             <div style="color: rgba(255,255,255,0.6);">Nieuw bericht ontvangen via de website</div>
          </div>
          
          <div style="${emailStyles.card}">
            <div style="${emailStyles.label}">Van</div>
            <div style="${emailStyles.value}">${name} ${company ? `(${company})` : ''}</div>
            
            <div style="${emailStyles.label}">E-mail</div>
            <div style="${emailStyles.value}">${email}</div>
            
            <div style="${emailStyles.label}">Bericht</div>
            <div style="${emailStyles.value}; font-weight: 400; line-height: 1.6;">${message}</div>
          </div>
        </div>
      `
    });

    // 2. Confirmation to User
    await resend.emails.send({
      from: 'PlantiPower <info@mail.plantipower.com>',
      to: email,
      replyTo: 'info@plantipower.com',
      subject: 'We hebben je bericht ontvangen - PlantiPower',
      html: `
        <div style="${emailStyles.container}">
          <div style="text-align: center; margin-bottom: 40px;">
            <img src="https://plantipower.com/logo-white.png" alt="PlantiPower" style="height: 40px;" />
          </div>

          <div style="${emailStyles.header}">
             <div style="${emailStyles.title}">Bedankt voor je bericht</div>
             <div style="font-size: 18px; color: #ffffff; margin-top: 10px;">We nemen zo snel mogelijk contact met je op.</div>
          </div>

          <div style="${emailStyles.card}">
            <p style="color: rgba(255,255,255,0.7); font-size: 16px; line-height: 1.6;">
              Hoi ${name},<br/><br/>
              Bedankt voor het contact opnemen met PlantiPower. We hebben je bericht goed ontvangen en een van onze experts zal dit bekijken. Je hoort snel van ons!
            </p>
          </div>

          <div style="${emailStyles.footer}">
            <div style="${emailStyles.footerText}">
              PlantiPower BV  |  Venlo, Nederland<br/>
              <a href="https://plantipower.com" style="color: #84cc16; text-decoration: none;">plantipower.com</a>
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
