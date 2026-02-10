import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sessão Clínica Fechada | Dra. Claudia Chagas',
  description: 'Mentoria Experimental: Sessão Clínica Fechada. Participe da aula secreta e exclusiva sobre casos complexos de Tireoide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={clsx(inter.variable, playfair.variable, "font-sans antialiased bg-slate-50 text-slate-900")}>
        {children}
      </body>
    </html>
  );
}
