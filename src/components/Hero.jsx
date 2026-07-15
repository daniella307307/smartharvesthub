import { motion, useReducedMotion } from 'framer-motion'
import YouTubeEmbed from './YouTubeEmbed'
import heroVisual from '../assets/hero.png'
import heroField from '../assets/images/WhatsApp Image 2026-06-18 at 01.58.43.jpeg'

const highlights = [
  {
    title: 'Field-first learning',
    description: 'Hands-on labs that build confidence, skill, and connection to local soil.',
  },
  {
    title: 'Digital marketplace',
    description: 'A refined platform for farmers, buyers, and mentors to scale with clarity.',
  },
  {
    title: 'Community impact',
    description: 'Practical service and mentorship designed for youth-led agriculture in Gasabo.',
  },
]

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden bg-[#F6F7F4] px-6 py-24 text-[#0F1D18] sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute left-0 top-0 h-60 w-60 rounded-full bg-[#39FF6A]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-[#1B5E3F]/10 blur-3xl" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(15,29,22,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,29,22,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]"
          >
            SmartHarvest
          </motion.p>
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            Empowering Gasabo youth with elegant agriculture skills, mentorship, and market access.
          </motion.h1>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-8 text-[#496053]"
          >
            We refine local farming talent through practical learning, trusted mentoring, and a marketplace designed to grow sustainable careers.
          </motion.p>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#journey"
              className="rounded-full border border-[#D9E8D9] bg-white px-5 py-2.5 text-sm font-medium text-[#0F1D18] shadow-sm transition hover:border-[#1B5E3F] hover:bg-[#F4F6F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E3F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F7F4]"
            >
              Read our journey
            </a>
            <a
              href="#mission"
              className="rounded-full border border-[#D9E8D9] bg-[#F4F6F2] px-5 py-2.5 text-sm font-medium text-[#0F1D18] shadow-sm transition hover:border-[#1B5E3F] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E3F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F7F4]"
            >
              Discover our mission
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
          animate={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="relative rounded-[2.5rem] border border-[#D9E8D9]/70 bg-white/95 p-6 shadow-[0_40px_100px_rgba(15,25,16,0.08)] backdrop-blur-xl"
          >
            <div className="grid gap-4">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-[#E7EDE6] bg-[#F6F7F4] p-5 shadow-sm">
                  <p className="text-sm font-semibold text-[#0F1D18]">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-[#4E6A58]">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}