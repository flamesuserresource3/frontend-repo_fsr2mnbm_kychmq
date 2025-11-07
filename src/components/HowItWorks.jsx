import { motion } from 'framer-motion';
import { MapPin, ChefHat, Truck, Shield } from 'lucide-react';

const steps = [
  { icon: MapPin, title: 'Set your location', text: 'We’ll show chefs cooking near you for quick, fresh delivery.' },
  { icon: ChefHat, title: 'Choose homemade dishes', text: 'Browse authentic menus and daily specials from local kitchens.' },
  { icon: Truck, title: 'Delivered warm', text: 'Your meal arrives fresh and fast—track your order live.' },
  { icon: Shield, title: 'Safe & trusted', text: 'Chefs are verified and reviewed by the community.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 bg-gradient-to-b from-white to-emerald-50/40 dark:from-zinc-950 dark:to-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-center"
        >
          How it works
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur border border-black/5 dark:border-white/10 shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-500 text-white shadow-md">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
