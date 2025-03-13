import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Experience from "@/components/Experience";
import HeroBanner from "@/components/HeroBanner";
import MyVision from "@/components/MyVision";
import Projects from "@/components/Projects";
import TopHead from "@/components/TopHead";

export default function Home() {
  return (
    <div className="bg-[#f5f5f5] dark:bg-[#212121]">
      <TopHead />
      <div className="md:container mx-auto">
        <HeroBanner />
        <About />
        <MyVision />
        <Experience />
        <Projects />
        <ContactUs />
      </div>
    </div>
  );
}
