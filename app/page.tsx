import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/navData";
import dynamic from "next/dynamic";
import GridBackground from "@/components/ui/GridBackground";

const About = dynamic(() => import("@/components/About"), {
  loading: () => <p>Loading...</p>
});

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <p>Loading...</p>
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <p>Loading...</p>
});

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <p>Loading...</p>
});

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 text-white">
      <GridBackground />
      <div className="max-w-7xl w-full relative z-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Skills />
        
        <Resume />
        <Projects />
        <Experience />
        
        <About />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
