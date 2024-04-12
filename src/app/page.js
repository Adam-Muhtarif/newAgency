import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main aria-label="main" className="min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
      <Blogs />
      <Banner />

    </main>
  );
}
