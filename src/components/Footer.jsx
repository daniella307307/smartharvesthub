import { useState } from 'react'

const CONTACT_EMAIL = 'd.ganza1@alustudent.com'

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function openModal(event) {
    event.preventDefault()
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const subject = encodeURIComponent('SmartHarvest inquiry')
    const body = encodeURIComponent(`Email: ${email}\n\nQuery:\n${message}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setIsOpen(false)
  }

  return (
    <>
      <footer className="bg-[#F6F7F4] border-t border-[#E2E8E0] px-6 py-10 text-center text-sm text-[#4E6A5A]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#0F1D18]">SmartHarvest</p>
            <p className="text-xs text-[#4E6A5A]">© 2026</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#1B5E3F]">
            <button
              onClick={openModal}
              className="rounded-full border border-[#D9E8E0] bg-white px-4 py-2 text-sm font-medium text-[#0F1D18] shadow-sm transition hover:border-[#39FF6A] hover:bg-[#F4F6F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF6A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F7F4]"
            >
              Contact
            </button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#39FF6A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF6A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F7F4]"
            >
              Instagram
            </a>
            <a
              href="#"
              className="transition hover:text-[#39FF6A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF6A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F7F4]"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-[2rem] bg-white p-8 shadow-[0_40px_120px_rgba(15,25,16,0.16)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#1B5E3F]">Contact us</p>
                <h2 className="mt-3 text-2xl font-semibold text-[#0F1D18]">Send us your email and query</h2>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-sm font-semibold text-[#4E6A5A] transition hover:text-[#0F1D18]"
              >
                Close
              </button>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <label className="block text-sm font-medium text-[#0F1D18]">
                Your email
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-[#E2E8E0] bg-[#F6F7F4] px-4 py-3 text-sm text-[#0F1D18] outline-none transition focus:border-[#39FF6A] focus:ring-2 focus:ring-[#39FF6A]/30"
                />
              </label>
              <label className="block text-sm font-medium text-[#0F1D18]">
                Your query
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                  rows={5}
                  placeholder="Explain how we can help you..."
                  className="mt-2 w-full rounded-2xl border border-[#E2E8E0] bg-[#F6F7F4] px-4 py-3 text-sm text-[#0F1D18] outline-none transition focus:border-[#39FF6A] focus:ring-2 focus:ring-[#39FF6A]/30"
                />
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full border border-[#E2E8E0] px-5 py-2.5 text-sm font-medium text-[#4E6A5A] transition hover:border-[#39FF6A] hover:text-[#0F1D18]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-[#39FF6A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2ed54c]"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
