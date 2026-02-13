import { useState } from 'react'

import { Metadata } from '@redwoodjs/web'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 🔌 Connect to your preferred form handler / backend here
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <>
      <Metadata
        title="Book This Apartment | Luxury Short-Let Surulere"
        description="Book your stay at our luxury serviced apartment in Surulere, Lagos. Fill in the form and we'll get back to you promptly."
      />

      {/* ─── PAGE HEADER – LIGHT TONE ─────────────────────── */}
      <section className="pt-24 pb-16 px-6 text-center bg-[#CFDDE2]">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="block h-px w-12 bg-[#C9A96E]" />
          <span
            className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            Reservations
          </span>
          <span className="block h-px w-12 bg-[#C9A96E]" />
        </div>

        <h1
          className="text-4xl md:text-6xl font-light text-gray-900"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Book This <span className="italic font-semibold">Apartment</span>
        </h1>

        <p
          className="mt-5 text-gray-400 text-sm tracking-wide max-w-sm mx-auto"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
        >
          Fill in your details and we'll confirm your booking within 24 hours.
        </p>
      </section>

      {/* ─── FORM SECTION – LIGHTEST TONE ─────────────────── */}
      <section className="pb-28 px-6 bg-[#F1F5F6]">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            /* ── SUCCESS STATE – crisp white ── */
            <div className="border border-[#C9A96E] p-16 text-center bg-white">
              <div className="w-16 h-16 border border-[#C9A96E] rounded-full flex items-center justify-center mx-auto mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#C9A96E"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl md:text-3xl font-light text-gray-900 mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Booking Request Received
              </h3>
              <p
                className="text-gray-400 text-sm leading-relaxed"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                Thank you,{' '}
                <strong className="text-gray-600">{formData.fullName}</strong>.
                We'll be in touch within 24 hours to confirm your reservation.
              </p>
            </div>
          ) : (
            /* ── FORM – pure white ── */
            <form
              onSubmit={handleSubmit}
              className="border border-gray-200 p-10 md:p-14 bg-white"
            >
              {/* Row: Full Name */}
              <div className="mb-8">
                <label
                  htmlFor="fullName"
                  className="block text-xs text-gray-400 tracking-[0.25em] uppercase mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Adaeze Williams"
                  className="w-full border-b border-gray-200 focus:border-[#C9A96E] bg-transparent pb-3 text-gray-800 text-sm outline-none transition-colors placeholder:text-gray-300"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>

              {/* Row: Email */}
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="block text-xs text-gray-400 tracking-[0.25em] uppercase mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border-b border-gray-200 focus:border-[#C9A96E] bg-transparent pb-3 text-gray-800 text-sm outline-none transition-colors placeholder:text-gray-300"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>

              {/* Row: Phone */}
              <div className="mb-8">
                <label
                  htmlFor="phone"
                  className="block text-xs text-gray-400 tracking-[0.25em] uppercase mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  className="w-full border-b border-gray-200 focus:border-[#C9A96E] bg-transparent pb-3 text-gray-800 text-sm outline-none transition-colors placeholder:text-gray-300"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>

              {/* Row: Message */}
              <div className="mb-12">
                <label
                  htmlFor="message"
                  className="block text-xs text-gray-400 tracking-[0.25em] uppercase mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us your preferred check-in date, length of stay, number of guests, and any special requests..."
                  className="w-full border-b border-gray-200 focus:border-[#C9A96E] bg-transparent pb-3 text-gray-800 text-sm outline-none transition-colors resize-none placeholder:text-gray-300"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a1a1a] hover:bg-[#C9A96E] text-white hover:text-black py-5 text-xs tracking-[0.3em] uppercase transition-all duration-500"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Send Booking Request
              </button>

              <p
                className="mt-6 text-center text-xs text-gray-400"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                We typically respond within a few hours. Caution fee of ₦50,000
                is required to confirm booking.
              </p>
            </form>
          )}

          {/* ── Contact detail strip – clean white cards ── */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { icon: '📍', label: 'Location', value: 'Surulere, Lagos' },
              { icon: '📱', label: 'WhatsApp', value: '+234 XXX XXX XXXX' },
              { icon: '📧', label: 'Email', value: 'hello@yourdomain.com' },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="p-6 border border-gray-200 bg-white"
              >
                <span className="text-xl block mb-2">{icon}</span>
                <p
                  className="text-xs text-[#C9A96E] tracking-[0.2em] uppercase mb-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {label}
                </p>
                <p
                  className="text-sm text-gray-600"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage