import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PGI | Paragon Group Internships & Professional Training",
  description: "A high-performance corporate ecosystem for training programs and service packages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="glass-panel" style={{ margin: 'var(--spacing-4) auto', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--spacing-4) var(--spacing-8)' }}>
          <div style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px' }} className="text-gradient">PGI</div>
          <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
            <a href="/" className="hover-scale">Home</a>
            <a href="/training" className="hover-scale">Training</a>
            <a href="/services" className="hover-scale">Services</a>
            <a href="/pricing" className="hover-scale">Pricing</a>
          </div>
          <a href="/admin" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Portal Login</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
