import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DemoEngine from '@/components/demo/DemoEngine';

export const metadata = {
  title: "Live Demo - NameCardAI",
  description: "Experience the future of networking with our interactive AR business card demo. Try all features without signing up.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <DemoEngine />
      </main>
      <Footer />
    </div>
  );
}
