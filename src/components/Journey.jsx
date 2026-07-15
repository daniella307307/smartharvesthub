import { motion, useReducedMotion } from 'framer-motion'
import YouTubeEmbed from './YouTubeEmbed'
import challengePhoto1 from '../assets/images/WhatsApp Image 2026-06-03 at 14.54.38.jpeg'
import challengePhoto2 from '../assets/images/WhatsApp Image 2026-06-03 at 14.54.38 (1).jpeg'
import challengePhoto3 from '../assets/images/WhatsApp Image 2026-06-18 at 01.58.43.jpeg'
import localVideoA from '../assets/video/ALU FINAL .mp4'
const challenges = [
  {
    number: '01',
    title: 'Member Introduction',
    description: 'We began by introducing ourselves, our individual missions, and the shared belief that agriculture can be a pathway to dignity, income, and purpose for young people in Rwanda.',
    photo: challengePhoto2,
  },
  {
    number: '02',
    title: 'Discover Africa',
    description: 'We explored our local African community and the realities shaping agricultural opportunity, from land access to youth employment and food systems.',
    photo: challengePhoto1,
  },
  {
    number: '03',
    title: 'Help Lab',
    description: 'We moved from conversation into action, taking part in hands-on community service and farming activities that grounded our work in lived experience.',
    photo: challengePhoto3,
  },
  {
    number: '04',
    title: 'Hunt for Treasure',
    description: 'We interviewed a leading agricultural entrepreneur to learn how real farms operate, what skills matter, and where opportunity already exists.',
    photo: challengePhoto2,
  },
  {
    number: '05',
    title: 'Launch Your Mission',
    description: 'We defined and presented our final mission: a platform that helps young people build skills, connect to mentorship, and grow through sustainable agriculture.',
    photo: challengePhoto3,
  },
]

export default function Journey() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="journey" className="bg-[#F6F7F4] px-6 py-24 text-[#0F1D18] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Our journey</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            A refined path from fieldwork to future-ready impact.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4E6A5A]">
            The five challenges that shaped SmartHarvest — from partnership and practice to product, people, and purpose.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] border border-[#E2E8E0] bg-white p-8 shadow-[0_30px_90px_rgba(15,25,16,0.08)]"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Field highlight</p>
            <h3 className="mt-4 text-3xl font-semibold text-[#0F1D18]">Help Lab in motion</h3>
            <p className="mt-5 text-[#4E6A5A] leading-7">
              See our community-centered action in the lab, where youth learning meets practical farming impact.
            </p>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#D9E8D9]/70 bg-[#000] aspect-[16/9]">
              <video src={localVideoA} controls className="h-full w-full object-cover bg-black" />
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] border border-[#E2E8E0] bg-[#F3F7F1] p-8 shadow-[0_24px_70px_rgba(15,25,16,0.07)]"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Why it matters</p>
            <div className="mt-6 space-y-4 text-[#4E6A5A] leading-7">
              <p>From local mentorship to digital marketplaces, this journey connects learning with lasting farm-side impact.</p>
              <p>Every challenge became a learning node: stronger networks, deeper local insight, and a launchpad for youth-led agriculture.</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Community</p>
                <p className="mt-3 text-[#4E6A5A]">Engagement and service built trust and relevance for every project.</p>
              </div>
              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Skills</p>
                <p className="mt-3 text-[#4E6A5A]">Hands-on farming, entrepreneurship, and digital knowledge moved ideas into practice.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 relative">
          <div className="pointer-events-none absolute left-5 top-10 hidden h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-[#39FF6A] to-transparent md:block" />
          <div className="space-y-8">
            {challenges.map((item, index) => (
              <motion.article
                key={item.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                className="relative overflow-hidden rounded-[2rem] border border-[#E2E8E0] bg-white shadow-[0_24px_80px_rgba(15,25,16,0.06)] transition-transform"
              >
                <div className="md:absolute md:left-0 md:top-6 md:block">
                  <div className="hidden h-6 w-6 rounded-full border-4 border-white bg-[#39FF6A] shadow-[0_0_0_8px_rgba(57,255,106,0.15)] md:block" />
                </div>
                <div className="grid gap-6 p-8 md:grid-cols-[1fr_280px] md:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#1B5E3F]">Step {item.number}</p>
                    <h3 className="mt-4 text-2xl font-semibold text-[#0F1D18]">{item.title}</h3>
                    <p className="mt-4 text-[#4E6A5A] leading-7">{item.description}</p>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#EFF6EF]">
                    <img src={item.photo} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
