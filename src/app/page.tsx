import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Hero />
      <Footer />
    </main>
  );
}
