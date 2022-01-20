import TwitterIcon from "@assets/brand/TwitterIcon";
import GithubIcon from "@assets/brand/GithubIcon";
import TelegramIcon from "@assets/brand/TelegramIcon";
import LinkedinIcon from "@assets/brand/LinkedinIcon";
import MediumIcon from "@assets/brand/MediumIcon";
import RedditIcon from "@assets/brand/RedditIcon";

export const IndustryComponent = () => {
  return (
    <div className="border-x border-b0c4db mx-72 pt-28">
      <div className="relative px-26 w-full ">
        <div className=" bg-01052D rounded-2xl h-auto shadow-updateCard">
          <p className="font-semibold font-sora pl-17 text-white text-3xl pt-28 leading-10">
            Stay Tuned for Further Updates
          </p>
          <div className="flex pt-10 gap-8">
            <TwitterIcon className="w-6 h-5" />
            <RedditIcon className="w-6 h-6" />
            <TelegramIcon className="w-7 h-5" />
            <LinkedinIcon className="w-5 h-5" />
            <MediumIcon className="w-6 h-5" />
            <GithubIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
