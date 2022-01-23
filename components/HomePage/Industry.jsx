import TwitterIcon from "@utils/icons/TwitterIcon";
import GithubIcon from "@utils/icons/GithubIcon";
import TelegramIcon from "@utils/icons/TelegramIcon";
import LinkedinIcon from "@utils/icons/LinkedinIcon";
import MediumIcon from "@utils/icons/MediumIcon";
import RedditIcon from "@utils/icons/RedditIcon";
import Image from "next/image";
import PlanetImg from "@assets/image/nmplanet.png";
import FenbushiImg from "@assets/image/brand/fenbushi.png";
import AnimocaImg from "@assets/image/brand/animoca.png";
import { BrandCarouselComponent } from "@components/HomePage/BrandCarousel";
import { BlogComponent } from "@components/HomePage/BlogComponent";

export const IndustryComponent = () => {
  const topLeftGradient = "/top-left-gradient.png";
  const bottomRightGradient = "/bottom-right-gradient.png";

  return (
    <div className="3xl:border-x 3xl:border-b0c4db px-4 sm:px-32 3xl:px-26 3xl:mx-72 pt-28 sm:pt-32 3xl:pt-28">
      <div className="relative w-full ">
        <div className="flex flex-col-reverse items-center xl:flex-row xl:items-center bg-01052D rounded-2xl h-auto shadow-updateCard">
          <div className="xl:pl-17">
            <p className="font-semibold font-sora  text-white text-2xl text-center xl:text-left sm:text-3xl mt-9 xl:mt-28 leading-10">
              Stay Tuned for Further Updates
            </p>
            <div className="flex justify-center xl:justify-start mt-7 xl:mt-10 gap-7 xl:gap-8 mb-14 xl:mb-28">
              <TwitterIcon className="w-7 h-7 relative top-1" />
              <RedditIcon className="w-7 h-7" />
              <TelegramIcon className="w-7 h-7" />
              <LinkedinIcon className="w-7 h-7" />
              <MediumIcon className="w-7 h-7" />
              <GithubIcon className="w-7 h-7" />
            </div>
          </div>
          <div className="mt-9 xl:mt-0">
            <Image src={PlanetImg} alt="Planet Image" />
          </div>
        </div>

        <div className="mt-80 p-4 relative bg-white shadow-powerCard border-transparent rounded-2xl">
          <div className="relative rounded-2xl bg-DEEAF6 bg-opacity-30 ">
            <p className="text-h3 text-01052D text-center font-semibold font-sora px-44 pt-12 z-30">
              Powered by You, Backed by Industry Leaders
            </p>
            <div className="flex items-center justify-center pt-22 pb-28">
              <div className="pr-36">
                <Image src={FenbushiImg} alt="Fenbushi Image" />
              </div>
              <Image src={AnimocaImg} alt="Animoca Image" />
            </div>
            <div className="absolute top-0 left-0">
              <img src={topLeftGradient} alt="Top Left Gradient" />
            </div>
            <div className="absolute bottom-0 right-0">
              <img src={bottomRightGradient} alt="Bottom Right Gradient" />
            </div>
          </div>
        </div>

        <BrandCarouselComponent />
        <BlogComponent />
      </div>
    </div>
  );
};
