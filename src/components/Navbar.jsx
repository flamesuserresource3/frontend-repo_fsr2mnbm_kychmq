import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Bike, MapPin, Search } from 'lucide-react';

export default function Navbar() {
  const [query, setQuery] = useState('');

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-zinc-900/60 border-b border-white/20 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 font-semibold tracking-tight text-zinc-900 dark:text-white"
          aria-label="Home"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-500 text-white shadow-md">
            <Bike size={18} />
          </span>
          HomeChef
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => scrollTo('chefs')} className="hover:text-emerald-600 transition-colors">Chefs</button>
          <button onClick={() => scrollTo('how')} className="hover:text-emerald-600 transition-colors">How it works</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-emerald-600 transition-colors">Contact</button>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
            <MapPin size={16} className="text-emerald-600" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your location"
              className="bg-transparent outline-none placeholder:text-zinc-400 text-sm w-40"
            />
            <Search size={16} className="text-zinc-500" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
