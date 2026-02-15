import React from 'react';

export default function PreviewEmailPage() {
    const name = "Ramzi Hadad";
    const headerImage = 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800';

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '40px 20px' }}>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />

            <div className="max-w-7xl mx-auto mb-12 text-center">
                <h1 className="text-white text-2xl font-black uppercase tracking-widest">PlantiPower Official Template</h1>
                <p className="text-emerald-100/40">Gedesigned op basis van het officiële John Geenen template.</p>
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

                {/* Top Bar */}
                <div style={{ backgroundColor: '#ffffff', color: '#011410', padding: '10px 40px', textAlign: 'right', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Mail 1 van 3 | Welkom bij PlantiPower
                </div>

                {/* Hero Section */}
                <div style={{ position: 'relative', width: '100%', height: '480px', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '0', left: '40px', backgroundColor: '#012b24', padding: '20px', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', z- index: 10 }}>
                    <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" alt="PlantiPower" style={{ width: '100%' }} />
                </div>
                <img src={headerImage} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(0deg, #011410 0%, transparent 100%)', padding: '40px' }}>
                    <div style={{ display: 'inline-block', backgroundColor: '#84cc16', color: '#011410', fontSize: '11px', fontWeight: 900, padding: '6px 14px', borderRadius: '0', textTransform: 'uppercase', marginBottom: '25px', letterSpacing: '1px' }}>
                        Product Update
                    </div>
                    <div style={{ fontSize: '56px', fontWeight: 900, lineHeight: '0.95', textTransform: 'uppercase', letterSpacing: '-3px' }}>
                        Wij veranderen<br />niets. <span style={{ color: '#84cc16' }}>Jij optimali-<br />seert alles.</span>
                    </div>
                </div>
            </div>

            {/* Profile & Quote */}
            <div style={{ padding: '60px 40px 40px 40px', display: 'flex', alignItems: 'center', gap: '30px' }}>
                <img src="https://plantipower.com/images/email/John.jpeg" alt="John Geenen" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
                <div style={{ width: '6px', height: '40px', backgroundColor: '#84cc16', borderRadius: '2px' }}></div>
                <div style={{ fontSize: '20px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.5px', lineHeight: 1.2, flex: 1 }}>
                    "De perfecte oogst begint bij een gezonde bodem."
                </div>
            </div>

            {/* Content Area */}
            <div style={{ padding: '0 40px 60px 40px' }}>
                <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '30px', color: '#ffffff' }}>Beste partner in groei,</div>

                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', marginBottom: '30px' }}>
                    Bij PlantiPower geloven we dat elke kweker een eigen verhaal heeft. Een verhaal van passie, doorzettingsvermogen en de constante zoektocht naar die extra procenten aan efficiëntie en kwaliteit.<br /><br />
                    In deze eerste nieuwsbrief nemen we je mee achter de schermen van onze labs in Nederland, waar we werken aan de biostimulanten van de toekomst. Geen magie, maar pure plantfysiologie.<br /><br />
                    Wij veranderen niets aan jouw vakmanschap, wij geven je enkel de tools om het nog beter te laten renderen.
                </div>

                <div style={{ marginTop: '50px' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '15px' }}>Met vriendelijke groet,</div>
                    <img src="https://plantipower.com/images/email/handtekening.webp" alt="Signature" style={{ height: '60px', marginBottom: '10px' }} />
                    <div style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase' }}>John Geenen</div>
                </div>

                <span style={{ display: 'block', fontSize: '12px', fontWeight: 900, color: '#84cc16', textTransform: 'uppercase', letterSpacing: '3px', margin: '60px 0 30px 0' }}>De Krachtbronnen</span>

                <div style={{ background: 'linear-gradient(135deg, rgba(13, 43, 36, 0.8) 0%, rgba(1, 20, 16, 1) 100%)', borderRadius: '24px', border: '1px solid rgba(132, 204, 22, 0.1)', marginBottom: '24px', overflow: 'hidden' }}>
                    <div style={{ padding: '35px' }}>
                        <div style={{ color: '#84cc16', fontSize: '10px', fontWeight: 900, marginBottom: '10px', textTransform: 'uppercase' }}>Biostimulant</div>
                        <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '10px' }}>ALL12</div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineWeight: '1.6' }}>De ultieme formule voor maximale groei en weerbaarheid.</div>
                    </div>
                </div>

                <div style={{ background: '#84cc16', padding: '30px', borderRadius: '24px', textAlign: 'center', marginTop: '40px' }}>
                    <div style={{ color: '#011410', fontWeight: 900, textTransform: 'uppercase', fontSize: '13px', letterSpacing: '1px' }}>In voorbereiding</div>
                    <div style={{ color: '#011410', fontSize: '15px', marginTop: '5px' }}>Je proefpakket (€29,95) wordt binnen 1-2 werkdagen geleverd.</div>
                </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '50px 40px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>
                    Venlo, Nederland  |  <a href="https://plantipower.com" style={{ color: '#84cc16', textDecoration: 'none', fontWeight: 900 }}>PLANTIPOWER.COM</a>
                </div>
            </div>
        </div>
    </div >
  );
}
