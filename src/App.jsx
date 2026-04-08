import { useState, useEffect, useRef } from "react";
import { Mail, Link, ChevronDown, ArrowRight, Zap, Target, Rocket, Users } from "lucide-react";

const founders = [
  {
    name: "Bala",
    initial: "B",
    role: "Visionary Architect",
    email: "bala@bdnv.online",
    linkedin: "https://www.linkedin.com/in/bala-subramanyam/",
    bio: "A relentless innovator with a sharp eye for scalable systems. Bala brings deep expertise in distributed architecture and product strategy, turning complex problems into elegant, high-impact solutions.",
    color: "#E63946",
    gradient: "from-red-600 to-rose-500",
    img: `images/bala.jpg`,
    tagline: "Build it right. Build it once.",
  },
  {
    name: "Dharani",
    initial: "D",
    role: "Growth Strategist",
    email: "dharani@bdnv.online",
    linkedin: "https://www.linkedin.com/in/dharani-chinta/",
    bio: "A data-driven strategist who sees opportunity where others see noise. Dharani fuses market intelligence with creative execution, driving growth engines that convert vision into measurable traction.",
    color: "#457B9D",
    gradient: "from-blue-600 to-cyan-500",
    img: "images/dharani.jpg",
    tagline: "Data speaks. I translate.",
  },
  {
    name: "Naveen",
    initial: "N",
    role: "Tech Maverick",
    email: "naveen@bdnv.online",
    linkedin: "https://www.linkedin.com/in/naveen-aaditya-chitirala-b86000153/",
    bio: "A full-stack powerhouse who thrives at the bleeding edge of technology. Naveen engineers performant, resilient platforms and believes that great code is the foundation of every great company.",
    color: "#2A9D8F",
    gradient: "from-emerald-600 to-teal-500",
    img: "images/naveen.jpg",
    tagline: "Ship fast. Ship fearlessly.",
  },
  {
    name: "Virinchi",
    initial: "V",
    role: "Design Alchemist",
    email: "virinchi@bdnv.online",
    linkedin: "https://www.linkedin.com/in/virinchi-junuthula/",
    bio: "A design-minded engineer who obsesses over every pixel and interaction. Virinchi crafts interfaces that don't just look stunning — they feel intuitive, creating experiences users never want to leave.",
    color: "#E9C46A",
    gradient: "from-amber-500 to-yellow-400",
    img: "images/virinchi.jpg",
    tagline: "Make it beautiful. Make it matter.",
  },
];

const values = [
  { icon: Zap, title: "Speed", desc: "We move fast without breaking trust." },
  { icon: Target, title: "Precision", desc: "Every decision is data-informed." },
  { icon: Rocket, title: "Ambition", desc: "We think in orders of magnitude." },
  { icon: Users, title: "Unity", desc: "Four minds, one unstoppable force." },
];

