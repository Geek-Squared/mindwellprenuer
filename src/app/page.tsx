import AboutSection from "@/components/body_section/AboutSection";
import Motto from "@/components/body_section/Motto";
import Hero from "@/components/hero/Header";
import Section from "@/components/section/Section";
import Testimonial from "@/components/testimonial/Testmonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Motto/>
      <AboutSection />
      <Testimonial />
      <Section />
    </>
  );
}
