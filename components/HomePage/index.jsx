import { Header } from "@components/HomePage/Header";
import { LandingPage } from "@components/HomePage/Landing";
import { Background, Hero } from "@components/utils/Background";
import { IndustryComponent } from "@components/HomePage/Industry";
import { GotCoveredComponent } from "@components/HomePage/GotCovered";
import { CoverPoolComponent } from "@components/HomePage/CoverPool";
import { NeptuneEcosystemComponent } from "@components/HomePage/NeptuneEcosystem";
import { RoadmapComponent } from "@components/HomePage/Roadmap";
import { OurTeamComponent } from "@components/HomePage/OurTeam";

export function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero>
        <Header />
        <LandingPage />
      </Hero>
      <Background>
        <IndustryComponent />
      </Background>
      <GotCoveredComponent />
      <Background>
        <CoverPoolComponent />
      </Background>
      <NeptuneEcosystemComponent />
      <Background>
        <RoadmapComponent />
        <OurTeamComponent />
      </Background>
    </div>
  );
}
