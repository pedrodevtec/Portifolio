import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { GitHubProjects } from "@/components/GitHubProjects";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <GitHubProjects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
