import { motion } from 'framer-motion'
import { MonitorPlay, Shapes, Music2 } from 'lucide-react'

function AngledPanel({ angle='-6', children }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl" />
      <div className={`transform rotate-${angle} origin-left`}> {children} </div>
    </div>
  )
}

export default function AngledShowcase() {
  const items = [
    {
      icon: <MonitorPlay className="w-5 h-5" />, title: 'Cinematic Editor',
      text: 'Timeline with keyframes, nodes and live model previews.'
    },
    {
      icon: <Shapes className="w-5 h-5" />, title: '3D Asset Pipeline',
      text: 'Drag GLTFs, Spline scenes and rigged avatars right into the canvas.'
    },
    {
      icon: <Music2 className="w-5 h-5" />, title: 'Audio + Voice',
      text: 'Text-to-voice, music generation and stem-aware mixing.'
    },
  ]

  return (
    <section id="features" className="relative bg-[#0b0f17] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[conic-gradient(at_100%_0%,rgba(168,85,247,0.08),transparent_30%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Designed for creators</h2>
              <p className="mt-3 text-slate-300/90">
                A studio that treats models like layers. Every effect has a visible edge and depth.
              </p>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {items.map((it, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                    <div className="inline-grid place-items-center w-9 h-9 rounded-lg bg-white/10 text-fuchsia-200 border border-white/10 mb-3">
                      {it.icon}
                    </div>
                    <div className="font-semibold text-white">{it.title}</div>
                    <div className="text-sm text-slate-300/80 mt-1">{it.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl border border-white/10 bg-[#0e1421] p-0 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(60%_40%_at_100%_0%,rgba(99,102,241,0.3),transparent)]" />
            <div className="relative aspect-video">
              <div className="absolute inset-8 rounded-2xl border border-white/10 bg-black/60 backdrop-blur">
                <div className="absolute -left-10 top-10 w-10 h-10 rotate-12 bg-gradient-to-br from-fuchsia-500/50 to-indigo-500/50 blur-xl" />
                <div className="absolute -right-10 bottom-10 w-10 h-10 -rotate-12 bg-gradient-to-br from-sky-500/40 to-indigo-500/40 blur-xl" />
                <div className="relative w-full h-full grid place-items-center text-slate-300">
                  <div className="text-center">
                    <div className="text-xs tracking-widest text-fuchsia-300/70">DEMO PREVIEW</div>
                    <div className="mt-2 text-2xl font-semibold text-white">3D Timeline + Nodes</div>
                    <div className="mt-2 text-slate-300/80">Drag models, prompt, generate, play.</div>
                  </div>
                </div>
              </div>
              {/* angled edges */}
              <svg className="absolute -bottom-8 left-0 right-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
                <polygon fill="#0e1421" points="0,120 0,0 1440,120"></polygon>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
