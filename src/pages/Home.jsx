import { Hero, About, Experience, Works, Contact } from "../components";

export function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <Hero />
      <About />
      <Experience />
      <Works />
      <Contact />
    </div>
  );
}

export default Home;