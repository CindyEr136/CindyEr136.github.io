import { Hero, About, Experience, Works } from "../components";

export function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <Hero />
      <About />
      <Experience />
      <Works />
    </div>
  );
}

export default Home;