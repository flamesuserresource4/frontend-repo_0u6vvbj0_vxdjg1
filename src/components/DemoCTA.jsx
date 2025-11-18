import { motion } from 'framer-motion'

export default function DemoCTA() {
  return (
    <section id="demo" className="relative bg-[#0b0f17] py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_30%_at_0%_100%,rgba(56,189,248,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-10">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs tracking-widest text-cyan-300/80">IN-BROWSER STUDIO</div>
              <h3 className="mt-2 text-3xl md:text-4xl font-bold text-white">
                Generate. Edit. Publish.
              </h3>
              <p className="mt-3 text-slate-300/85">
                Run model-powered renders right in your browser with GPU offloading. No installs, no drivers, just create.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 text-slate-200 text-sm px-3 py-1 border border-white/10">Video</span>
                <span className="rounded-full bg-white/10 text-slate-200 text-sm px-3 py-1 border border-white/10">Image</span>
                <span className="rounded-full bg-white/10 text-slate-200 text-sm px-3 py-1 border border-white/10">Audio</span>
                <span className="rounded-full bg-white/10 text-slate-200 text-sm px-3 py-1 border border-white/10">3D</span>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-3 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:brightness-110 transition">
                  Get started
                </a>
                <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-slate-200 hover:bg-white/10 transition">
                  Watch a tour
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                <div className="w-full h-full bg-[#0e1421] grid place-items-center text-slate-300">
                  <div className="text-center">
                    <div className="text-xs tracking-widest text-sky-300/70">LIVE ENGINE</div>
                    <div className="mt-2 text-2xl font-semibold text-white">Model Orchestrator</div>
                    <div className="mt-2 text-slate-300/80">Parallel jobs, smart caching, scene graph.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
