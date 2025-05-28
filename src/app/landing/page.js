import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LandingEngine from '@/components/landing/LandingEngine';

export const metadata = {
  title: "Transform Your Networking - NameCardAI Landing",
  description: "Stop wasting money on paper business cards. Create stunning AR business cards that get results. Join 2.5M+ professionals who've made the switch.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <LandingEngine />
      </main>
      <Footer />
    </div>
  );
}
