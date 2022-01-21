import LinkedinFilledIcon from "utils/icons/LinkedinFilledIcon";
import TwitterFilledIcon from "utils/icons/TwitterFilledIcon";
import MediumFilledIcon from "utils/icons/MediumFilledIcon";
import ChevronLeftIcon from "utils/icons/ChevronLeftIcon";
import ChevronRightIcon from "utils/icons/ChevronRightIcon";

export const OurTeamComponent = () => {
  return (
    <div className="border-x border-b0c4db mx-72 px-26">
      <div className="pt-64 text-center">
        <p className="font-sora text-h2 font-semibold">Our Team</p>
        <p className="mt-4 w-1/2 mx-auto font-poppins font-light tracking-wide text-2xl leading-10">
          We are a diverse and vibrant team with a common goal to create a
          reliable, fast, and effective solution to protect digital assets.
        </p>

        {/* ImageComp */}
        <div className="mt-20 flex justify-between items-center">
          <div className="w-64 h-64 rounded-full bg-D7C1FB"></div>
          <div>
            <div className="w-88 h-88 rounded-full bg-D7C1FB"></div>
            <div className="mt-1.5">
              <p className="font-poppins font-semibold text-2xl leading-9">
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
              <div className="mt-6 flex justify-center items-center">
                <div className="w-8 h-8 rounded-full border border-black flex items-start">
                  <ChevronLeftIcon />
                </div>
                <div className="w-8 h-8 ml-2.5 rounded-full border border-black ">
                  <ChevronRightIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="w-64 h-64 rounded-full bg-D7C1FB"></div>
        </div>
      </div>
    </div>
  );
};
