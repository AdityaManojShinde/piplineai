import ClientWrapper from '../src/components/ClientWrapper';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import HeroSection from '../src/view/HeroSection';
import Features from '../src/view/Features';
import HowItWorks from '../src/view/HowItWorks';
import Pricing from '../src/view/Pricing';
import Testimonials from '../src/view/Testimonials';

export default function Home() {
  return (
    <ClientWrapper>
      <div className="bg-gray-900 text-gray-100 min-h-screen">
        <Navbar />
        <HeroSection />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </ClientWrapper>
  );
} 