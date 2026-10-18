import { useEffect, useRef, useState } from 'react'

import {
  FaShieldAlt,
  FaBolt,
  FaUserShield,
  FaWifi,
  FaTv,
  FaBath,
  FaSoap,
  FaMicrochip,
  FaSnowflake,
  FaBlender,
  FaCar,
  FaBroom,
  FaTshirt,
  FaUserTie,
  FaTint,
  FaHome,
  FaCamera,
  FaVolumeMute,
  FaSmokingBan,
  FaGlassCheers,
  FaMapMarkerAlt,
  FaStar,
  FaBed,
  FaQuoteLeft,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTimes,
} from 'react-icons/fa'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

// ------------------------------------------------------------
// AMENITIES
// ------------------------------------------------------------
const amenities = [
  { icon: <FaShieldAlt className="text-lg" />, label: 'Gated & Secured' },
  { icon: <FaBolt className="text-lg" />, label: '24/7 Power Supply' },
  { icon: <FaUserShield className="text-lg" />, label: '24/7 Security' },
  { icon: <FaWifi className="text-lg" />, label: 'Super Fast WiFi' },
  { icon: <FaTv className="text-lg" />, label: 'Smart TV — Netflix & YouTube' },
  { icon: <FaBath className="text-lg" />, label: 'All Rooms En-suite' },
  { icon: <FaSoap className="text-lg" />, label: 'Washing Machine' },
  { icon: <FaMicrochip className="text-lg" />, label: 'Microwave' },
  { icon: <FaSnowflake className="text-lg" />, label: 'Working Fridge' },
  { icon: <FaBlender className="text-lg" />, label: 'Blender & Toaster' },
  { icon: <FaCar className="text-lg" />, label: 'Dedicated Car Park' },
  { icon: <FaBroom className="text-lg" />, label: 'Housekeeping' },
  { icon: <FaTshirt className="text-lg" />, label: 'Dry Cleaner on Demand' },
  { icon: <FaUserTie className="text-lg" />, label: 'Chauffeur on Demand' },
  { icon: <FaTint className="text-lg" />, label: 'Very Clean Water' },
  { icon: <FaHome className="text-lg" />, label: 'Serene Environment' },
  { icon: <FaCamera className="text-lg" />, label: 'Perfect for Pictures' },
]

// ------------------------------------------------------------
// HOUSE RULES
// ------------------------------------------------------------
const houseRules = [
  { icon: <FaVolumeMute className="text-xl" />, rule: 'No Loud Music' },
  { icon: <FaSmokingBan className="text-xl" />, rule: 'No Smoking' },
  { icon: <FaGlassCheers className="text-xl" />, rule: 'No Parties' },
]

// ------------------------------------------------------------
// GALLERY IMAGES
// ------------------------------------------------------------
const galleryImages = [
  { src: 'real1.jpeg' },
  { src: 'real3.jpg' },
  { src: 'real2.jpeg' },
  { src: 'real22.jpg' },
  { src: 'image8.jpg' },
  { src: 'real7.jpg' },
  { src: 'real3.jpg' },
  { src: 'real8.jpg' },
  { src: 'real1.jpeg' },
  { src: 'real25.jpg' },
  { src: 'real27.jpg' },
  { src: 'gs---tb2-qVmizQLYLArID20b.avif' },
  { src: 'real29.jpg' },
  { src: 'real33.jpg' },
  { src: 'real11.jpg' },
  { src: '1ib9fidhjf_2vifobx7oz_Schlafzimmer1.webp' },
  { src: '1-bedroom-1-living-room-apartment-in-cranachstraße-1572.jpg' },
  { src: ' 1-bedroom-1-living-room-apartment-in-cranachstraße-1612.jpg' },
  { src: '1-bedroom-1-living-room-apartment-in-cranachstraße-1614.jpg' },
  { src: 'real3.jpg' },
  { src: 'image.webp' },
  { src: 'real1.jpeg' },
  { src: 'real3.jpg' },
  { src: 'real2.jpeg' },
  { src: 'real22.jpg' },
]

