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
  { src: '/image12.jpg' },
  { src: '/image5.jpg' },
  { src: '/image6.jpg' },
  { src: '/image7.jpg' },
  { src: '/image8.jpg' },
  { src: '/image9.jpg' },
  { src: '/image10.jpg' },
  { src: '/image11.jpg' },
]

// ------------------------------------------------------------
// SHORTLETS – names are now the room type (badge removed)
// ------------------------------------------------------------
const shortlets = [
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: 'Studio',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=391,fit=crop/YKb3ZJ8pg6iypvEe/rw-37-Ebe2G0U7tRHFrIlP.jpg',
  },
  {
    name: 'Two Bedroom',
    price: '₦100,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.8,
    image: '/image3.jpg',
  },
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.8,
    image: '/image1.jpg',
  },
  {
    name: 'Three Bedroom',
    price: '₦100,000',
    type: '3 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: '/image5.jpg',
  },
  {
    name: 'One Bedroom ( Upstair )',
    price: '₦80,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: '/image8.jpg',
  },
  {
    name: 'Two Bedroom',
    price: '₦100,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: '/image9.jpg',
  },
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: '/image10.jpg',
  },
  {
    name: 'Two Bedroom',
    price: '₦100,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: '/image11.jpg',
  },
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: '/image12.jpg',
  },
  {
    name: 'Two Bedroom',
    price: '₦100,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=391,fit=crop/YKb3ZJ8pg6iypvEe/gs---ws2-G3QFQFVwN2Djj4Pk.jpg',
  },
  {
    name: 'One Bedroom',
    price: '₦50,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: '/imageabout.jpg',
  },
  {
    name: 'Two Bedroom',
    price: '₦100,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=391,fit=crop/YKb3ZJ8pg6iypvEe/gs---tb2-qVmizQLYLArID20b.jpg',
  },
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'https://www.ota-berlin.de/wp-content/uploads/fly-images/5575/3958-otApts-02_2025_tile-450x675-c.jpeg.webp',
  },
  {
    name: 'Two Bedroom',
    price: '₦60,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'https://www.xenios-apartments.de/system/dragonfly/production/2024/06/14/3ev6z8j7pm_3ojpks6kl6_xenios_apartments_hero.webp',
  },
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'https://www.xenios-apartments.de/system/dragonfly/production/2024/06/14/4oolox9n3j_9pa0pug3hj_Badezimmer2.webp',
  },
  {
    name: 'Two Bedroom',
    price: '₦100,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'https://www.xenios-apartments.de/system/dragonfly/production/2024/07/19/1ib9fidhjf_2vifobx7oz_Schlafzimmer1.webp',
  },
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'https://cdn.viennaresidence.com/img/1k/1-bedroom-1-living-room-apartment-in-cranachstra%C3%9Fe-1572.jpg',
  },
  {
    name: 'Two Bedroom',
    price: '₦100,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'https://cdn.viennaresidence.com/img/1k/1-bedroom-1-living-room-apartment-in-cranachstra%C3%9Fe-1612.jpg',
  },
  {
    name: 'One Bedroom',
    price: '₦60,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'https://cdn.viennaresidence.com/img/1k/1-bedroom-1-living-room-apartment-in-cranachstra%C3%9Fe-1614.jpg',
  },
  {
    name: 'Two Bedroom',
    price: '₦150,000',
    type: '2 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'https://www.discoverasr.com/content/dam/tal/media/images/properties/united-kingdom/london/stamford-bridge-hotel-london/gallery/4.jpg.transform/ascott-lowres/image.jpg',
  },
  {
    name: 'One Bedroom',
    price: '₦150,000',
    type: '1 Bedroom',
    location: 'Surulere, Lagos',
    rating: 4.9,
    image: 'https://www.discoverasr.com/content/dam/tal/media/images/properties/united-kingdom/london/stamford-bridge-hotel-london/apartmenttypes/typeofroom/standard-room-double/stamford-double-room.jpg.transform/ascott-lowres/image.jpg',
  },
]

