import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PitchDeckEngine from '@/components/pitch/PitchDeckEngine';

export const metadata = {
  title: "Investor Pitch - NameCardAI",
  description: "Discover the revolutionary future of networking. See why NameCardAI is the next big opportunity in AR technology and digital business cards.",
};

export default function PitchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PitchDeckEngine />
      </main>
      <Footer />
    </div>
  );
}
