// src/components/Hero.tsx
export default function Hero() {
  return (
   <section className="w-full flex flex-col items-center justify-center text-center py-32 bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
        Welcome to <span className="text-indigo-500">Digintellivus</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-2xl">
        Empowering businesses with intelligent digital solutions that drive
        growth and innovation.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="/contact"
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold"
        >
          Get Started
        </a>
        <a
          href="/about"
          className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 text-lg font-semibold"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
