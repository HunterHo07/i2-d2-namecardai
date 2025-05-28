import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SignUpEngine from '@/components/signup/SignUpEngine';

export const metadata = {
  title: "Sign Up - Start Your AR Networking Journey",
  description: "Create your NameCardAI account and join 2.5M+ professionals using AR business cards. Free 14-day trial, no credit card required.",
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <SignUpEngine />
      </main>
      <Footer />
    </div>
  );
}
