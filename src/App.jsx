import { Link, Route, Routes } from 'react-router-dom'
import { Hero } from './components/Hero'
import Journey from './components/Journey'
import Team from './components/Team'
import Mission from './components/Mission'
import Footer from './components/Footer'

function HomePage() {
  return (
    <div className="bg-[#F7F8F6] text-[#0E1B16]">
      <Hero />
      <Journey />
      <Mission />
      <Team />
      <Footer />
    </div>
  )
}

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-black px-6 text-center text-white">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">404</p>
        <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-zinc-400">The route you requested does not exist yet.</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#F6F7F4] text-[#0F1D18]">
      <nav className="sticky top-0 z-50 border-b border-white/80 bg-white/90 backdrop-blur-2xl shadow-[0_25px_90px_rgba(15,25,16,0.06)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-lg font-semibold tracking-wide text-[#0F1D18]">
            Smart Harvest
          </Link>
          <div className="flex gap-6 text-sm text-[#4E6A5A]">
            <Link to="/" className="transition hover:text-[#1B5E3F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF6A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F7F4]">
              Home
            </Link>
            <Link to="/journey" className="transition hover:text-[#1B5E3F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF6A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F7F4]">
              Journey
            </Link>
            <Link to="/mission" className="transition hover:text-[#1B5E3F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF6A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F7F4]">
              Mission
            </Link>
            <Link to="/team" className="transition hover:text-[#1B5E3F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF6A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F7F4]">
              Team
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
