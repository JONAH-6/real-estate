import { useRef, useState, useEffect, useCallback } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

// ─── ICONS (unchanged) ───────────────────────────────────────
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
    <path d="M8 5.14v14l11-7-11-7z" />
  </svg>
)
const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
)
const VolumeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
)
const MuteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
  </svg>
)
const FullscreenIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
  </svg>
)
const ExitFullscreenIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
  </svg>
)

// ─── FORMAT TIME ─────────────────────────────────────────────
const fmt = (s: number): string => {
  if (isNaN(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

// ─── VIDEO METADATA ──────────────────────────────────────────
const videos = [
  {
    src: '/video1.mp4',
    title: '1 bedroom (up stairs)',
    subtitle: '80k per night',
    num: '01',
  },
  {
    src: '/video2.mp4',
    title: 'one unit 2 bedrooma (duplex)',
    subtitle: '100k per night',
    num: '02',
  },
  {
    src: '/video3.mp4',
    title: '1 bedroom (Down floor)',
    subtitle: '60k per night',
    num: '03',
  },
  {
    src: '/video4.mp4',
    title: 'Full Property Tour',
    subtitle: '60k per night',
    num: '04',
  },
]

// ─── SINGLE VIDEO PLAYER – TIKTOK‑STYLE ON MOBILE ────────────
const VideoPlayer = ({ src, title, subtitle, num }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const hideTimer = useRef<NodeJS.Timeout>()

  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [buffered, setBuffered] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [showBigPlay, setShowBigPlay] = useState(true)

  // ─── AUTO‑HIDE CONTROLS ───────────────────────────────────
  const resetHideTimer = useCallback(() => {
    setShowControls(true)
    clearTimeout(hideTimer.current)
    if (playing) {
      hideTimer.current = setTimeout(() => setShowControls(false), 2800)
    }
  }, [playing])

  useEffect(() => {
    if (!playing) {
      setShowControls(true)
      clearTimeout(hideTimer.current)
    } else {
      hideTimer.current = setTimeout(() => setShowControls(false), 2800)
    }
    return () => clearTimeout(hideTimer.current)
  }, [playing])

  // ─── VIDEO EVENT HANDLERS ─────────────────────────────────
  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
      setShowBigPlay(false)
    } else {
      v.pause()
      setPlaying(false)
    }
    resetHideTimer()
  }

  const handleTimeUpdate = () => {
    const v = videoRef.current
    if (!v) return
    setCurrentTime(v.currentTime)
    setProgress((v.currentTime / v.duration) * 100 || 0)

    if (v.buffered.length > 0) {
      setBuffered((v.buffered.end(v.buffered.length - 1) / v.duration) * 100)
    }
  }

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current?.duration || 0)
  }

  const handleEnded = () => {
    setPlaying(false)
    setShowBigPlay(true)
    setShowControls(true)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current
    const bar = progressRef.current
    if (!v || !bar) return
    const rect = bar.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    v.currentTime = ratio * v.duration
    resetHideTimer()
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    setVolume(val)
    if (videoRef.current) videoRef.current.volume = val
    setMuted(val === 0)
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    if (muted) {
      v.muted = false
      v.volume = volume || 0.7
      setMuted(false)
    } else {
      v.muted = true
      setMuted(true)
    }
    resetHideTimer()
  }

  const toggleFullscreen = () => {
    const el = containerRef.current
    if (!document.fullscreenElement) {
      el?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
    resetHideTimer()
  }

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  return (
    <div className="mb-10 sm:mb-16">
      {/* ─── CARD HEADER – more compact on mobile ── */}
      <div className="mb-2 flex flex-wrap items-end justify-between gap-1 px-2 sm:mb-4 sm:px-1">
        <div className="flex items-center gap-2 sm:gap-4">
          <span
            className="leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 7vw, 3rem)',
              color: '#C9A96E',

              fontWeight: 300,
            }}
          >
            {num}
          </span>
          <div className="min-w-0 flex-1">
            <p
              className="truncate"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1rem, 3.8vw, 1.5rem)',
                color: '#1a1a1a',
                fontWeight: 900,
                lineHeight: 1.1,
              }}
            >
              {title}
            </p>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#ff0000',
                fontWeight: 700,
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>
        <span
          className="whitespace-nowrap"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.5rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C9A96E',
          }}
        >
          HD · {fmt(duration)}
        </span>
      </div>

      {/* ─── PLAYER CONTAINER – edge‑to‑edge on mobile, gold border only on desktop ── */}
      <div
        ref={containerRef}
        className="group relative overflow-hidden"
        style={{
          background: '#0a0a0a',
          border: '1px solid #C9A96E',
        }}
        onMouseMove={resetHideTimer}
        onMouseLeave={() => playing && setShowControls(false)}
      >
        {/* Gold corners – completely hidden on mobile (clean edge‑to‑edge) */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-5 w-5 border-l-2 border-t-2 border-[#C9A96E] sm:block" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-5 w-5 border-r-2 border-t-2 border-[#C9A96E] sm:block" />
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 hidden h-5 w-5 border-b-2 border-l-2 border-[#C9A96E] sm:block" />
        <div className="pointer-events-none absolute bottom-0 right-0 z-10 hidden h-5 w-5 border-b-2 border-r-2 border-[#C9A96E] sm:block" />

        {/* VIDEO WRAPPER – TikTok tall on mobile, 16:9 on desktop */}
        <div className="relative h-[85vh] w-full sm:h-auto sm:pt-[56.25%]">
          <video
            ref={videoRef}
            src={src}
            className="absolute inset-0 h-full w-full object-cover sm:object-contain"
            style={{ background: '#000' }}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleEnded}
            onClick={togglePlay}
            playsInline
            preload="metadata"
          />

          {/* ─── BIG PLAY BUTTON – larger hit area, semi‑transparent, responsive ── */}
          {showBigPlay && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))',
                cursor: 'pointer',
              }}
              onClick={togglePlay}
            >
              <div
                className="flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-[#C9A96E] hover:text-black"
                style={{
                  width: 'clamp(70px, 20vw, 90px)',
                  height: 'clamp(70px, 20vw, 90px)',
                  borderRadius: '50%',
                  border: '2px solid #C9A96E',
                  color: '#C9A96E',
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <div className="h-7 w-7 sm:h-7 sm:w-7">
                  <PlayIcon />
                </div>
              </div>

              {/* Overlay title – subtle, only on mobile when big play is visible */}
              <div className="pointer-events-none absolute bottom-4 left-4 sm:bottom-8 sm:left-8 sm:block">
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.5rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#C9A96E',
                    marginBottom: 2,
                  }}
                >
                  GREATLANCE APARTMENTS
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1rem, 3.5vw, 1.25rem)',
                    color: '#fff',
                    fontWeight: 300,
                  }}
                >
                  {title}
                </p>
              </div>
            </div>
          )}

          {/* ─── CONTROLS BAR – touch optimised, gradient background, full width ── */}
          <div
            className="duration-400 absolute bottom-0 left-0 right-0 px-2 pb-2 transition-opacity sm:px-3 sm:pb-3"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
              opacity: showControls ? 1 : 0,
              pointerEvents: showControls ? 'auto' : 'none',
            }}
          >
            {/* PROGRESS BAR – taller on mobile */}
            <div
              ref={progressRef}
              onClick={handleProgressClick}
              className="relative mb-2 h-3 w-full cursor-pointer rounded-full bg-white/20 transition-all duration-150 hover:h-4 sm:h-1.5 sm:hover:h-2"
            >
              <div
                className="pointer-events-none absolute bottom-0 left-0 top-0 rounded-full"
                style={{
                  width: `${buffered}%`,
                  background: 'rgba(201,169,110,0.3)',
                }}
              />
              <div
                className="pointer-events-none absolute bottom-0 left-0 top-0 rounded-full bg-[#C9A96E]"
                style={{ width: `${progress}%` }}
              />
              <div
                className="pointer-events-none absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[#C9A96E] shadow-lg sm:h-3 sm:w-3"
                style={{ left: `${progress}%` }}
              />
            </div>

            {/* BUTTON ROW – large tap targets */}
            <div className="flex items-center gap-3 sm:gap-3">
              <button
                onClick={togglePlay}
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#C9A96E]/40 bg-black/40 text-[#C9A96E] transition-colors hover:bg-[#C9A96E] hover:text-black sm:h-9 sm:w-9"
                aria-label={playing ? 'Pause' : 'Play'}
              >
                <div className="h-5 w-5 sm:h-4 sm:w-4">
                  {playing ? <PauseIcon /> : <PlayIcon />}
                </div>
              </button>

              <span className="flex-shrink-0 font-mono text-xs tracking-wider text-white/70 sm:text-[0.6rem]">
                {fmt(currentTime)} / {fmt(duration)}
              </span>

              <div className="flex-1" />

              <button
                onClick={toggleMute}
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center text-[#C9A96E] transition-colors hover:text-white sm:h-8 sm:w-8"
                aria-label={muted ? 'Unmute' : 'Mute'}
              >
                <div className="h-6 w-6 sm:h-5 sm:w-5">
                  {muted ? <MuteIcon /> : <VolumeIcon />}
                </div>
              </button>

              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={muted ? 0 : volume}
                onChange={handleVolumeChange}
                className="hidden w-20 flex-shrink-0 accent-[#C9A96E] sm:block"
                aria-label="Volume"
              />

              <button
                onClick={toggleFullscreen}
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center text-[#C9A96E] transition-colors hover:text-white sm:h-8 sm:w-8"
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
              >
                <div className="h-6 w-6 sm:h-5 sm:w-5">
                  {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── UNDER‑PLAYER LABEL – condensed, less prominent on mobile ── */}
      <div className="mt-2 flex flex-wrap items-center justify-between gap-1 px-2 sm:mt-3 sm:px-1">
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.5rem',
            color: '#9ca3af',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Surulere, Lagos · Fully Serviced Apartment
        </p>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.5rem',
            color: '#C9A96E',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          {playing ? '▶ Now Playing' : 'Paused'}
        </p>
      </div>
    </div>
  )
}

