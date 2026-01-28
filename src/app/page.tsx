import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex">
        {/* Navbar can go here later, for now keeping it clean as per design */}
      </div>

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <footer className="w-full py-6 text-center text-slate-500 font-mono text-xs">
        <p>&copy; 2026 Nithin Varughese</p>
      </footer>
    </main>
  );
}