// ------------------------------------------------------------
// SHORTLETS
// ------------------------------------------------------------
const shortlets = [
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: 'Studio',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'real1.jpeg',
  },
  {
    name: 'Two Bedroom',
    price: '₦100,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.8,
    image: 'real3.jpg',
  },
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.8,
    image: 'real2.jpeg',
  },
  {
    name: 'Three Bedroom',
    price: '₦100,000',
    type: '3 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'real22.jpg',
  },
  {
    name: 'One Bedroom ( Upstair )',
    price: '₦80,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'image8.jpg',
  },
  {
    name: 'Two Bedroom',
    price: '₦100,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'real7.jpg',
  },
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: ' real3.jpg',
  },
  {
    name: 'Two Bedroom',
    price: '₦100,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'real8.jpg',
  },
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'real1.jpeg',
  },
  {
    name: 'Two Bedroom',
    price: '₦100,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'real25.jpg',
  },
  {
    name: 'One Bedroom',
    price: '₦50,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'real27.jpg',
  },
  {
    name: 'Two Bedroom',
    price: '₦100,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'gs---tb2-qVmizQLYLArID20b.avif',
  },
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'real29.jpg',
  },
  {
    name: 'Two Bedroom',
    price: '₦60,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'real33.jpg',
  },
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'real11.jpg',
  },
  {
    name: 'Two Bedroom',
    price: '₦100,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: '1ib9fidhjf_2vifobx7oz_Schlafzimmer1.webp',
  },
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: '1-bedroom-1-living-room-apartment-in-cranachstraße-1572.jpg',
  },
  {
    name: 'Two Bedroom',
    price: '₦100,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: ' 1-bedroom-1-living-room-apartment-in-cranachstraße-1612.jpg',
  },
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: '1-bedroom-1-living-room-apartment-in-cranachstraße-1614.jpg',
  },
  {
    name: 'Two Bedroom',
    price: '₦150,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'real3.jpg',
  },
  {
    name: 'One Bedroom',
    price: '₦150,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'image.webp',
  },
]

// ------------------------------------------------------------
// TESTIMONIALS – REAL REVIEWS FROM LIVE SITE
// ------------------------------------------------------------
const testimonials = [
  {
    name: 'Marylusa Geneva',
    rating: 5,
    review:
      'I enjoyed my stay at Greatlance apartments. I and my team were warmly welcome and well treated. Sister Deborah has been so nice and friendly as well as the gateman. I will miss her, I highly recommend the greatlance apartment to anyone.',
    image: 'review1.jpg', // Save the image from Google as review1.jpg in your public folder
  },
  {
    name: 'Marcus Abigail Melody',
    rating: 5,
    review:
      'Greatlance offer a great feel of home away from home the apartment was warm and welcoming, thanks to the manager exceptional service my team and i had a great time during our stay. I highly recommend it Greatlance Apartments to everyone. Rating 5/5 stars!',
    image: 'review2.jpg', // Save the image as review2.jpg
  },
  {
    name: 'Sophia Ejue',
    rating: 5,
    review:
      'My three-day stay at Greatlance Apartments was an absolute delight. Beautiful customer service, serene environment and uninterrupted power/internet supply. I absolutely enjoyed my stay.',
    image: 'review3.jpg', // Save the image as review3.jpg
  },
  {
    name: 'Ifeoma Eze',
    rating: 5,
    review:
      "Greatlance Apartments was absolutely fantastic! The place was impeccably clean, comfortable, and had all the amenities like a comfy bed, a well-equipped kitchen and unique furnishing I needed for a relaxing stay. The location was perfect for proximity to my activities. The host was also amazing - very communicative, helpful, and made sure I had everything I needed. I wouldn't hesitate to recommend this shortlet to anyone looking for a great place to stay on Lagos Mainland.",
    image: 'review4.jpg', // Save the image as review4.jpg
  },
  {
    name: 'Mogbeyi Ajila',
    rating: 5,
    review:
      'I recently had an exceptional stay at Greatlance Apartments in Lagos. The environment was cozy and serene, truly providing a home-away-from-home experience. All facilities met high standards, and the management was notably patient and attentive to my needs. A special mention goes to Debbie, a staff member who went above and beyond to ensure my comfort. I wholeheartedly recommend Greatlance Apartments to anyone seeking a peaceful and serene stay in Lagos.',
    image: 'review5.jpg', // Save the image as review5.jpg
  },
  {
    name: 'Chioma',
    rating: 4,
    review: 'Lovely space and helpful staff. Minor issue resolved quickly.',
    initial: 'C',
    color: '#C9A96E',
  },
]

