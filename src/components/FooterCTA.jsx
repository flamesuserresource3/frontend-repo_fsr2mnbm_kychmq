import { motion } from 'framer-motion';
import { Mail, Smartphone } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer id="contact" className="relative py-20">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent blur-3xl" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          Ready to taste the neighborhood?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-zinc-600 dark:text-zinc-300"
        >
          Join our beta and get early access to the best home-cooked meals around you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-600/30 hover:-translate-y-0.5 transition">
            <Smartphone size={18} /> Get the app
          </a>
          <a href="mailto:hello@homechef.local" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-white/10 border border-black/5 dark:border-white/10 font-semibold hover:-translate-y-0.5 transition">
            <Mail size={18} /> Contact us
          </a>
        </motion.div>

        <p className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} HomeChef — Made with love for local kitchens.</p>
      </div>
    </footer>
  );
}
