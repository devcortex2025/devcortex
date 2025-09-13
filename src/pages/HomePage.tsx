import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { PersonalizedStory } from "../components/PersonalizedStory";
import { Services } from "../components/Services";
import { TechExpertise } from "../components/TechExpertise";
import { WhyChooseUs } from "../components/WhyChooseUs";

export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <PersonalizedStory />
      <Services />
      <TechExpertise />
      <WhyChooseUs />
    </main>
  );
}