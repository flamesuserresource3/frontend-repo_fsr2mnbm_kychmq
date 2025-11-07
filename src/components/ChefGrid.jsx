import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';

const chefs = [
  {
    id: 1,
    name: 'Aisha Khan',
    cuisine: 'Pakistani & North Indian',
    rating: 4.9,
    distance: '0.8 mi',
    dishes: ['Butter Chicken', 'Biryani', 'Chapli Kebab'],
    image: 'https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Marco Rossi',
    cuisine: 'Italian',
    rating: 4.8,
    distance: '1.2 mi',
    dishes: ['Lasagna', 'Gnocchi', 'Tiramisu'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Mei Lin',
    cuisine: 'Chinese Home Style',
    rating: 4.7,
    distance: '2.0 mi',
    dishes: ['Dumplings', 'Mapo Tofu', 'Scallion Pancakes'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Luis Garcia',
    cuisine: 'Mexican',
    rating: 5.0,
    distance: '0.5 mi',
    dishes: ['Al Pastor', 'Chilaquiles', 'Elote'],
    image: 'https://images.unsplash.com/photo-1757313596665-6c89c59492a4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMdWlzJTIwR2FyY2lhfGVufDB8MHx8fDE3NjI0OTQzNjd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

function ChefCard({ chef }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
    >
      <div className="relative h-56 overflow-hidden">
        <img src={chef.image} alt={chef.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-medium shadow">
          <Star size={14} className="text-amber-500" /> {chef.rating}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{chef.name}</h3>
            <p className="text-sm text-zinc-500">{chef.cuisine}</p>
          </div>
          <div className="inline-flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-300">
            <MapPin size={16} className="text-emerald-600" /> {chef.distance}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {chef.dishes.map((d) => (
            <span key={d} className="px-2.5 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-600/10">
              {d}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:-translate-y-0.5 transition shadow">
            Order now
          </button>
          <button className="px-4 py-2 rounded-xl bg-white dark:bg-white/10 border border-black/5 dark:border-white/10 text-sm font-semibold hover:-translate-y-0.5 transition">
            View menu
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ChefGrid() {
  const items = useMemo(() => chefs, []);
  return (
    <section id="chefs" className="relative py-20">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Popular home chefs</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Curated by your neighbors. Fresh, authentic and made with love.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-white dark:bg-white/10 border border-black/5 dark:border-white/10 text-sm font-semibold hover:-translate-y-0.5 transition">See all</a>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c) => (
            <ChefCard key={c.id} chef={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
