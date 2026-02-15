import React from 'react';

export default function PreviewEmailPage() {
    const name = "Ramzi Hadad";
    const headerImage = 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800';

    const emailStyles = {
        container: 'background-color: #011410; color: #ffffff; font-family: "Outfit", sans-serif; max-width: 600px; margin: 40px auto; padding: 0; border-radius: 0; overflow: hidden; box-shadow: 0 40px 100px rgba(0,0,0,0.5);',
        header: 'text-align: left; padding: 40px 40px 20px 40px;',
        topLine: 'display: flex; justify-content: space-between; width: 100%; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px; margin-bottom: 30px;',
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
        checkIcon: 'color: #84cc16; font-size: 14px; margin-right: 8px;',
        statBox: 'background: rgba(0,0,0,0.4); border-radius: 16px; padding: 15px 20px; display: inline-block; text-align: center; margin-top: 10px;',
        statValue: 'color: #84cc16; font-size: 24px; font-weight: 900; display: block;',
        statLabel: 'color: rgba(255,255,255,0.4); font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;',
        ctaBox: 'background: #84cc16; padding: 30px; text-align: center; margin: 50px 40px; border-radius: 20px;',
        signature: 'text-align: right; padding-right: 40px; margin-bottom: 40px;',
        footer: 'background: rgba(0,0,0,0.3); padding: 50px 40px; text-align: center;',
        footerText: 'color: rgba(255,255,255,0.2); font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;'
    };

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '40px 20px' }}>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />

            <div className="max-w-7xl mx-auto mb-12 text-center">
                <h1 className="text-white text-2xl font-black uppercase tracking-widest">Premium Newsletter Preview</h1>
                <p className="text-emerald-100/40">Dit is de nieuwe "Professional Growth" stijl gebaseerd op je voorbeelden.</p>
            </div>

            <div style={{
                backgroundColor: '#011410',
                color: '#ffffff',
                maxWidth: '600px',
                margin: '0 auto',
                borderRadius: '0',
                overflow: 'hidden',
                fontFamily: '"Outfit", sans-serif'
            }}>

                {/* Top Header */}
                <div style={{ padding: '40px 40px 0 40px' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0">
                        <tbody>
                            <tr>
                                <td align="left">
                                    <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" alt="PlantiPower" style={{ height: '40px' }} />
                                    <div style={{ color: '#84cc16', fontSize: '10px', fontWeight: 800, letterSpacing: '2px', marginTop: '5px', textTransform: 'uppercase' }}>Made in Holland</div>
                                </td>
                                <td align="right" valign="top">
                                    <div style={{ textAlign: 'right', color: 'rgba(255,255,255,0.4)', fontSize: '10px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>
                                        Sample Update Vol. 1<br />
                                        Professional Growth
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Hero Section */}
                <div style={{ position: 'relative', width: '100%', height: '400px', marginTop: '40px', overflow: 'hidden' }}>
                    <img src={headerImage} alt="Hero" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(0deg, #011410 0%, transparent 100%)', padding: '40px' }}>
                        <div style={{ display: 'inline-block', backgroundColor: '#84cc16', color: '#011410', fontSize: '10px', fontWeight: 900, padding: '4px 12px', borderRadius: '4px', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' }}>
                            Sample Request
                        </div>
                        <div style={{ fontSize: '48px', fontWeight: 900, lineHeight: '1.1', textTransform: 'uppercase', letterSpacing: '-2px' }}>
                            Wij veranderen niets.<br /><span style={{ color: '#84cc16' }}>Jij optimaliseert alles.</span>
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <div style={{ padding: '0 40px' }}>
                    <div style={{ borderLeft: '4px solid #84cc16', paddingLeft: '24px', margin: '40px 0', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', fontSize: '18px', lineHeight: '1.6' }}>
                        "De perfecte oogst begint bij een gezonde bodem. Niet alleen wat je ziet, maar vooral wat je niet ziet onder de oppervlakte."
                    </div>

                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.8', marginBottom: '30px' }}>
                        Beste {name},<br /><br />
                        Bij PlantiPower geloven we dat elke kweker een eigen verhaal heeft. Een verhaal van passie, doorzettingsvermogen en de constante zoektocht naar die extra procenten aan efficiëntie en kwaliteit.
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 900, color: '#84cc16', textTransform: 'uppercase', letterSpacing: '3px', margin: '50px 0 20px 0' }}>
                        <span style={{ width: '30px', height: '2px', backgroundColor: '#84cc16', display: 'inline-block', verticalAlign: 'middle', marginRight: '12px' }}></span>
                        Uitgelichte Oplossingen
                    </div>

                    {/* Product Card */}
                    <div style={{ background: 'linear-gradient(135deg, rgba(13, 43, 36, 0.8) 0%, rgba(1, 20, 16, 1) 100%)', borderRadius: '24px', border: '1px solid rgba(132, 204, 22, 0.1)', marginTop: '20px', overflow: 'hidden', display: 'flex' }}>
                        <div style={{ padding: '32px', flex: '1' }}>
                            <div style={{ background: '#84cc16', color: '#011410', fontSize: '9px', fontWeight: 900, padding: '3px 10px', borderRadius: '4px', display: 'inline-block', marginBottom: '15px', textTransform: 'uppercase' }}>Innovation</div>
                            <div style={{ fontSize: '32px', fontWeight: 900, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '-1px' }}>ALL12</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.5', marginBottom: '20px' }}>De ultieme biostimulant voor maximale groei en weerbaarheid.</div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', color: '#ffffff', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                <span style={{ color: '#84cc16', marginRight: '8px' }}>✓</span> 100% NATUURLIJK
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', color: '#ffffff', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                <span style={{ color: '#84cc16', marginRight: '8px' }}>✓</span> BREDERE WORTELS
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', color: '#ffffff', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                <span style={{ color: '#84cc16', marginRight: '8px' }}>✓</span> OPTIMALE OPNAME
                            </div>
                        </div>
                        <div style={{ width: '200px', position: 'relative' }}>
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                                <div style={{ background: 'rgba(0,0,0,0.6)', borderRadius: '16px', padding: '15px 20px', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                                    <span style={{ color: '#84cc16', fontSize: '24px', fontWeight: 900, display: 'block' }}>+12%</span>
                                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Opbrengst boost</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ fontFamily: '"Caveat", cursive', fontSize: '26px', color: '#84cc16', lineHeight: '1.4', margin: '40px 0', textAlign: 'center' }}>
                        "We maken producten die niet alleen werken, maar het verschil maken tussen een goede en een legendarische oogst."
                    </div>

                    <div style={{ background: '#84cc16', padding: '30px', textAlign: 'center', margin: '50px 0', borderRadius: '20px' }}>
                        <div style={{ color: '#011410', fontWeight: 900, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>Wat kun je verwachten?</div>
                        <div style={{ color: '#011410', fontWeight: 600, fontSize: '16px' }}>Factuur volgt na levering (€29,95).<br />Levertijd: 1-2 werkdagen.</div>
                    </div>

                    <div style={{ textAlign: 'right', paddingRight: '40px', marginBottom: '40px' }}>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '5px' }}>Vriendelijke groet,</p>
                        <p style={{ color: '#84cc16', fontSize: '20px', fontWeight: 900, marginTop: '0', textTransform: 'uppercase', letterSpacing: '1px' }}>Team PlantiPower</p>
                    </div>
                </div>

                {/* Footer */}
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '50px 40px', textAlign: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>
                        L.J. Costerstraat 48  |  5916 PS Venlo, NL<br />
                        <a href="https://plantipower.com" style={{ color: '#84cc16', textDecoration: 'none', marginTop: '15px', display: 'inline-block', fontWeight: 900, letterSpacing: '2px' }}>PLANTIPOWER.COM</a>
                    </div>
                </div>

            </div>
        </div>
    );
}
