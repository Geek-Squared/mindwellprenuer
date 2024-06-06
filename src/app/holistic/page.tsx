import HeroSection from "@/components/hero/HeroSection";
import CoachingServices from "@/components/section/Services";
import ServicesSection from "@/components/section/ServicesSection";

const heroContent = [
  {
    title: "Holistic",
    span: "Lifestyle",
    headerSpan: "Balance Body, Mind, and Spirit",
    description:
      "Unlock a healthier, happier you with our holistic approach to wellness and lifestyle coaching.",
    image: "/hollistic.jpeg",
  },
];

const content = [
  {
    title: "Unlock Your Potential with",
    text: "Are you seeking a balanced and fulfilling life? Our holistic lifestyle coaching services are designed to help you achieve harmony in all aspects of your life. By addressing your physical, mental, and spiritual well-being, we guide you towards a healthier and happier you.",
    span: "Holistic Lifestyle Coaching",
    list: [
      "Personalized Wellness Plans: Tailored to your unique needs and goals.",
      "Mindfulness and Meditation: Techniques to reduce stress and enhance mental clarity.",
      "Nutrition Guidance: Customized plans to support your overall health and vitality.",
      "Exercise and Fitness: Programs to improve physical strength and endurance.",
      "Life Balance Strategies: Tools to manage your time and priorities effectively.",
    ],
    listTitle: "Our Holistic Lifestyle Coaching",
    listSpan: "Services Include::",
  },
];

export default function Page() {
  return (
    <>
      <HeroSection content={heroContent} />
      <CoachingServices content={content} />
      <ServicesSection />
    </>
  );
}
