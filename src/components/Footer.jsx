export default function Footer() {
  return (
    <footer className="relative bg-[#0b0f17] py-16" id="cta">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <div className="text-xs tracking-widest text-slate-300/70">BUILT FOR SPEED</div>
          <h4 className="mt-2 text-2xl md:text-3xl font-bold text-white">Start creating with AI today</h4>
          <p className="mt-2 text-slate-300/85 max-w-2xl mx-auto">Join the studio that blends 3D, video, audio and generative models into one seamless canvas.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition">Create free account</a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-slate-200 hover:bg-white/10 transition">Contact sales</a>
          </div>
          <div className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} AI Media Studio. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