// ------------------------------------------------------------
// TESTIMONIALS
// ------------------------------------------------------------
const testimonials = [
  {
    initial: 'E',
    name: 'Emeka',
    rating: 5,
    review: 'Perfect for business trips. Quiet and well-furnished.',
    color: '#C9A96E',
  },
  {
    initial: 'F',
    name: 'Fatima',
    rating: 5,
    review: 'Stylish decor and great amenities. Highly recommend GREATLANCE!',
    color: '#8B7355',
  },
  {
    initial: 'B',
    name: 'Bayo',
    rating: 4,
    review: 'Excellent value for money. Will return next month.',
    color: '#C9A96E',
  },
  {
    initial: 'A',
    name: 'Amaka',
    rating: 5,
    review:
      'Amazing stay! The apartment was spotless and in a fantastic location.',
    color: '#8B7355',
  },
  {
    initial: 'D',
    name: 'Daniel',
    rating: 5,
    review:
      'Comfortable bed, fast WiFi, and great communication. Will book again.',
    color: '#C9A96E',
  },
  {
    initial: 'C',
    name: 'Chioma',
    rating: 4,
    review: 'Lovely space and helpful staff. Minor issue resolved quickly.',
    color: '#8B7355',
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

const SectionLabel = ({ children }) => (
  <div className="flex items-center justify-center gap-4 mb-8">
    <span className="block h-px w-12 bg-[#C9A96E]" />
    <span
      className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
    >
      {children}
    </span>
    <span className="block h-px w-12 bg-[#C9A96E]" />
  </div>
)

// ------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------
const HomePage = () => {
  // --- Filter state ---
  const [filterType, setFilterType] = useState('All')

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

  return (
    <>
      <Metadata
        title="GREATLANCE APARTMENTS | Luxury Short-Let in Surulere, Lagos"
        description="Premium fully serviced short-let apartment in Surulere, Lagos. 24/7 power, security, super fast WiFi and luxury amenities."
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden rounded-lg">
        <img
          src="/backgroud.jpg"
          alt="GREATLANCE APARTMENTS – Luxury Short-Let Surulere Lagos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="block h-px w-16 bg-[#C9A96E]" />
            <span
              className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Lagos
            </span>
            <span className="block h-px w-16 bg-[#C9A96E]" />
          </div>

          <h1
            className="text-white text-5xl md:text-7xl font-light leading-tight mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: '-0.01em',
            }}
          >
            GREATLANCE
            <br />
            <span className="italic font-semibold">APARTMENTS</span>
          </h1>

          <p
            className="text-[#E8D5B0] text-sm md:text-base tracking-[0.25em] uppercase mb-12"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Luxury Short-Let &nbsp;•&nbsp; Surulere &nbsp;•&nbsp; Lagos
          </p>

          <Link
            to={routes.contact()}
            className="inline-block border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-black px-12 py-4 text-xs tracking-[0.3em] uppercase transition-all duration-500"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Book Now
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll
          </span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* ─── DUPLICATE ABOUT SECTION REMOVED ───────────────── */}

      {/* ─── AVAILABLE SHORTLETS — LIGHTEST TONE BACKGROUND, WHITE CARDS ─── */}
      <section className="py-28 px-6 bg-[#F1F5F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Our Spaces</SectionLabel>
            <h2
              className="text-3xl md:text-5xl font-light text-gray-900 mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Available <span className="italic">Shortlets</span>
            </h2>

            {/* 🔘 FILTER BUTTONS – horizontal scroll on mobile, centered grid on desktop */}
            <div className="overflow-x-auto pb-2 md:pb-0 -mx-2 px-2 md:mx-0 md:px-0">
              <div className="flex flex-nowrap md:flex-wrap gap-3 justify-start md:justify-center">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setFilterType(filter.value)}
                    className={`
                      flex-shrink-0 px-6 py-3 text-xs tracking-[0.2em] uppercase border transition-all duration-300
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

          {/* CARDS GRID – TOP-LEFT BADGE REMOVED */}
          {filteredShortlets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredShortlets.map((apt, index) => (
                <div
                  key={`${apt.name}-${index}`}
                  className="group border border-gray-100 hover:border-[#C9A96E] transition-all duration-400 overflow-hidden bg-white"
                >
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: '4/3' }}
                  >
                    {apt.image ? (
                      <img
                        src={apt.image}
                        alt={apt.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center border-b border-dashed border-gray-200">
                        <FaCamera className="text-3xl mb-2 opacity-20" />
                        <span
                          className="text-[10px] text-gray-400 tracking-[0.2em] uppercase"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Photo Coming Soon
                        </span>
                      </div>
                    )}
                    {/* 🚫 BADGE REMOVED – clean image */}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3
                        className="text-base font-semibold text-gray-900 leading-tight"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: '1.05rem',
                        }}
                      >
                        {apt.name}
                      </h3>
                      <div className="flex items-center gap-1 shrink-0">
                        <FaStar
                          className="text-[#C9A96E]"
                          style={{ fontSize: '11px' }}
                        />
                        <span
                          className="text-xs text-gray-600"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {apt.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 mb-4">
                      <FaMapMarkerAlt
                        className="text-[#C9A96E] shrink-0"
                        style={{ fontSize: '10px' }}
                      />
                      <span
                        className="text-xs text-gray-400 tracking-wide"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {apt.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <div>
                        <p
                          className="text-[10px] text-gray-400 tracking-[0.15em] uppercase mb-0.5"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Per Night
                        </p>
                        <p
                          className="text-xl text-gray-900"
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontWeight: 600,
                          }}
                        >
                          {apt.price}
                        </p>
                      </div>
                      <Link
                        to={routes.contact()}
                        className="border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-black px-5 py-2 text-[10px] tracking-[0.25em] uppercase transition-all duration-300"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        See More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p
                className="text-gray-400 text-sm tracking-wide"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
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

      {/* ─── AMENITIES — WARM / CREAM TONE ───────────────── */}
      <section className="py-28 px-6 bg-[#C8D6D0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Amenities</SectionLabel>
            <h2
              className="text-3xl md:text-5xl font-light text-gray-900"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Everything You Could <span className="italic">Ever Need</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {amenities.map(({ icon, label }) => (
              <div
                key={label}
                className="group rounded-lg flex items-start gap-3 p-5 border border-gray-100 hover:border-[#C9A96E] transition-all duration-300 bg-white"
              >
                <span className="text-[#C9A96E] mt-0.5 shrink-0">{icon}</span>
                <span
                  className="text-sm text-gray-600 leading-snug group-hover:text-gray-900 transition-colors"
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

          <div className="mt-12 border border-[#C9A96E] p-7 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F6FAF8]">
            <div>
              <p
                className="text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-1"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Refundable
              </p>
              <p
                className="text-2xl md:text-3xl font-light text-gray-900"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Caution Fee: <strong className="font-semibold">₦50,000</strong>
              </p>
            </div>
            <p
              className="text-xs text-gray-400 max-w-xs text-center sm:text-right leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              A refundable caution deposit of ₦50,000 is required at booking to
              cover any accidental damage.
            </p>
          </div>
        </div>
      </section>

      {/* ─── HOUSE RULES – NOW USING THE LIGHT PALETTE ────── */}
      <section
        ref={rulesRef}
        className="relative py-32 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(165deg, #CFDDE2 0%, #ffffff 45%, #fffdf9 100%)",
        }}
      >
        {/* 1. ANIMATED GOLDEN LIGHT – drifts upward slowly */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl animate-drift" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#C9A96E]/5 rounded-full blur-3xl animate-drift-reverse" />
        </div>

        {/* 2. DECORATIVE GOLDEN FILIGREE – top left & bottom right */}
        <div className="absolute top-8 left-8 w-16 h-16 opacity-20 pointer-events-none">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d="M0 0 L64 0 M0 0 L0 64" stroke="#C9A96E" strokeWidth="0.8" />
          </svg>
        </div>
        <div className="absolute bottom-8 right-8 w-16 h-16 opacity-20 pointer-events-none rotate-180">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d="M0 0 L64 0 M0 0 L0 64" stroke="#C9A96E" strokeWidth="0.8" />
          </svg>
        </div>

        {/* 3. ELEGANT GOLDEN FRAME – appears on scroll */}
        <div
          className={`
            absolute inset-0 border-[0.5px] border-[#C9A96E]/0 transition-all duration-1000 delay-300
            ${rulesVisible ? 'border-[#C9A96E]/20' : ''}
          `}
          style={{ margin: '24px' }}
        />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          {/* LABEL – now with wider golden wings */}
          <div
            className={`
              flex items-center justify-center gap-6 mb-10 transition-all duration-700 delay-100
              ${rulesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            <span className="block h-px w-16 bg-[#C9A96E]/60" />
            <span
              className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              House Rules
            </span>
            <span className="block h-px w-16 bg-[#C9A96E]/60" />
          </div>

          {/* HEADING – with animated golden underline */}
          <h2
            className={`
              text-4xl md:text-5xl font-light text-gray-900 mb-16
              transition-all duration-700 delay-200
              ${rulesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '-0.01em' }}
          >
            Maintaining Our{" "}
            <span className="relative italic font-medium">
              <span className="relative z-10">Peaceful Standard</span>
              <span
                className={`
                  absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-[0.4em] bg-[#C9A96E]/20
                  transition-all duration-1000 delay-700 ease-out
                  ${rulesVisible ? 'w-full' : 'w-0'}
                `}
              />
            </span>
          </h2>

          {/* RULES – sculpted entrance */}
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-6 lg:gap-8">
            {houseRules.map(({ icon, rule }, index) => (
              <div
                key={rule}
                className={`
                  group relative flex items-center gap-4 px-8 py-7 w-full sm:w-auto
                  bg-white/80 backdrop-blur-sm border border-[#e6dfd3]
                  transition-all duration-700 ease-out
                  hover:border-[#C9A96E] hover:bg-white hover:shadow-[0_20px_35px_-10px_rgba(201,169,110,0.2)]
                  ${rulesVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-12 scale-95 blur-[2px]'}
                `}
                style={{
                  transitionDelay: `${400 + index * 180}ms`,
                  boxShadow: '0 8px 18px -6px rgba(0,0,0,0.02)',
                }}
              >
                {/* GOLDEN ACCENT – transforms fully on hover */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#C9A96E] opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* ICON – with glow on hover */}
                <span className="relative">
                  <span className="absolute inset-0 bg-[#C9A96E]/20 rounded-full blur-md scale-0 group-hover:scale-150 transition-transform duration-500" />
                  <span className="relative text-[#C9A96E] text-2xl transition-transform duration-300 group-hover:scale-110">
                    {icon}
                  </span>
                </span>

                <span
                  className="text-sm text-gray-700 tracking-wide font-medium group-hover:text-gray-900 transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {rule}
                </span>
              </div>
            ))}
          </div>

          {/* SIGNATURE GOLDEN LINE – with decorative ends */}
          <div className="relative flex items-center justify-center gap-3 mt-20">
            <span className="block h-px w-12 bg-[#C9A96E]/30" />
            <span className="block w-1.5 h-1.5 rounded-full bg-[#C9A96E]/50" />
            <span className="block h-px w-12 bg-[#C9A96E]/30" />
          </div>
        </div>
      </section>

      {/* ─── GALLERY — DEEPER MUTED TONE ─────────────────── */}
      <section className="py-28 px-6 bg-[#AABEC6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Gallery</SectionLabel>
            <h2
              className="text-3xl md:text-5xl font-light text-gray-900"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A Glimpse Into Your <span className="italic">Stay</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] bg-gray-100 overflow-hidden group"
              >
                <img
                  src={img.src}
                  alt={`GREATLANCE Apartment ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GUEST REVIEWS — LIGHTEST TONE BACKGROUND, WHITE CARDS ─── */}
      <section className="py-28 px-6 bg-[#F1F5F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Guest Reviews</SectionLabel>
            <h2
              className="text-3xl md:text-5xl font-light text-gray-900"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What Our Guests <span className="italic">Are Saying</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative p-7 border border-gray-100 hover:border-[#C9A96E] transition-all duration-300 flex flex-col gap-4 bg-white"
              >
                <FaQuoteLeft
                  className="absolute top-5 right-6 opacity-10 text-2xl"
                  style={{ color: '#C9A96E' }}
                />
                <Stars count={t.rating} />
                <p
                  className="text-sm text-gray-600 leading-relaxed flex-1"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {t.review}
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4 mt-auto">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
                    style={{
                      backgroundColor: t.color,
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-gray-900 leading-tight"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-[10px] text-gray-400 tracking-[0.15em] uppercase"
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
      <section className="py-28 px-6 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          {/* ROW 1: IMAGE + TEXT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            {/* IMAGE COLUMN – your beautiful placeholder */}
            <div className="order-2 md:order-1">
              <img
                src="/imageabout.jpg"
                alt="GREATLANCE Apartments interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT COLUMN */}
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-8">
                <span className="block h-px w-12 bg-[#C9A96E]" />
                <span
                  className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
                >
                  About Us
                </span>
              </div>

              <h2
                className="text-3xl md:text-4xl font-light text-white mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                GREATLANCE
                <br />
                <span className="italic text-[#C9A96E]">Apartments</span>
              </h2>

              <p
                className="text-gray-400 text-sm md:text-base leading-relaxed mb-8"
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
                  className="text-[#E8D5B0] text-sm italic leading-relaxed"
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

          {/* ROW 2: FOLLOW US – refined, centered */}
          <div className="border-t border-white/10 pt-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                  <span className="block h-px w-12 bg-[#C9A96E]" />
                  <span
                    className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
                  >
                    Follow Us
                  </span>
                </div>
                <p
                  className="text-gray-400 text-sm leading-relaxed max-w-md"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  Stay connected and get a peek into life at GREATLANCE. Follow us
                  on social media for the latest updates, availability, and
                  exclusive offers.
                </p>
              </div>

              <div className="flex gap-4">
                {[
                  {
                    icon: <FaInstagram className="text-2xl" />,
                    label: '@greatlanceapartments',
                    platform: 'Instagram',
                  },
                  {
                    icon: <FaWhatsapp className="text-2xl" />,
                    label: 'Chat with us on WhatsApp',
                    platform: 'WhatsApp',
                  },
                  {
                    icon: <FaFacebook className="text-2xl" />,
                    label: 'GREATLANCE Apartments',
                    platform: 'Facebook',
                  },
                ].map(({ icon, label, platform }) => (
                  <a
                    key={platform}
                    href="#"
                    className="group flex flex-col items-center gap-2 border border-white/10 hover:border-[#C9A96E] px-6 py-4 transition-all duration-300"
                  >
                    <span className="text-[#C9A96E] group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </span>
                    <span
                      className="text-[10px] text-gray-300 group-hover:text-white transition-colors hidden sm:inline uppercase tracking-[0.2em]"
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
      <section className="py-24 px-6 text-center bg-[#111111]">
        <p
          className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Ready to Experience It?
        </p>
        <h2
          className="text-white text-4xl md:text-5xl font-light mb-10"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Reserve Your Stay Today
        </h2>
        <Link
          to={routes.contact()}
          className="inline-block border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-black px-14 py-4 text-xs tracking-[0.3em] uppercase transition-all duration-500"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Book Now
        </Link>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p
            className="text-gray-600 text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            © {new Date().getFullYear()} GREATLANCE Apartments · Surulere,
            Lagos
          </p>
        </div>
      </section>
    </>
  )
}

export default HomePage