// ─── ZIGZAG LINE ─────────────────────────────────────────────
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

// ─── PAGE ────────────────────────────────────────────────────
const VideoPage = () => {
  return (
    <>
      <Metadata
        title="Apartment Video Tour | GREATLANCE — Luxury Short-Let Surulere"
        description="Watch a full video tour of our luxury serviced apartment in Surulere, Lagos."
      />

      {/* ─── PAGE HEADER – LIGHT TONE (CFDDE2) ───────────────────── */}
      <section className="bg-[#CFDDE2] px-4 pb-12 pt-20 text-center sm:px-6 sm:pb-16 sm:pt-24">
        <div className="mb-6 flex items-center justify-center gap-2 sm:gap-4">
          <Zigzag className="w-8 sm:w-12" />
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.6rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#C9A96E',
              fontWeight: 400,
            }}
          >
            Virtual Tour
          </span>
          <Zigzag className="w-8 sm:w-12" />
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 8vw, 3.75rem)',
            fontWeight: 300,
            color: '#1a1a1a',
            lineHeight: 1.15,
          }}
        >
          Apartment <em style={{ fontWeight: 600 }}>Video Tour</em>
        </h1>

        <p
          className="mx-auto max-w-xs sm:max-w-md"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 300,
            color: '#9ca3af',
            letterSpacing: '0.05em',
            marginTop: '1rem',
            lineHeight: 1.8,
          }}
        >
          See every corner of your future stay — from the living room to the
          en-suite bedrooms. Click play to explore.
        </p>

        <div className="mx-auto mt-8 flex max-w-xs flex-wrap items-center justify-center gap-6 border-t border-gray-200 pt-6 sm:max-w-md sm:gap-10">
          {[
            { v: '4', l: 'Video Tours' },
            { v: 'HD', l: 'Quality' },
            { v: '360°', l: 'Coverage' },
          ].map(({ v, l }) => (
            <div key={l} className="text-center">
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.5rem, 5vw, 1.75rem)',
                  color: '#1a1a1a',
                  fontWeight: 400,
                }}
              >
                {v}
              </p>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.55rem',
                  color: '#9ca3af',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                {l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── VIDEOS GRID – LIGHTEST TONE (F1F5F6) ──────────────── */}
      <section className="bg-[#F1F5F6] px-0 py-12 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          {videos.map((v) => (
            <VideoPlayer key={v.src} {...v} />
          ))}
        </div>
      </section>

      {/* ─── BOOKING CTA – unchanged ──────────────────────────── */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-center sm:px-6 sm:py-24">
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#C9A96E',
            marginBottom: '1.25rem',
          }}
        >
          Convinced?
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.6rem, 5vw, 2.75rem)',
            color: '#fff',
            fontWeight: 300,
            marginBottom: '2rem',
          }}
        >
          This Could Be Your Next <em>Home Away From Home</em>
        </h2>
        <Link
          to={routes.contact()}
          className="duration-400 inline-block border border-[#C9A96E] px-8 py-3 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-[#C9A96E] no-underline transition-all hover:bg-[#C9A96E] hover:text-black sm:px-14 sm:py-4"
          style={{
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Book Your Stay
        </Link>

        <div
          className="mt-12 border-t border-white/10 pt-6"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.55rem',
              color: '#4b5563',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            © {new Date().getFullYear()} GREATLANCE Apartments · Surulere,
            Lagos
          </p>
        </div>
      </section>
    </>
  )
}

export default VideoPage
