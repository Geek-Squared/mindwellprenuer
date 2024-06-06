import HeroSection from "@/components/hero/HeroSection";
import CoachingServices from "@/components/section/Services";
import ServicesSection from "@/components/section/ServicesSection";

const heroContent = [
  {
    title: "Discover",
    span: "Wellness",
    headerSpan: "Empower Your Wellbeing",
    description:
      "Take control of your health and wellbeing with our expert guidance and support.",
    image: "/wellness.jpeg",
  },
];

const content = [
  {
    title: "Achieve Optimal Health with",
    text: "Do you want to feel your best every day? Our wellness coaching services are here to help you achieve optimal health and well-being. By focusing on your physical, emotional, and mental health, we provide you with the tools and support needed to thrive.",
    span: "Wellness Coaching",
    list: [
      "Health Assessments: Comprehensive evaluations to identify areas for improvement.",
      "Customized Wellness Plans: Strategies tailored to your specific health goals.",
      "Stress Management: Techniques to reduce stress and improve relaxation.",
      "Healthy Eating: Nutritional advice and meal planning for better health.",
      "Physical Activity: Exercise programs designed to suit your lifestyle.",
    ],
    listTitle: "Our Wellness Coaching Services Include:",
    listSpan: "Benefits of Wellness Coaching:",
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
