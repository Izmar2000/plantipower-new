import React from 'react';

export default function PreviewEmailPage() {
    const name = "Ramzi Hadad";
    const headerImage = 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800';

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '40px 20px' }}>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />

            <div className="max-w-7xl mx-auto mb-12 text-center">
                <h1 className="text-white text-2xl font-black uppercase tracking-widest">Premium Overlay Design</h1>
                <p className="text-emerald-100/40">Bovenste balk is weg. Logo staat nu als subtiele overlay rechtsboven in de foto.</p>
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

                {/* Clean Hero Section with Logo Overlay */}
                <div style={{ position: 'relative', width: '100%', height: '420px', overflow: 'hidden' }}>
                    <img src={headerImage} alt="Hero" style={{ width: '100%', height: '420px', objectFit: 'cover' }} />

                    {/* Logo Overlay Top Right */}
                    <div style={{ position: 'absolute', top: '30px', right: '30px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
                        <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" alt="PlantiPower" style={{ height: '28px' }} />
                    </div>

                    {/* Text Overlay Bottom */}
                    <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(0deg, #011410 0%, transparent 100%)', padding: '40px' }}>
                        <div style={{ display: 'inline-block', backgroundColor: '#84cc16', color: '#011410', fontSize: '10px', fontWeight: 900, padding: '4px 12px', borderRadius: '4px', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' }}>
                            Sample Request
                        </div>
                        <div style={{ fontSize: '48px', fontWeight: 900, lineHeight: '1.1', textTransform: 'uppercase', letterSpacing: '-2px' }}>
                            Wij veranderen niets.<br /><span style={{ color: '#84cc16' }}>Jij optimaliseert alles.</span>
                        </div>
                    </div>
                </div>

                {/* Body Content */}
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
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.5', marginBottom: '20px' }}>De ultieme biostimulant voor maximale groei.</div>
                        </div>
                    </div>

                    <div style={{ fontFamily: '"Caveat", cursive', fontSize: '26px', color: '#84cc16', lineHeight: '1.4', margin: '40px 0', textAlign: 'center' }}>
                        "We maken producten die niet alleen werken,<br />maar het verschil maken."
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

            </div>
        </div>
    );
}
