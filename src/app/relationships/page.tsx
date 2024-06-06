import HeroSection from "@/components/hero/HeroSection";
import CoachingServices from "@/components/section/Services";
import ServicesSection from "@/components/section/ServicesSection";

const heroContent = [
  {
    title: "Relationship",
    span: "Coaching",
    headerSpan: "Transform Your Love Life",
    description:
      "Unlock the secrets to a stronger, more fulfilling relationship with our expert relationship coaching.",
    image: "/relationship.jpeg",
  },
];

const content = [
  {
    title: "Build Stronger Connections with",
    text: "Are you looking to improve your relationships? Our relationship coaching services are designed to help you build stronger, healthier, and more fulfilling connections with others. Whether you’re seeking to enhance your romantic relationship, family dynamics, or friendships, we’re here to support you.",
    span: "Relationship Coaching",
    list: [
      "Communication Skills: Techniques to improve understanding and connection.",
      "Conflict Resolution: Strategies to address and resolve conflicts effectively.",
      "Relationship Building: Tools to strengthen and deepen your connections.",
      "Emotional Intelligence: Enhancing your ability to understand and manage emotions.",
      "Couples Coaching: Support for partners to improve their relationship dynamics.",
    ],
    listTitle: "Our Relationship Coaching",
    listSpan: "Services Include:",
    listTitle2: "Benefits of Relationship Coaching:",
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
