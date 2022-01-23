import LinkedinFilledIcon from "utils/icons/LinkedinFilledIcon";
import TwitterFilledIcon from "utils/icons/TwitterFilledIcon";
import MediumFilledIcon from "utils/icons/MediumFilledIcon";
import ChevronLeftIcon from "utils/icons/ChevronLeftIcon";
import ChevronRightIcon from "utils/icons/ChevronRightIcon";

export const OurTeamComponent = () => {
  return (
    <div className="sm:px-32 3xl:border-x 3xl:border-b0c4db 3xl:mx-72 3xl:px-26 pb-60">
      <div className="pt-64">
        <div className="px-4 text-center">
          <p className="font-sora text-3xxl lg:text-h2 font-semibold">
            Our Team
          </p>
          <p className="mt-2 lg:mt-4 lg:w-1/2 mx-auto font-poppins font-light tracking-wide leading-8 lg:text-2xl lg:leading-10">
            We are a diverse and vibrant team with a common goal to create a
            reliable, fast, and effective solution to protect digital assets.
          </p>
        </div>
        {/* ImageComp */}
        <div className="mt-20 flex justify-around items-center">
          <div className="w-28 h-28 min-w-14 lg:w-64 lg:h-64 rounded-circle bg-D7C1FB">
            <div className="w-full h-full rounded-full"></div>
          </div>
          <div className="w-40 h-40 lg:w-88 lg:h-88 rounded-circle bg-D7C1FB"></div>
          <div className="w-28 h-28 lg:w-64 lg:h-64 rounded-circle bg-D7C1FB"></div>
        </div>

        <div>
          <div className="mt-1.5 text-center">
            <p className="font-poppins font-semibold text-xl sm:text-2xl leading-9">
              Binod Nirvan
            </p>
            <p className="font-poppins font-light tracking-wide">
              CEO & Founder
            </p>
            <div className="flex mt-4 justify-center items-center">
              <LinkedinFilledIcon />
              <div className="px-3">
                <TwitterFilledIcon />
              </div>
              <MediumFilledIcon />
            </div>
            <div className="hidden lg:flex mt-6 justify-center items-center">
              <div className="w-8 h-8 rounded-full border border-black ">
                <div className="flex items-center justify-center">
                  <ChevronLeftIcon />
                </div>
              </div>
              <div className="w-8 h-8 ml-2.5 rounded-full border border-black ">
                <ChevronRightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
