import { motion, useReducedMotion } from 'framer-motion'
import YouTubeEmbed from './YouTubeEmbed'
import teamPhoto1 from '../assets/images/vicky.jpeg'
import teamPhoto2 from '../assets/images/davud.jpeg'
import teamPhoto3 from '../assets/images/ismael.jpeg'
import teamphoto4 from '../assets/images/daniella.jpeg'
import teamPhoto5 from '../assets/images/BELINDA.png'
import teamPhoto6 from '../assets/images/WhatsApp Image 2026-06-18 at 01.58.43.jpeg'


const team = [
  {
    name: 'Keji Vicky',
    role: 'Program lead',
    mission: 'Scaling youth-led agriculture in Gasabo.',
    image: teamPhoto1,
  },
  {
    name: 'David Peter Ita',
    role: 'Marketplace manager',
    mission: 'Connecting farmers to buyers and mentors.',
    image: teamPhoto2,
  },
  {
    name: 'Ishimwe ismael',
    role: 'Training coordinator',
    mission: 'Turning practical skills into sustainable careers.',
    image: teamPhoto3,
  },
  {
    name: 'Daniella Ganza',
    role: 'Community engagement',
    mission: 'Building local networks for youth opportunity.',
    image: teamphoto4,
  },
  {
    name: 'Belinda Mutoni',
    role: 'Digital marketing',
    mission: 'Promoting SmartHarvest and its impact online.',
    image: teamPhoto5,
  },
  {
    name: 'Aguet Bior',
    role: 'Operations support',
    mission: 'Ensuring smooth program delivery and logistics.',
    image: teamPhoto6,
  },
]

export default function Team() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-[#F6F7F4] px-6 py-24 text-[#0F1D18] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2.5rem] border border-[#E2E8E0] bg-white p-10 shadow-[0_40px_120px_rgba(15,25,16,0.08)]">
          <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">The team</p>
          <div className="mt-6 grid gap-6 md:grid-cols-[1.5fr_0.85fr] md:items-end">
            <div>
              <h2 className="text-4xl font-semibold sm:text-5xl">Thinktank leadership shaping SmartHarvest.</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#4E6A5A]">
                Meet the core team who are guiding our strategy, community impact, and marketplace design with thoughtful, high-impact leadership.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-[#F3F7F1] p-6 text-right shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Thinktank</p>
              <p className="mt-3 text-lg font-semibold text-[#0F1D18]">A compact group of experts, mentors, and local leaders.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[2.5rem] bg-white p-8 shadow-[0_40px_120px_rgba(15,25,16,0.08)]">
          <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Team video</p>
          <div className="mt-6 overflow-hidden rounded-[1.75rem] bg-[#000] shadow-[0_24px_60px_rgba(0,0,0,0.18)] aspect-[16/9]">
            <YouTubeEmbed videoId="OHfaAlrtUbs" title="SmartHarvest team intro" />
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Thinktank</p>
              <h2 className="mt-3 text-3xl font-semibold">A curated carousel of our leadership.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#4E6A5A]">
              Scroll through the team members powering SmartHarvest with strategy, community insight, and operational execution.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto pb-4">
            <div className="flex snap-x snap-mandatory gap-6 px-2 sm:px-0">
              {team.map((member, index) => (
                <motion.article
                  key={member.name}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }}
                  className="snap-start min-w-[320px] flex-none rounded-[2rem] border border-[#E2E8E0] bg-[#F9FBF8] p-6 shadow-[0_20px_50px_rgba(15,25,16,0.08)] transition-transform"
                >
                  <div className="overflow-hidden rounded-[1.75rem] border border-[#D9E8D9]/60 bg-white">
                    <img src={member.image} alt={member.name} className="h-56 w-full object-contain" />
                  </div>
                  <div className="mt-5 space-y-3">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#1B5E3F]">{member.role}</p>
                    <h3 className="text-2xl font-semibold text-[#0F1D18]">{member.name}</h3>
                    <p className="text-sm leading-7 text-[#4E6A5A]">{member.mission}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[#E2E8E0] bg-white p-8 shadow-[0_24px_70px_rgba(15,25,16,0.08)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Local preview</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#0F1D18]">ALU field film</h3>
            <p className="mt-3 text-[#4E6A5A]">A raw preview from our learning journey in the field.</p>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#D9E8E0] bg-[#000] aspect-[16/9]">
              <YouTubeEmbed videoId="BFy9EKQCVPc" title="SmartHarvest field preview" />
            </div>
          </article>
          <article className="rounded-[2rem] border border-[#E2E8E0] bg-white p-8 shadow-[0_24px_70px_rgba(15,25,16,0.08)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Local preview</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#0F1D18]">Hunt For treasures</h3>
            <p className="mt-3 text-[#4E6A5A]">A short video highlight from our most recent support work.</p>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#D9E8E0] bg-[#000] aspect-[16/9]">
              <YouTubeEmbed videoId="IQspHTgB3-s" title="Meet the Leaders" />
            </div>
          </article>
           <article className="rounded-[2rem] border border-[#E2E8E0] bg-white p-8 shadow-[0_24px_70px_rgba(15,25,16,0.08)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Local preview</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#0F1D18]">Launch Your Solution</h3>
            <p className="mt-3 text-[#4E6A5A]">A short video highlight from our most recent support work.</p>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#D9E8E0] bg-[#000] aspect-[16/9]">
              <YouTubeEmbed videoId="NVHFlP3-kBU" title="Launch Your Solution" />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
