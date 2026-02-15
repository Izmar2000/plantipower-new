import React from 'react';

export default function PreviewEmailPage() {
    const name = "Ramzi Hadad";
    const headerImage = 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800';

    const emailStyles = {
        container: 'background-color: #011410; color: #ffffff; font-family: "Outfit", sans-serif; max-width: 600px; margin: 40px auto; padding: 0; border-radius: 40px; border: 1px solid rgba(255,255,255,0.05); overflow: hidden; box-shadow: 0 40px 100px rgba(0,0,0,0.5);',
        header: 'margin-bottom: 30px; text-align: center; padding: 40px 40px 0 40px;',
        title: 'color: #84cc16; font-size: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: -1px; margin-bottom: 5px; line-height: 1;',
        subTitle: 'color: rgba(255,255,255,0.5); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 2px;',
        personalNote: 'font-family: "Caveat", cursive; font-size: 26px; color: #84cc16; line-height: 1.4; margin-top: 30px; text-align: center; padding: 0 20px;',
        card: 'background: rgba(13, 43, 36, 0.4); padding: 30px; border-radius: 32px; border: 1px solid rgba(132, 204, 22, 0.15); margin-top: 30px; backdrop-blur: 10px;',
        label: 'color: #84cc16; font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;',
        value: 'color: #ffffff; font-size: 18px; font-weight: 700; margin-bottom: 20px;',
        footer: 'margin-top: 0; text-align: center; padding: 40px; background: rgba(0,0,0,0.2);',
        footerText: 'color: rgba(255,255,255,0.3); font-size: 11px; text-transform: uppercase; letter-spacing: 1px;',
        ctaBox: 'margin-top: 30px; background: #84cc16; padding: 25px; border-radius: 24px; text-align: center; box-shadow: 0 10px 30px rgba(132, 204, 22, 0.2);',
        signature: 'margin-top: 40px; text-align: right; padding-right: 20px;'
    };

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '40px 20px' }}>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />

            <div className="max-w-7xl mx-auto mb-12 text-center">
                <h1 className="text-white text-2xl font-black uppercase tracking-widest">E-mail Preview</h1>
                <p className="text-emerald-100/40">Dit is precies hoe de klant de bevestiging in de inbox ziet.</p>
            </div>

            <div style={{
                backgroundColor: '#011410',
                color: '#ffffff',
                maxWidth: '600px',
                margin: '0 auto',
                borderRadius: '40px',
                border: '1px solid rgba(255,255,255,0.05)',
                overflow: 'hidden',
                fontFamily: '"Outfit", sans-serif'
            }}>
                <div style={{ width: '100%', height: '240px', overflow: 'hidden' }}>
                    <img src={headerImage} alt="Natural Growth" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ textAlign: 'center', padding: '40px 40px 0 40px' }}>
                    <img src="https://plantipower.com/logo-white.png" alt="PlantiPower" style={{ height: '35px', marginBottom: '25px' }} />
                    <div style={{ color: '#84cc16', fontSize: '32px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-1px', lineHeight: 1 }}>
                        Bedankt voor<br />je aanvraag
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '2px', marginTop: '10px' }}>
                        De natuur staat niet stil – wij ook niet.
                    </div>
                </div>

                <div style={{ padding: '0 40px 40px 40px' }}>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.6', textAlign: 'center', marginTop: '30px' }}>
                        Beste {name}, we hebben je aanvraag voor het proefpakket in goede orde ontvangen. Onze experts bereiden je pakket momenteel voor op verzending.
                    </p>

                    <div style={{ fontFamily: '"Caveat", cursive', fontSize: '28px', color: '#84cc16', lineHeight: '1.4', marginTop: '30px', textAlign: 'center', padding: '0 20px' }}>
                        "Onze unieke formule helpt planten om op eigen kracht weerbaarder te worden tegen stress en extreme weersomstandigheden."
                    </div>

                    <div style={{ background: 'rgba(13, 43, 36, 0.4)', padding: '30px', borderRadius: '32px', border: '1px solid rgba(132, 204, 22, 0.15)', marginTop: '30px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <div style={{ background: 'rgba(132, 204, 22, 0.15)', padding: '12px', borderRadius: '16px', marginRight: '15px', fontSize: '24px' }}>🚀</div>
                            <div>
                                <div style={{ color: '#84cc16', fontSize: '10px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>Geselecteerd Pakket</div>
                                <div style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700 }}>Premium Sample Bundle</div>
                                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>1x 1L All12 + 1x 60ml Shield</div>
                            </div>
                        </div>

                        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>Totaal incl. verzending</div>
                            <div style={{ color: '#84cc16', fontWeight: 900, fontSize: '22px' }}>€29,95</div>
                        </div>
                    </div>

                    <div style={{ marginTop: '30px', background: '#84cc16', padding: '25px', borderRadius: '24px', textAlign: 'center' }}>
                        <div style={{ color: '#011410', fontWeight: 900, textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>Wat kun je verwachten?</div>
                        <div style={{ color: '#011410', fontSize: '16px', marginTop: '8px', fontWeight: 600 }}>Factuur volgt na levering. Levertijd: 1-2 werkdagen.</div>
                    </div>

                    <div style={{ marginTop: '40px', textAlign: 'right', paddingRight: '20px' }}>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '5px' }}>Vriendelijke groet,</p>
                        <p style={{ color: '#84cc16', fontSize: '18px', fontWeight: 900, marginTop: 0, textTransform: 'uppercase' }}>Team PlantiPower</p>
                    </div>
                </div>

                <div style={{ width: '100%', height: '180px', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="PlantiPower Lab" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                </div>

                <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(0,0,0,0.2)' }}>
                    <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        L.J. Costerstraat 48  |  5916 PS Venlo, NL<br />
                        <a href="https://plantipower.com" style={{ color: '#84cc16', textDecoration: 'none', marginTop: '10px', display: 'inline-block', fontWeight: 800 }}>PLANTIPOWER.COM</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
