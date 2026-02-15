import React from 'react';

export default function PreviewEmailPage() {
    const name = "Ramzi Hadad";
    const headerImage = 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800';

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '40px 20px' }}>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />

            <div className="max-w-7xl mx-auto mb-12 text-center">
                <h1 className="text-white text-2xl font-black uppercase tracking-widest">Ultimate Newsletter Preview</h1>
                <p className="text-emerald-100/40">Inclusief ALL12, SHIELD, Reviews en die vette PlantiPower vibe.</p>
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

                {/* HERO */}
                <div style={{ position: 'relative', width: '100%', height: '440px', overflow: 'hidden' }}>
                    <img src={headerImage} alt="Hero" style={{ width: '100%', height: '440px', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '30px', right: '30px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
                        <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" alt="PlantiPower" style={{ height: '28px' }} />
                    </div>
                    <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(0deg, #011410 0%, transparent 100%)', padding: '40px' }}>
                        <div style={{ display: 'inline-block', backgroundColor: '#84cc16', color: '#011410', fontSize: '10px', fontWeight: 900, padding: '4px 12px', borderRadius: '4px', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' }}>
                            Innovation
                        </div>
                        <div style={{ fontSize: '48px', fontWeight: 900, lineHeight: '1.1', textTransform: 'uppercase', letterSpacing: '-2px' }}>
                            Wij veranderen niets.<br /><span style={{ color: '#84cc16' }}>Jij optimaliseert alles.</span>
                        </div>
                    </div>
                </div>

                <div style={{ padding: '0 40px' }}>
                    <div style={{ borderLeft: '4px solid #84cc16', paddingLeft: '24px', margin: '40px 0', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', fontSize: '18px', lineHeight: '1.6' }}>
                        "De perfecte oogst begint bij een gezonde bodem. Niet alleen wat je ziet, maar vooral wat je niet ziet onder de oppervlakte."
                    </div>

                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.8', marginBottom: '30px' }}>
                        Beste {name},<br /><br />
                        Bedankt voor je aanvraag voor het proefpakket van <b>Maxom Venlo</b>. Terwijl onze experts je pakket klaarmaken voor verzending, delen we graag waar PlantiPower voor staat.
                    </div>

                    <span style={{ fontSize: '12px', fontWeight: 900, color: '#84cc16', textTransform: 'uppercase', letterSpacing: '3px', margin: '60px 0 20px 0', display: 'block' }}>De Krachtbronnen</span>

                    {/* ALL12 */}
                    <div style={{ background: 'linear-gradient(135deg, rgba(13, 43, 36, 0.8) 0%, rgba(1, 20, 16, 1) 100%)', borderRadius: '24px', border: '1px solid rgba(132, 204, 22, 0.1)', marginTop: '20px', overflow: 'hidden' }}>
                        <div style={{ padding: '32px' }}>
                            <div style={{ background: '#84cc16', color: '#011410', fontSize: '9px', fontWeight: 900, padding: '3px 10px', borderRadius: '4px', display: 'inline-block', marginBottom: '15px', textTransform: 'uppercase' }}>Biostimulant</div>
                            <div style={{ fontSize: '32px', fontWeight: 900, marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '-1px' }}>ALL12</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px' }}>Onze vlaggenschip formule voor maximale groei, betere beworteling en een efficiënte nutriëntenopname.</div>
                            <div style={{ marginBottom: '10px', color: '#ffffff', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}><span style={{ color: '#84cc16', marginRight: '8px' }}>✓</span> 100% Natuurlijk</div>
                            <div style={{ marginBottom: '10px', color: '#ffffff', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}><span style={{ color: '#84cc16', marginRight: '8px' }}>✓</span> +12% Gemiddelde Opbrengst</div>
                        </div>
                    </div>

                    {/* SHIELD */}
                    <div style={{ background: 'linear-gradient(135deg, rgba(13, 43, 36, 0.8) 0%, rgba(1, 20, 16, 1) 100%)', borderRadius: '24px', border: '1px solid rgba(132, 204, 22, 0.1)', marginTop: '20px', overflow: 'hidden' }}>
                        <div style={{ padding: '32px' }}>
                            <div style={{ background: '#84cc16', color: '#011410', fontSize: '9px', fontWeight: 900, padding: '3px 10px', borderRadius: '4px', display: 'inline-block', marginBottom: '15px', textTransform: 'uppercase' }}>Protection</div>
                            <div style={{ fontSize: '32px', fontWeight: 900, marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '-1px' }}>SHIELD</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px' }}>Versterkt de natuurlijke weerstand tegen biotische en abiotische stressfactoren.</div>
                            <div style={{ marginBottom: '10px', color: '#ffffff', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}><span style={{ color: '#84cc16', marginRight: '8px' }}>✓</span> Stress Preventie</div>
                            <div style={{ marginBottom: '10px', color: '#ffffff', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}><span style={{ color: '#84cc16', marginRight: '8px' }}>✓</span> Krachtige Celwanden</div>
                        </div>
                    </div>

                    <span style={{ fontSize: '12px', fontWeight: 900, color: '#84cc16', textTransform: 'uppercase', letterSpacing: '3px', margin: '60px 0 20px 0', display: 'block' }}>Wat Kwekers Zeggen</span>

                    <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '20px', padding: '25px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: '1.6', marginBottom: '15px' }}>"Sinds we ALL12 gebruiken zien we een duidelijk verschil in de uniformiteit van de oogst."</div>
                        <div style={{ color: '#84cc16', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>— Glastuinbouw Westland</div>
                    </div>

                    <div style={{ fontFamily: '"Caveat", cursive', fontSize: '26px', color: '#84cc16', lineHeight: '1.4', margin: '40px 0', textAlign: 'center' }}>
                        "Snel aan de slag met jouw proefpakket."
                    </div>

                    <div style={{ background: '#84cc16', padding: '35px', textAlign: 'center', margin: '50px 0', borderRadius: '24px' }}>
                        <div style={{ color: '#011410', fontWeight: 900, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>Status Update</div>
                        <div style={{ color: '#011410', fontWeight: 600, fontSize: '16px' }}>Je pakket wordt momenteel verpakt.<br />Factuur (€29,95) volgt na levering.</div>
                    </div>

                    <div style={{ textAlign: 'right', paddingRight: '40px', marginBottom: '40px' }}>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '5px' }}>Vriendelijke groet,</p>
                        <p style={{ color: '#84cc16', fontSize: '20px', fontWeight: 900, marginTop: '0', textTransform: 'uppercase' }}>Team PlantiPower</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
