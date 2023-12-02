import Container from "@/components/Container";
import About from "@/components/about";
import Home from "@/components/home";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function HomePage() {
  return (
    <main>
      <Container>
        <Home />
        <About/>
        <Skills/>
        <Projects/>
      </Container>
    </main>
  );
}
