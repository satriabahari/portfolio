import Container from "@/components/Container";
import Footer from "@/components/Footer";
import About from "@/components/about";
import Contact from "@/components/contact";
import Home from "@/components/home";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function HomePage() {
  return (
    <main>
      <Container>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </main>
  );
}
