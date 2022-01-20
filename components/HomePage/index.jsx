import { Header } from "@components/HomePage/Header";
import { LandingPage } from "@components/HomePage/Landing";
import { Hero } from "@components/utils/Background";

export function HomePage() {
  return (
    <div className="relative">
      <Hero>
        <Header />
        <LandingPage />
      </Hero>
    </div>
  );
}
