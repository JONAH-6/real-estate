import { useEffect, useState } from 'react'

import { Link, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    // 🎨 Background updated to #CFDDE2 – light, airy, perfectly balanced
    <div className="min-h-screen bg-[#CFDDE2]">

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 bg-white/40 backdrop-blur-md shadow-md transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            {/* LEFT — Logo */}
            <Link
              to={routes.home()}
              className="flex items-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/logo-removebg-preview.png"
                alt="Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* RIGHT — Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <NavLink to={routes.home()}>Main Hub</NavLink>
              <NavLink to={routes.video()}>Watch Videos</NavLink>
              <NavLink to={routes.contact()}>Get in Touch</NavLink>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col space-y-1"
            >
              <span className="w-6 h-[2px] bg-black transition-all duration-300"></span>
              <span className="w-6 h-[2px] bg-black transition-all duration-300"></span>
              <span className="w-6 h-[2px] bg-black transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Side Slide Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col mt-10 space-y-6 px-6">
          <MobileNavLink to={routes.home()} onClick={() => setMenuOpen(false)}>
            Main Hub
          </MobileNavLink>
          <MobileNavLink to={routes.video()} onClick={() => setMenuOpen(false)}>
            Watch Videos
          </MobileNavLink>
          <MobileNavLink
            to={routes.contact()}
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </MobileNavLink>
        </div>
      </div>

      {/* Overlay when menu open */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      {/* Space because navbar is fixed */}
      <div className="h-20" />

      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-2 py-2">{children}</main>
    </div>
  )
}

const NavLink = ({ to, children }: any) => {
  return (
    <Link
      to={to}
      className="relative group text-gray-700 font-medium tracking-wide transition-colors duration-300 hover:text-black"
    >
      {children}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

const MobileNavLink = ({ to, children, onClick }: any) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block text-gray-700 font-medium text-lg hover:text-black transition-colors duration-300"
    >
      {children}
    </Link>
  )
}

export default MainLayout