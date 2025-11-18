import { Menu, Sparkles, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between px-5 py-3">
            <motion.a
              href="#"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="flex items-center gap-3 text-white"
            >
              <div className="relative">
                <div className="absolute inset-0 blur-md bg-gradient-to-tr from-fuchsia-500 to-indigo-400 opacity-60" />
                <div className="relative grid place-items-center w-9 h-9 rounded-xl bg-slate-900/60 border border-white/10">
                  <Sparkles className="w-5 h-5 text-fuchsia-300" />
                </div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-widest text-fuchsia-300/80">AIMEDIA</div>
                <div className="font-semibold leading-tight">Studio Suite</div>
              </div>
            </motion.a>

            <div className="hidden md:flex items-center gap-6 text-sm text-slate-200/80">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#story" className="hover:text-white transition">Story</a>
              <a href="#demo" className="hover:text-white transition">Demo</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#cta" className="ml-2 inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-4 py-2 rounded-xl shadow hover:shadow-fuchsia-500/25 transition">
                <Rocket className="w-4 h-4" />
                Launch
              </a>
            </div>

            <button className="md:hidden p-2 text-slate-200">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