// ------------------------------------------------------------
// HELPER COMPONENTS
// ------------------------------------------------------------
const Stars = ({ count, max = 5 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: max }).map((_, i) => (
      <FaStar
        key={i}
        className={i < count ? 'text-[#C9A96E]' : 'text-gray-300'}
        style={{ fontSize: '11px' }}
      />
    ))}
  </div>
)

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

const SectionLabel = ({ children }) => (
  <div className="mb-8 flex items-center justify-center gap-4">
    <Zigzag />
    <span
      className="text-xs uppercase tracking-[0.35em] text-[#C9A96E]"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
    >
      {children}
    </span>
    <Zigzag />
  </div>
)

// ------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------
const HomePage = () => {
  // --- Filter state ---
  const [filterType, setFilterType] = useState('All')

  // --- Selected Apartment State for Modal ---
  const [selectedApt, setSelectedApt] = useState(null)

  // --- Expanded Review State (Guest Reviews) ---
  const [expandedReview, setExpandedReview] = useState<string | null>(null)

  // --- Ref & state for House Rules animation ---
  const rulesRef = useRef(null)
  const [rulesVisible, setRulesVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRulesVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (rulesRef.current) observer.observe(rulesRef.current)
    return () => observer.disconnect()
  }, [])

  // --- Filtered shortlets ---
  const filteredShortlets = shortlets.filter((apt) => {
    if (filterType === 'All') return true
    if (filterType === 'Studio' && apt.type === 'Studio') return true
    if (filterType === '1 Bedroom' && apt.type === '1 Bedroom') return true
    if (filterType === '2 Bedroom' && apt.type === '2 Bedroom') return true
    if (filterType === '3 Bedroom' && apt.type === '3 Bedroom') return true
    return false
  })

  // --- Filter button definitions ---
  const filters = [
    { label: 'All Rooms', value: 'All' },
    { label: '1 Bedroom', value: '1 Bedroom' },
    { label: '2 Bedroom', value: '2 Bedroom' },
    { label: '3 Bedroom', value: '3 Bedroom' },
  ]

  // --- WhatsApp Message Generator ---
  const getWhatsAppLink = (apt) => {
    const phone = '2349014856642'
    const message = `Hello, I am interested in renting the ${apt.name} (${apt.type}) at GREATLANCE Apartments for ${apt.price} per night. Can you share more details?`
    return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`
  }

  return (
    <>
      <Metadata
        title="GREATLANCE APARTMENTS | Luxury Short-Let in Surulere, Lagos"
        description="Premium fully serviced short-let apartment in Surulere, Lagos. 24/7 power, security, super fast WiFi and luxury amenities."
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden rounded-lg">
        <img
          src="bg.jpeg"
          alt="GREATLANCE APARTMENTS – Luxury Short-Let Surulere Lagos"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 mx-auto max-w-4xl px-3 text-center sm:px-6">
          <h1
            className="mb-6 text-5xl font-light leading-tight text-white md:text-7xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: '-0.01em',
            }}
          >
            GREATLANCE
            <br />
            <span className="font-semibold italic">APARTMENTS</span>
          </h1>

          <p
            className="mb-12 text-sm uppercase tracking-[0.25em] text-[#E8D5B0] md:text-base"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Luxury Short-Let &nbsp;•&nbsp; Surulere &nbsp;•&nbsp; Lagos
          </p>

          <Link
            to={routes.contact()}
            className="inline-block border border-[#C9A96E] px-12 py-4 text-xs uppercase tracking-[0.3em] text-[#C9A96E] transition-all duration-500 hover:bg-[#C9A96E] hover:text-black"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* ─── AVAILABLE SHORTLETS ─── */}
      <section className="bg-[#F1F5F6] py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-3 sm:px-6">
          <div className="mb-8 text-center">
            <SectionLabel>Our Spaces</SectionLabel>
            <h2
              className="mb-6 text-3xl font-light text-gray-900 md:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Available <span className="italic">Shortlets</span>
            </h2>

            <div className="-mx-2 overflow-x-auto px-2 pb-2 md:mx-0 md:px-0 md:pb-0">
              <div className="flex flex-nowrap justify-start gap-2 md:flex-wrap md:justify-center">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setFilterType(filter.value)}
                    className={`
                      flex-shrink-0 border px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-all duration-300
                      ${
                        filterType === filter.value
                          ? 'border-[#C9A96E] bg-[#C9A96E] text-black'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-[#C9A96E] hover:text-gray-900'
                      }
                    `}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredShortlets.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {filteredShortlets.map((apt, index) => (
                <div
                  key={`${apt.name}-${index}`}
                  className="group overflow-hidden border border-[#E6ECEA] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A96E] hover:shadow-[0_25px_50px_-30px_rgba(26,26,26,0.35)]"
                >
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: '4/3' }}
                  >
                    {apt.image ? (
                      <img
                        src={apt.image}
                        alt={apt.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center border-b border-dashed border-gray-200 bg-gray-100">
                        <FaCamera className="mb-2 text-3xl opacity-20" />
                        <span
                          className="text-[10px] uppercase tracking-[0.2em] text-gray-400"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Photo Coming Soon
                        </span>
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                    <div className="absolute left-3 top-3 flex items-center gap-1 bg-white/90 px-2 py-1 backdrop-blur-sm">
                      <FaStar
                        className="text-[#C9A96E]"
                        style={{ fontSize: '10px' }}
                      />
                      <span
                        className="text-[10px] font-semibold text-gray-800"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {apt.rating}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                      <h3
                        className="font-semibold leading-tight text-white"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: '1.25rem',
                        }}
                      >
                        {apt.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-1.5">
                        <FaMapMarkerAlt
                          className="shrink-0 text-[#E8D5B0]"
                          style={{ fontSize: '9px' }}
                        />
                        <span
                          className="text-[10px] tracking-wide text-[#E8D5B0]"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {apt.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-3.5 py-3 sm:px-4">
                    <div>
                      <p
                        className="text-[9px] uppercase tracking-[0.15em] text-gray-400"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Per Night
                      </p>
                      <p
                        className="text-lg text-gray-900"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 600,
                        }}
                      >
                        {apt.price}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedApt(apt)}
                      className="border border-[#C9A96E] px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-[#C9A96E] transition-all duration-300 hover:bg-[#C9A96E] hover:text-black"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      See More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p
                className="text-sm tracking-wide text-gray-400"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                No 3‑bedroom apartments available at the moment.
                <br />
                Please check back soon or{' '}
                <Link
                  to={routes.contact()}
                  className="text-[#C9A96E] underline underline-offset-4 hover:text-[#b38f4a]"
                >
                  contact us
                </Link>{' '}
                for custom requests.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ─── AMENITIES ───────────────── */}
      <section className="bg-[#C8D6D0] py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-3 sm:px-6">
          <div className="mb-8 text-center">
            <SectionLabel>Amenities</SectionLabel>
            <h2
              className="text-3xl font-light text-gray-900 md:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Everything You Could <span className="italic">Ever Need</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-2.5 lg:grid-cols-5">
            {amenities.map(({ icon, label }) => (
              <div
                key={label}
                className="group flex items-center gap-2.5 border border-[#DCE5E0] bg-white px-3 py-2.5 transition-all duration-300 hover:border-[#C9A96E] hover:shadow-[0_12px_25px_-18px_rgba(201,169,110,0.6)]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8D6D0]/40 text-[#C9A96E] transition-colors duration-300 group-hover:bg-[#C9A96E] group-hover:text-white">
                  {icon}
                </span>
                <span
                  className="text-[12px] leading-snug text-gray-600 transition-colors group-hover:text-gray-900 sm:text-[13px]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border border-[#C9A96E] bg-[#F6FAF8] p-4 sm:flex-row sm:p-5">
            <div>
              <p
                className="mb-1 text-xs uppercase tracking-[0.3em] text-[#C9A96E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Refundable
              </p>
              <p
                className="text-2xl font-light text-gray-900 md:text-3xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Caution Fee: <strong className="font-semibold">₦50,000</strong>
              </p>
            </div>
            <p
              className="max-w-xs text-center text-xs leading-relaxed text-gray-400 sm:text-right"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              A refundable caution deposit of ₦50,000 is required at booking to
              cover any accidental damage.
            </p>
          </div>
        </div>
      </section>

      {/* ─── HOUSE RULES ────── */}
      <section
        ref={rulesRef}
        className="relative overflow-hidden py-32"
        style={{
          background:
            'linear-gradient(165deg, #CFDDE2 0%, #ffffff 45%, #fffdf9 100%)',
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-drift absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-[#C9A96E]/5 blur-3xl" />
          <div className="animate-drift-reverse absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-[#C9A96E]/5 blur-3xl" />
        </div>

        <div className="pointer-events-none absolute left-8 top-8 h-16 w-16 opacity-20">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path
              d="M0 0 L64 0 M0 0 L0 64"
              stroke="#C9A96E"
              strokeWidth="0.8"
            />
          </svg>
        </div>
        <div className="pointer-events-none absolute bottom-8 right-8 h-16 w-16 rotate-180 opacity-20">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path
              d="M0 0 L64 0 M0 0 L0 64"
              stroke="#C9A96E"
              strokeWidth="0.8"
            />
          </svg>
        </div>

        <div
          className={`
            absolute inset-0 border-[0.5px] border-[#C9A96E]/0 transition-all delay-300 duration-1000
            ${rulesVisible ? 'border-[#C9A96E]/20' : ''}
          `}
          style={{ margin: '24px' }}
        />

        <div className="relative z-10 mx-auto max-w-2xl px-3 text-center sm:px-6">
          <div
            className={`
              mb-10 flex items-center justify-center gap-6 transition-all delay-100 duration-700
              ${rulesVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
            `}
          >
            <Zigzag width={64} />
            <span
              className="text-xs font-light uppercase tracking-[0.4em] text-[#C9A96E]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              House Rules
            </span>
            <Zigzag width={64} />
          </div>

          <h2
            className={`
              mb-16 text-4xl font-light text-gray-900 transition-all
              delay-200 duration-700 md:text-5xl
              ${rulesVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
            `}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: '-0.01em',
            }}
          >
            Maintaining Our{' '}
            <span className="relative font-medium italic">
              <span className="relative z-10">Peaceful Standard</span>
              <span
                className={`
                  absolute bottom-1 left-1/2 h-[0.4em] w-0 -translate-x-1/2 bg-[#C9A96E]/20
                  transition-all delay-700 duration-1000 ease-out
                  ${rulesVisible ? 'w-full' : 'w-0'}
                `}
              />
            </span>
          </h2>

          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
            {houseRules.map(({ icon, rule }, index) => (
              <div
                key={rule}
                className={`
                  group relative flex w-full items-center gap-4 border border-[#e6dfd3] bg-white/80
                  px-6 py-6 backdrop-blur-sm transition-all duration-700 ease-out
                  hover:border-[#C9A96E] hover:bg-white hover:shadow-[0_20px_35px_-10px_rgba(201,169,110,0.2)]
                  sm:w-auto sm:px-8 sm:py-7
                  ${rulesVisible ? 'translate-y-0 scale-100 opacity-100 blur-0' : 'translate-y-12 scale-95 opacity-0 blur-[2px]'}
                `}
                style={{
                  transitionDelay: `${400 + index * 180}ms`,
                  boxShadow: '0 8px 18px -6px rgba(0,0,0,0.02)',
                }}
              >
                <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 bg-[#C9A96E] opacity-0 transition-all duration-300 group-hover:opacity-100" />
                <span className="relative">
                  <span className="absolute inset-0 scale-0 rounded-full bg-[#C9A96E]/20 blur-md transition-transform duration-500 group-hover:scale-150" />
                  <span className="relative text-2xl text-[#C9A96E] transition-transform duration-300 group-hover:scale-110">
                    {icon}
                  </span>
                </span>
                <span
                  className="text-sm font-medium tracking-wide text-gray-700 transition-colors group-hover:text-gray-900"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {rule}
                </span>
              </div>
            ))}
          </div>

          <div className="relative mt-20 flex items-center justify-center gap-3">
            <Zigzag />
            <span className="block h-1.5 w-1.5 rounded-full bg-[#C9A96E]/50" />
            <Zigzag />
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─────────────────── */}
      <section className="bg-[#AABEC6] py-28">
        <div className="mx-auto max-w-6xl px-3 sm:px-6">
          <div className="mb-16 text-center">
            <SectionLabel>Gallery</SectionLabel>
            <h2
              className="text-3xl font-light text-gray-900 md:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A Glimpse Into Your <span className="italic">Stay</span>
            </h2>
          </div>
        </div>

        <div className="w-full columns-2 gap-0 lg:columns-3">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group relative w-full break-inside-avoid overflow-hidden bg-gray-100"
            >
              <img
                src={img.src}
                alt={`GREATLANCE Apartment ${index + 1}`}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      {/* ─── GUEST REVIEWS – LUXURY ─── */}
      <section
        className="relative overflow-hidden py-28"
        style={{
          background:
            'linear-gradient(180deg, #F4F1EA 0%, #ffffff 45%, #F7F0E3 100%)',
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-drift absolute left-1/4 top-10 h-80 w-80 rounded-full bg-[#C9A96E]/5 blur-3xl" />
          <div className="animate-drift-reverse absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-[#C9A96E]/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-3 sm:px-6">
          <div className="mb-16 text-center">
            <SectionLabel>Guest Reviews</SectionLabel>
            <h2
              className="text-3xl font-light text-gray-900 md:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What Our Guests <span className="italic">Are Saying</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="group relative flex flex-col items-center gap-4 bg-white px-7 py-10 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(201,169,110,0.65)]"
              >
                <span className="pointer-events-none absolute inset-2.5 border border-[#C9A96E]/30 transition-colors duration-500 group-hover:border-[#C9A96E]/60" />
                <span className="pointer-events-none absolute inset-4 border border-[#C9A96E]/10" />
                <span className="absolute -top-[5px] left-1/2 block h-2.5 w-2.5 -translate-x-1/2 rotate-45 border border-[#C9A96E]/50 bg-white" />
                <FaQuoteLeft
                  className="text-2xl transition-transform duration-500 group-hover:scale-110"
                  style={{ color: '#C9A96E', opacity: 0.35 }}
                />
                <Stars count={t.rating} />
                <p
                  className={`flex-1 text-sm leading-relaxed text-gray-600 ${
                    t.review.length > 150 && expandedReview !== t.name
                      ? 'line-clamp-4'
                      : ''
                  }`}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.05rem',
                    fontStyle: 'italic',
                  }}
                >
                  "{t.review}"
                </p>
                {t.review.length > 150 && (
                  <button
                    onClick={() =>
                      setExpandedReview(
                        expandedReview === t.name ? null : t.name
                      )
                    }
                    className="-mt-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#3B7A57] transition-colors hover:text-[#2E6247]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {expandedReview === t.name ? 'Read Less' : 'Read More'}
                  </button>
                )}
                <div className="mt-auto flex w-full flex-col items-center gap-2.5 border-t border-[#EDE7DA] pt-5">
                  <div className="relative h-11 w-11 shrink-0 rounded-full ring-1 ring-[#C9A96E]/40 ring-offset-2">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white"
                      style={{
                        backgroundColor: t.color || '#C9A96E',
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      {t.initial || t.name.charAt(0)}
                    </div>
                    {t.image && (
                      <img
                        src={t.image}
                        alt={t.name}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                        className="absolute inset-0 h-full w-full rounded-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold leading-tight text-gray-900"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#C9A96E]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Verified Guest · GREATLANCE
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REDESIGNED ABOUT US – WITH IMAGE PLACEHOLDER ────── */}
      <section className="bg-[#1a1a1a] py-28">
        <div className="mx-auto max-w-6xl px-3 sm:px-6">
          <div className="mb-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <img
                src="/imageabout.jpg"
                alt="GREATLANCE Apartments interior"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="mb-8 flex items-center gap-4">
                <Zigzag />
                <span
                  className="text-xs uppercase tracking-[0.35em] text-[#C9A96E]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  About Us
                </span>
              </div>

              <h2
                className="mb-6 text-3xl font-light text-white md:text-4xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                GREATLANCE
                <br />
                <span className="italic text-[#C9A96E]">Apartments</span>
              </h2>

              <p
                className="mb-8 text-sm leading-relaxed text-gray-400 md:text-base"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                At GREATLANCE Apartments, we believe your stay should be more
                than just accommodation — it should be an experience. Our
                apartments are thoughtfully furnished, secure, and designed for
                total comfort. From weekend getaways to long business trips, we
                provide a peaceful space where you can relax, work, and feel
                truly at home.
              </p>

              <div className="border-l-2 border-[#C9A96E] pl-5">
                <p
                  className="text-sm italic leading-relaxed text-[#E8D5B0]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.05rem',
                  }}
                >
                  "Luxury isn't about price alone — it's about how a space makes
                  you feel."
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-16">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="text-center md:text-left">
                <div className="mb-4 flex items-center justify-center gap-4 md:justify-start">
                  <Zigzag />
                  <span
                    className="text-xs uppercase tracking-[0.35em] text-[#C9A96E]"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Follow Us
                  </span>
                </div>
                <p
                  className="max-w-md text-sm leading-relaxed text-gray-400"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  Stay connected and get a peek into life at GREATLANCE. Follow
                  us on social media for the latest updates, availability, and
                  exclusive offers.
                </p>
              </div>

              <div className="flex gap-3 sm:gap-4">
                {[
                  {
                    icon: <FaInstagram className="text-2xl" />,
                    label: '@greatlanceapartments',
                    platform: 'Instagram',
                    href: 'https://www.instagram.com/greatlance.shortlet?igsh=MWRhbmpuNTJza2wzcw',
                  },
                  {
                    icon: <FaWhatsapp className="text-2xl" />,
                    label: 'Chat with us on WhatsApp',
                    platform: 'WhatsApp',
                    href: 'https://api.whatsapp.com/send/?phone=2349014856642&text=Hello%2C+I+am+interested+in+a+shortlet.+Can+you+share+more+details%3F&type=phone_number&app_absent=0',
                  },
                  {
                    icon: <FaFacebook className="text-2xl" />,
                    label: 'GREATLANCE Apartments',
                    platform: 'Facebook',
                    href: 'https://www.facebook.com/profile.php?id=61557880460917&mibextid=rS40aB7S9Ucbxw6v',
                  },
                ].map(({ icon, label, platform, href }) => (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 border border-white/10 px-4 py-4 transition-all duration-300 hover:border-[#C9A96E] sm:px-6"
                  >
                    <span className="text-[#C9A96E] transition-transform duration-300 group-hover:scale-110">
                      {icon}
                    </span>
                    <span
                      className="hidden text-[10px] uppercase tracking-[0.2em] text-gray-300 transition-colors group-hover:text-white sm:inline"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {platform}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER CTA ───────────────────────────────────── */}
      <section className="bg-[#111111] py-24 text-center">
        <div className="mx-auto max-w-4xl px-3 sm:px-6">
          <p
            className="mb-6 text-xs uppercase tracking-[0.35em] text-[#C9A96E]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Ready to Experience It?
          </p>
          <h2
            className="mb-10 text-4xl font-light text-white md:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Reserve Your Stay Today
          </h2>
          <Link
            to={routes.contact()}
            className="inline-block border border-[#C9A96E] px-10 py-4 text-xs uppercase tracking-[0.3em] text-[#C9A96E] transition-all duration-500 hover:bg-[#C9A96E] hover:text-black sm:px-14"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Book Now
          </Link>

          <div className="mt-16 border-t border-white/10 pt-8">
            <p
              className="text-xs uppercase tracking-[0.2em] text-gray-600"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              © {new Date().getFullYear()} GREATLANCE Apartments · Surulere,
              Lagos
            </p>
          </div>
        </div>
      </section>

      {/* ─── SHORTLET MODAL POPUP ─────────────────────────── */}
      {selectedApt && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedApt(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden border border-[#C9A96E]/30 bg-white shadow-[0_50px_120px_-50px_rgba(0,0,0,0.7)] md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="pointer-events-none absolute inset-2 z-10 border border-[#C9A96E]/20" />

            {/* Image Section */}
            <div className="relative h-64 w-full md:h-auto md:w-1/2">
              <img
                src={selectedApt.image}
                alt={selectedApt.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-3 top-3 z-10 flex items-center gap-1 bg-white/90 px-2 py-1 backdrop-blur-sm">
                <FaStar
                  className="text-[#C9A96E]"
                  style={{ fontSize: '10px' }}
                />
                <span
                  className="text-[10px] font-semibold text-gray-800"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {selectedApt.rating}
                </span>
              </div>
            </div>

            {/* Details Section */}
            <div className="flex-1 overflow-y-auto bg-[#FDFCF9] p-6 pt-14 md:p-8 md:pt-16">
              <button
                onClick={() => setSelectedApt(null)}
                className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A96E]/40 bg-white/80 text-[#C9A96E] backdrop-blur-sm transition-all duration-300 hover:bg-[#C9A96E] hover:text-white"
              >
                <FaTimes size={13} />
              </button>

              <h3
                className="text-3xl font-semibold text-gray-900 sm:text-4xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {selectedApt.name}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-gray-500">
                <FaMapMarkerAlt className="text-[#C9A96E]" />
                <span
                  className="text-xs tracking-wide"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {selectedApt.location}
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between border border-[#C9A96E]/30 bg-white px-4 py-3">
                <div>
                  <p
                    className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Price Per Night
                  </p>
                  <p
                    className="mt-0.5 text-3xl font-semibold text-gray-900"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {selectedApt.price}
                  </p>
                </div>
                <span className="hidden items-center sm:flex">
                  <Stars count={selectedApt.rating} />
                </span>
              </div>

              <p
                className="mt-5 text-sm leading-relaxed text-gray-600"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                Fully furnished apartment in a serene environment.
              </p>

              <div className="mt-8 border-t border-[#C9A96E]/15 pt-6">
                <div className="flex flex-col items-center gap-2">
                  <h4
                    className="text-xs uppercase tracking-[0.25em] text-[#C9A96E]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Amenities
                  </h4>
                  <Zigzag width={40} />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {amenities.slice(0, 12).map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 border border-[#F0EADF] bg-white px-2.5 py-2"
                    >
                      <span className="text-xs text-[#C9A96E]">
                        {item.icon}
                      </span>
                      <span
                        className="text-[11px] text-gray-600"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={getWhatsAppLink(selectedApt)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full border border-[#C9A96E] bg-[#1a1a1a] py-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A96E] transition-all duration-500 hover:bg-[#C9A96E] hover:text-black"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Rent Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HomePage
