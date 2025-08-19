import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/layout/hero";
import Features from "@/components/layout/features";
import Info from "@/components/layout/info";
import About from "@/components/layout/about";
import Faq from "@/components/layout/faq";
import Cta from "@/components/layout/cta";
export default function Home() {
  return (
    <>
      <Header />
      <div className="space-y-16 sm:space-y-24 md:space-y-32 lg:space-y-40 min-h-screen px-10 sm:px-12 md:px-14  lg:px-16">
        <Hero />
        <Features />
        <Info />
        <About />
        <Faq />
        <Cta />
      </div>
      <Footer />
    </>
  );
}
