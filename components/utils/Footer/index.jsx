import ArrowLeftIcon from "@utils/icons/ArrowLeftIcon";
import TwitterIcon from "@utils/icons/TwitterIcon";
import GithubIcon from "@utils/icons/GithubIcon";
import TelegramIcon from "@utils/icons/TelegramIcon";
import LinkedinIcon from "@utils/icons/LinkedinIcon";
import MediumIcon from "@utils/icons/MediumIcon";
import RedditIcon from "@utils/icons/RedditIcon";

const planetImg = "/images/industry/nmplanet.png";
const logo = "/logos/neptune-mutual-full-inverse.png";

export const Footer = () => {
  return (
    <div className="relative w-screen h-auto overflow-x-hidden bg-01052D">
      <div className="hidden lg:block absolute top-36 right-28 3xl:right-56">
        <img src={planetImg} alt="Planet" />
      </div>
      <div className="px-4 sm:px-32 3xl:mx-72 3xl:px-26 pt-24">
        <div className="hidden lg:flex justify-end">
          <button className="border border-white bg-0E1028 pl-3 pr-3.5 rounded flex items-end py-1 text-white">
            <span className="leading-5 font-inter text-lg pr-1.5">en</span>
            <div className="-rotate-90 relative top-1">
              <ArrowLeftIcon className="w-4 h-5 fill-white" />
            </div>
          </button>
        </div>

        <div className="mt-5 lg:mt-7 text-center lg:text-left">
          <div className="w-47 mx-auto lg:mx-0 sm:w-63">
            <img src={logo} alt="Neptune Mutual" />
          </div>
          <p className="mt-8 lg:mt-11 text-white font-sora text-3xl lg:text-4xl font-semibold leading-10">
            Stay Tuned for Further Updates
          </p>
          <p className="mt-2 lg:mt-4 lg:w-1/2 text-white opacity-40 font-light font-poppins tracking-wider">
            Don’t be a stranger! Come join us and participate with us in our
            social media channels. Stay up to date on what we are building.
          </p>
          <div className="mx-1 flex justify-center lg:justify-start mt-8 gap-8">
            <TwitterIcon className="w-7 h-7 relative top-1" />
            <RedditIcon className="w-7 h-7" />
            <TelegramIcon className="w-7 h-7" />
            <LinkedinIcon className="w-7 h-7" />
            <MediumIcon className="w-7 h-7" />
            <GithubIcon className="w-7 h-7" />
          </div>
        </div>
      </div>

      <div className="mt-18 lg:mt-38 py-4 border-y-2 border-b0c4db border-opacity-40">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
          <div className="font-sora font-light text-white leading-10">Blog</div>
          <div className="font-sora font-light text-white leading-10">
            Contact
          </div>
          <div className="font-sora font-light text-white leading-10">
            Documentation
          </div>
          <div className="font-sora font-light text-white leading-10">
            Terms and Conditions
          </div>
          <div className="font-sora font-light text-white leading-10">
            Privacy Policy
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-32 3xl:mx-72 3xl:px-26 mt-6 mb-18 text-center">
        <p className="font-light font-poppins leading-10 tracking-wide text-white opacity-40">
          Nepune Mutual&copy; 2022
        </p>
        <p className="tracking-wider font-light font-poppins text-white opacity-40">
          Risk warning: Trading crypto assets involves significant risk and can
          result in the loss of your capital. You should not invest more than
          you can afford to lose and you should ensure that you fully understand
          the risks involved. Before trading, please take into consideration
          your level of experience, investment objectives, and seek independent
          financial advice if necessary. It is your responsibility to ascertain
          whether you are permitted to use the services of Neptune Mutual based
          on the legal requirements in your country of residence.
        </p>
      </div>
    </div>
  );
};
