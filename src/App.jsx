import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChefGrid from './components/ChefGrid';
import HowItWorks from './components/HowItWorks';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white scroll-smooth">
      {/* Decorative background blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <ChefGrid />
        <HowItWorks />
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;
