import { Header } from "@components/HomePage/Header";
import { LandingPage } from "@components/HomePage/Landing";
import { Background, Hero } from "@components/utils/Background";
import { IndustryComponent } from "@components/HomePage/Industry";

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
    </div>
  );
}
