import { useState } from 'react'

import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
  FaRegCopy,
  FaCheck,
} from 'react-icons/fa'

import { Metadata } from '@redwoodjs/web'

const Zigzag = ({ width = 48, className = '' }) => {
  const height = (width / 64) * 8
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 8"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0 7 L8 1 L16 7 L24 1 L32 7 L40 1 L48 7 L56 1 L64 7"
        stroke="#C9A96E"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  )
}

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [copiedType, setCopiedType] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // --- Native Fetch Submission to Formspree ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xeelkqwo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert(
          'Oops! There was a problem submitting your form. Please try again.'
        )
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  // --- Copy to Clipboard Function ---
  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedType(type)
      setTimeout(() => setCopiedType(null), 2000)
    })
  }

  // --- Real Contact Details with copyable flag ---
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: 'Location',
      value: 'Surulere, Ikeja 101241, Lagos, Nigeria',
      copyable: false,
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      label: 'WhatsApp',
      value: '+234 901 485 6642',
      copyable: true,
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: 'Email',
      value: 'Greatlance24@gmail.com',
      copyable: true,
    },
  ]

  return (
    <>
      <Metadata
        title="Book This Apartment | Luxury Short-Let Surulere"
        description="Book your stay at our luxury serviced apartment in Surulere, Lagos. Fill in the form and we'll get back to you promptly."
      />

      {/* ─── PAGE HEADER – WITH BACKGROUND IMAGE ─────────── */}
      <section className="relative flex h-[450px] items-center justify-center overflow-hidden">
        <img
          src="bg.jpeg"
          alt="GREATLANCE Apartments Interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-3 text-center sm:px-6">
          <div className="mb-6 flex items-center justify-center gap-4">
            <Zigzag />
            <span
              className="text-xs uppercase tracking-[0.35em] text-[#C9A96E]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
              }}
            >
              Reservations
            </span>
            <Zigzag />
          </div>

          <h1
            className="text-4xl font-light text-white md:text-6xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Book This <span className="font-semibold italic">Apartment</span>
          </h1>

          <p
            className="mx-auto mt-5 max-w-sm text-sm tracking-wide text-gray-300"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Fill in your details and we'll confirm your booking within 24 hours.
          </p>
        </div>
      </section>

      {/* ─── FORM SECTION – WIDER WIDTH & REDUCED PADDING ─────────────────── */}
      <section className="bg-[#F1F5F6] px-2 pb-28 pt-6 sm:px-4">
        <div className="mx-auto max-w-6xl">
          {submitted ? (
            /* ── SUCCESS STATE ── */
            <div className="border border-[#C9A96E] bg-white p-10 text-center sm:p-16">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A96E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#C9A96E"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <h3
                className="mb-4 text-2xl font-light text-gray-900 md:text-3xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Booking Request Received
              </h3>
              <p
                className="text-sm leading-relaxed text-gray-400"
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
            /* ── FORM ── */
            <form
              onSubmit={handleSubmit}
              className="border border-gray-200 bg-white p-6 sm:p-12"
            >
              {/* Row: Full Name */}
              <div className="mb-8">
                <label
                  htmlFor="fullName"
                  className="mb-3 block text-xs uppercase tracking-[0.25em] text-gray-400"
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
                  className="w-full border-b border-gray-200 bg-transparent pb-3 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-300 focus:border-[#C9A96E]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>

              {/* Row: Email */}
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="mb-3 block text-xs uppercase tracking-[0.25em] text-gray-400"
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
                  className="w-full border-b border-gray-200 bg-transparent pb-3 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-300 focus:border-[#C9A96E]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>

              {/* Row: Phone */}
              <div className="mb-8">
                <label
                  htmlFor="phone"
                  className="mb-3 block text-xs uppercase tracking-[0.25em] text-gray-400"
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
                  className="w-full border-b border-gray-200 bg-transparent pb-3 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-300 focus:border-[#C9A96E]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>

              {/* Row: Message */}
              <div className="mb-12">
                <label
                  htmlFor="message"
                  className="mb-3 block text-xs uppercase tracking-[0.25em] text-gray-400"
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
                  className="w-full resize-none border-b border-gray-200 bg-transparent pb-3 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-300 focus:border-[#C9A96E]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#1a1a1a] py-5 text-xs uppercase tracking-[0.3em] text-white transition-all duration-500 hover:bg-[#C9A96E] hover:text-black disabled:opacity-50"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {submitting ? 'Sending...' : 'Send Booking Request'}
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

          {/* ── GOOGLE MAP – FULL WIDTH ── */}
          <div className="mt-6 w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16237026.819951711!2d3.35836!3d6.50676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c3f6f6e69a9%3A0x793f41695d5e8625!2sGreatlance%20Apartments%20-%20Double%20Room%20With%20Private%20Bathroom!5e0!3m2!1sen!2sch!4v1789903050832!5m2!1sen!2sch"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          {/* ── Contact detail strip – TIGHTER GAPS & COPY BUTTON ── */}
          <div className="mt-6 grid grid-cols-1 gap-2 text-center sm:grid-cols-3">
            {contactDetails.map(({ icon, label, value, copyable }) => (
              <div key={label} className="border border-gray-200 bg-white p-6">
                <span className="mb-3 flex justify-center text-[#C9A96E]">
                  {icon}
                </span>
                <p
                  className="mb-1 text-xs uppercase tracking-[0.2em] text-[#C9A96E]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {label}
                </p>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {value}
                  </p>

                  {copyable && (
                    <button
                      onClick={() => handleCopy(value, label)}
                      className="text-gray-400 transition-colors hover:text-[#C9A96E] focus:outline-none"
                      title="Copy to clipboard"
                    >
                      {copiedType === label ? (
                        <FaCheck className="text-xs text-green-500" />
                      ) : (
                        <FaRegCopy className="text-xs" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
