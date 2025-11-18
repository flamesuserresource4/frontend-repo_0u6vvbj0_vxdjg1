import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Layers, Camera, Wand2 } from 'lucide-react'

export default function StoryScroll() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8])
  const skew = useTransform(scrollYProgress, [0, 1], [-6, 6])
  const elevate = useTransform(scrollYProgress, [0, 1], [40, -40])

  const cards = [
    {
      icon: <Camera className="w-5 h-5" />, title: 'Capture',
      text: 'Import footage, prompts, and 3D assets into a unified, AI-native timeline.'
    },
    {
      icon: <Layers className="w-5 h-5" />, title: 'Compose',
      text: 'Stack effects, LLM prompts, and diffusion passes with non-destructive nodes.'
    },
    {
      icon: <Wand2 className="w-5 h-5" />, title: 'Generate',
      text: 'Spin up scenes, voices and music in parallel with model-aware caching.'
    },
    {
      icon: <Sparkles className="w-5 h-5" />, title: 'Ship',
      text: 'Export to socials or render in the cloud with cinematic presets.'
    },
  ]

  return (
    <section ref={ref} id="story" className="relative bg-[#0b0f17] py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(168,85,247,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div style={{ rotate, skewY: skew, y: elevate }} className="origin-top">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur p-6 text-slate-200"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-fuchsia-500/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="mb-4 inline-grid place-items-center w-10 h-10 rounded-xl bg-white/10 text-fuchsia-200 border border-white/10">
                    {c.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                  <p className="mt-2 text-slate-300/80 text-sm leading-relaxed">{c.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
