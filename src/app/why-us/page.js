import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhyUsEngine from '@/components/why-us/WhyUsEngine';

export const metadata = {
  title: "Why Choose NameCardAI - The Future of Networking",
  description: "Discover what makes NameCardAI the leading AR business card platform. See our competitive advantages, unique features, and proven results.",
};

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <WhyUsEngine />
      </main>
      <Footer />
    </div>
  );
}
