import impactPhoto from '../assets/images/WhatsApp Image 2026-06-18 at 01.58.43.jpeg'
import YouTubeEmbed from './YouTubeEmbed'

export default function Mission() {
  return (
    <section id="mission" className="bg-[#F6F7F4] px-6 py-24 text-[#0F1D18] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E2E8E0] bg-white shadow-[0_30px_90px_rgba(15,25,16,0.08)] p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Mission</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Training, mentorship, and a digital marketplace for young farmers.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4E6A5A]">
              SmartHarvest supports unemployed youth in Gasabo to build sustainable agricultural livelihoods through skills, networks, and online market access.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[1.75rem] border border-[#D9E8E0] bg-[#F3F7F1] shadow-sm">
              <img src={impactPhoto} alt="SmartHarvest impact" className="h-full w-full object-cover" />
            </div>
            <div className="rounded-[1.5rem] border border-[#D9E8E0] bg-[#F3F7F1] p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Training</p>
              <p className="mt-3 text-[#4E6A5A]">Hands-on agriculture, digital business, and market-ready production skills.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#E2E8E0] bg-white p-6 shadow-[0_24px_70px_rgba(15,25,16,0.08)]">
          <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Video glimpse</p>
          <h3 className="mt-3 text-2xl font-semibold text-[#0F1D18]">Help Lab community impact</h3>
          <p className="mt-3 max-w-2xl text-[#4E6A5A]">Watch the Help Lab session that shows our community-driven training in motion.</p>
          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#D9E8E0] bg-[#000] aspect-[16/9]">
            <YouTubeEmbed videoId="BFy9EKQCVPc" title="Help Lab community impact" />
          </div>
        </div>
      </div>
    </section>
  )
}
