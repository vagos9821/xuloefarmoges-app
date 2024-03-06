import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import GraphicSection from "./components/GraphicSection";
import Hero3 from "./components/Hero3";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-yellow-50">
      <Hero1 />
      <Hero2 />
      <GraphicSection />
      <Hero3 />
      <Gallery />
      <Footer />
    </main>
  );
}
