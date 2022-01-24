import { Header } from "@components/HomePage/Header";
import { LandingPage } from "@components/HomePage/Landing";
import { Background, Hero } from "@components/utils/Background";
import { IndustryComponent } from "@components/HomePage/Industry";
import { GotCoveredComponent } from "@components/HomePage/GotCovered";
import { CoverPoolComponent } from "@components/HomePage/CoverPool";
import { NeptuneEcosystemComponent } from "@components/HomePage/NeptuneEcosystem";
import { RoadmapComponent } from "@components/HomePage/Roadmap";
import { OurTeamComponent } from "@components/HomePage/OurTeam";

const topLeftGradient = "/images/header/top-left.png";
const circleGradient = "/images/header/circle-gradient.png";
const smallCircleGradient = "/images/header/small-circle-gradient.png";

export function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute top-0 left-0">
        <img src={topLeftGradient} alt="Top left Gradient" />
      </div>
      <div className="absolute top-34 xl:right-44 2xl:right-72 3xl:right-120">
        <img src={circleGradient} alt="Top left Gradient" />
      </div>
      <div className="absolute top-142 xl:right-20 2xl:right-48 3xl:right-92">
        <img src={smallCircleGradient} alt="Top left Gradient" />
      </div>
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
