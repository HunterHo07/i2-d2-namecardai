import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RoadmapEngine from '@/components/roadmap/RoadmapEngine';

export const metadata = {
  title: "Product Roadmap - NameCardAI Future",
  description: "See what's coming next for NameCardAI. Explore our product roadmap, upcoming features, and the future of AR networking technology.",
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <RoadmapEngine />
      </main>
      <Footer />
    </div>
  );
}
