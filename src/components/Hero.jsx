import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[120vh] overflow-hidden bg-[#0b0f17]" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f17]/20 via-[#0b0f17]/40 to-[#0b0f17]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-fuchsia-200/80 backdrop-blur">
            <span className="relative inline-flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
            </span>
            Live 3D Studio • Interactive
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            AI Media Generator
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-sky-300">& Studio Suite</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl">
            Compose videos, images and audio with a cinematic, cyberpunk-grade editor. Drag 3D assets, orchestrate AI models, and publish with one click.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#demo" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition">
              Try a live demo
            </a>
            <a href="#features" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-slate-200 hover:bg-white/10 transition">
              Explore features
            </a>
          </div>
        </motion.div>
      </div>

      {/* angled edge at bottom */}
      <div className="relative z-10">
        <svg className="block w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <polygon fill="#0b0f17" points="0,120 0,0 1440,120"></polygon>
        </svg>
      </div>
    </section>
  )
}
