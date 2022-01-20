import { Background } from "@components/utils/Background";
import { Header } from "@components/HomePage/Header";

const backgroundImage = "/home-gradient.png";

export function HomePage() {
  return (
    <div className="relative">
      <Background src={backgroundImage} />
      <Header />
    </div>
  );
}
