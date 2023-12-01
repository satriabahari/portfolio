import Container from "@/components/Container";
import About from "@/components/about";
import Home from "@/components/home";
import Skills from "@/components/skills";

export default function HomePage() {
  return (
    <main>
      <Container>
        <Home />
        <About/>
        <Skills/>
      </Container>
    </main>
  );
}
