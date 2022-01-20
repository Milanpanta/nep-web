import { Header } from "@components/HomePage/Header";
import { LandingPage } from "@components/HomePage/Landing";
import { Background, Hero } from "@components/utils/Background";
import { IndustryComponent } from "@components/HomePage/Industry";
import { GotCoveredComponent } from "@components/HomePage/GotCovered";

export function HomePage() {
  return (
    <div className="relative">
      <Hero>
        <Header />
        <LandingPage />
      </Hero>
      <Background>
        <IndustryComponent />
      </Background>
      <GotCoveredComponent />
    </div>
  );
}
