
import Hero from "@/components/hero";
import Features from "@/components/features";
import Security from "@/components/security"; // Import the new Security component
import Footer from "@/components/footer";     // Import the new Footer component
import Particles from "@/components/background/Particles";
import Navigation from "@/components/navbar";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Background particles - lowest z-index */}
      <Particles
        particleColors={['#ffffff', '#e5e5e5', '#d4d4d4']}
        particleCount={120}
        particleSpread={15}
        speed={0.06}
        particleBaseSize={60}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
        className="opacity-40"
      />
      
      {/* Navigation - higher z-index */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        {/* Hero section with text-type animation */}
        <Hero />
        
        {/* Features section with MagicBento */}
        <Features />
        
        {/* Security section */}
        <Security />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
