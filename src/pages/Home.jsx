import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <main className="pt-16">
        <Hero />
      </main>
      <Specials />
      <Testimonials />
      <About />
    </>
  );
};

export default Home;