function ProfileCard({ founder, index }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex flex-col items-center group" style={{ flex: "1 1 0" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          transform: hovered ? "translateY(-12px) scale(1.03)" : "translateY(0) scale(1)",
        }}
        className="flex flex-col items-center w-full px-4 py-6 cursor-pointer"
      >
        {/* Avatar */}
        <div className="relative mb-6">
          <div
            className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 relative"
            style={{
              borderColor: hovered ? founder.color : "rgba(255,255,255,0.15)",
              transition: "border-color 0.4s ease, box-shadow 0.4s ease",
              boxShadow: hovered ? `0 0 40px ${founder.color}44, 0 20px 60px rgba(0,0,0,0.3)` : "0 10px 40px rgba(0,0,0,0.2)",
            }}
          >
            {!imgError ? (
              <img
                src={founder.img}
                alt={founder.name}
                className="w-full h-full object-cover"
                style={{
                  transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), filter 0.4s ease",
                  transform: hovered ? "scale(1.1)" : "scale(1)",
                  filter: hovered ? "brightness(1.1)" : "brightness(0.9)",
                }}
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center text-5xl font-black text-white"
                style={{ background: `linear-gradient(135deg, ${founder.color}, ${founder.color}88)` }}
              >
                {founder.initial}
              </div>
            )}
          </div>
          {/* Floating badge */}
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-widest text-white uppercase"
            style={{
              background: founder.color,
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(8px)",
              transition: "all 0.4s ease",
              whiteSpace: "nowrap",
            }}
          >
            {founder.initial}
          </div>
        </div>

        {/* Name + Role */}
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-1">{founder.name}</h3>
        <p
          className="text-sm font-semibold tracking-wider uppercase mb-3"
          style={{ color: founder.color }}
        >
          {founder.role}
        </p>

        {/* Tagline */}
        <p className="text-white/40 text-xs italic mb-4 tracking-wide">"{founder.tagline}"</p>

        {/* Bio */}
        <p
          className="text-sm text-white/60 text-center leading-relaxed max-w-xs mb-5"
          style={{
            opacity: hovered ? 1 : 0.7,
            transition: "opacity 0.4s ease",
          }}
        >
          {founder.bio}
        </p>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${founder.email}`}
            className="p-2.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
            style={{ background: hovered ? `${founder.color}22` : "transparent" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Mail size={16} />
          </a>
          <a
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
            style={{ background: hovered ? `${founder.color}22` : "transparent" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Link size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

function Separator({ vertical = true, color1, color2 }) {
  if (vertical) {
    return (
      <div className="hidden md:flex flex-col items-center justify-center self-stretch py-16" style={{ width: "2px" }}>
        <div
          className="w-full flex-1 rounded-full"
          style={{
            background: `linear-gradient(to bottom, transparent, ${color1}66, ${color2}66, transparent)`,
          }}
        />
      </div>
    );
  }
  return (
    <div className="md:hidden flex items-center justify-center w-full px-8" style={{ height: "2px" }}>
      <div
        className="h-full flex-1 rounded-full"
        style={{
          background: `linear-gradient(to right, transparent, ${color1}66, ${color2}66, transparent)`,
        }}
      />
    </div>
  );
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Animated BG */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-8" style={{ background: "radial-gradient(circle, #E6394622 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, #457B9D18 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, #2A9D8F15 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrollY > 50 ? "rgba(3,7,18,0.85)" : "transparent",
          backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
          borderBottom: scrollY > 50 ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {["#E63946", "#457B9D", "#2A9D8F", "#E9C46A"].map((c, i) => (
                <div key={i} className="w-2.5 h-8 rounded-sm" style={{ background: c, opacity: 0.9 }} />
              ))}
            </div>
            <span className="text-xl font-black tracking-tight">BDNV</span>
            <span className="text-xs text-white/30 font-medium mt-1">Inc.</span>
          </div>
          <a
            href="mailto:bala@bdnv.online"
            className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            Get in Touch <ArrowRight size={14} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20">
        {/* Header Text */}
        <div className="text-center px-6 pt-12 pb-8 md:pb-12">
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/30 mb-4">The Incredibles of the Startup World</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-4">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #E63946, #457B9D, #2A9D8F, #E9C46A)" }}>
                BDNV
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/40 max-w-xl mx-auto leading-relaxed">
              Four founders. One mission. Building what's next.
            </p>
          </div>

          {/* Scroll indicator */}
          <div
            className="mt-8 flex flex-col items-center gap-2 text-white/20"
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 1.5s ease 0.8s",
              animation: "bounce 2s infinite",
            }}
          >
            <span className="text-xs tracking-widest uppercase">Meet the Team</span>
            <ChevronDown size={18} />
          </div>
        </div>

        {/* PROFILES — The Crossing Lines Layout */}
        <div
          className="max-w-7xl mx-auto w-full px-4 pb-20"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(40px)",
            transition: "all 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.3s",
          }}
        >
          {/* Desktop: 4-col with vertical separators */}
          <div className="hidden md:flex items-stretch">
            {founders.map((f, i) => (
              <div key={f.name} className="contents">
                <ProfileCard founder={f} index={i} />
                {i < founders.length - 1 && (
                  <Separator vertical color1={founders[i].color} color2={founders[i + 1].color} />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: stacked with horizontal separators */}
          <div className="md:hidden flex flex-col gap-6">
            {founders.map((f, i) => (
              <div key={f.name}>
                <ProfileCard founder={f} index={i} />
                {i < founders.length - 1 && (
                  <div className="mt-6">
                    <Separator vertical={false} color1={founders[i].color} color2={founders[i + 1].color} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/20 text-center mb-3">What Drives Us</p>
          <h2 className="text-3xl md:text-4xl font-black text-center tracking-tight mb-16">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              const c = founders[i].color;
              return (
                <div
                  key={v.title}
                  className="group p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 cursor-default"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110"
                    style={{ background: `${c}22` }}
                  >
                    <Icon size={20} style={{ color: c }} />
                  </div>
                  <h4 className="font-bold text-white mb-1">{v.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6">
        <div
          className="max-w-3xl mx-auto text-center p-12 rounded-3xl border border-white/5"
          style={{ background: "linear-gradient(135deg, rgba(230,57,70,0.06), rgba(69,123,157,0.06), rgba(42,157,143,0.06), rgba(233,196,106,0.06))" }}
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Ready to Build Something Incredible?</h2>
          <p className="text-white/40 mb-8 max-w-md mx-auto">We're always looking for the next big challenge. Let's create something extraordinary together.</p>
          <a
            href="mailto:bala@bdnv.online"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm tracking-wide text-gray-950 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #E63946, #457B9D, #2A9D8F, #E9C46A)", backgroundSize: "200% 200%", animation: "gradientShift 4s ease infinite" }}
          >
            Let's Talk <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {["#E63946", "#457B9D", "#2A9D8F", "#E9C46A"].map((c, i) => (
                <div key={i} className="w-1.5 h-5 rounded-sm" style={{ background: c, opacity: 0.7 }} />
              ))}
            </div>
            <span className="text-sm font-bold text-white/40">BDNV Inc.</span>
          </div>
          <p className="text-xs text-white/20">© 2026 BDNV Inc. All rights reserved.</p>
        </div>
      </footer>

      {/* Global keyframes */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        * { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.1) transparent; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}