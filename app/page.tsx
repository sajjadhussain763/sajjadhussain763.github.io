import { getActiveEvents } from '@/lib/events';

export default function Home() {
  const activeEvents = getActiveEvents();

  return (
    <main className="animate-fade-in" style={{ paddingBottom: 'var(--spacing-16)' }}>
      {/* About Us Section - Moved to Top */}
      <section style={{ padding: 'var(--spacing-12) var(--spacing-4) 0', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-4)' }}>About PGI</h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          Paragon Group Internships & Professional Training (PGI) is a premier higher education and corporate development institute. We bridge the gap between academic theory and industry demands by delivering high-impact, transformative programs tailored for the next generation of global leaders, entrepreneurs, and technical innovators.
        </p>
      </section>

      <section className="hero-section" style={{ padding: 'var(--spacing-16) var(--spacing-4)', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="glass-panel hover-glow" style={{ padding: 'var(--spacing-12)', maxWidth: '900px', width: '100%' }}>
          <h1 className="text-gradient" style={{ fontSize: '4.5rem', marginBottom: 'var(--spacing-4)', letterSpacing: '-0.02em' }}>
            Empower Your Future with PGI
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-8)', maxWidth: '700px', margin: '0 auto var(--spacing-8)' }}>
            Discover professional training and internships designed to accelerate your career and drive innovation in the modern corporate ecosystem.
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center' }}>
            <a href="/training" className="btn-primary hover-scale">
              Explore Training
            </a>
            <a href="/services" className="btn-primary hover-scale" style={{ background: 'transparent', border: '1px solid var(--surface-border)' }}>
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Dynamic Live Events Module */}
      <section style={{ padding: 'var(--spacing-8) var(--spacing-4)', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-8)' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-2)' }}>Live Events & Offers</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Seasonal promotions dynamically rotating for your success.</p>
          </div>
          <div className="text-gradient" style={{ fontWeight: 'bold' }}>Active Now</div>
        </div>
        
        {activeEvents.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-6)' }}>
            {activeEvents.map((event) => (
              <div key={event.id} className="glass-panel hover-scale" style={{ padding: 'var(--spacing-8)', borderTop: `4px solid ${event.color}` }}>
                <div style={{ fontSize: '0.875rem', color: event.color, marginBottom: 'var(--spacing-2)', fontWeight: 600, textTransform: 'uppercase' }}>
                  {event.category}
                </div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-2)' }}>{event.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-6)' }}>{event.description}</p>
                <a href={event.actionLink} className="btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%', background: event.category === 'Executive Program' ? 'transparent' : 'var(--accent-gradient)', border: event.category === 'Executive Program' ? '1px solid var(--surface-border)' : 'none' }}>
                  {event.actionText}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-panel" style={{ padding: 'var(--spacing-12)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-secondary)' }}>New seasonal events are being scheduled. Check back soon!</h3>
          </div>
        )}
      </section>
    </main>
  );
}
