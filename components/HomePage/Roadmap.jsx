import ChevronRightIcon from "utils/icons/ChevronRightIcon";
import ChevronLeftIcon from "utils/icons/ChevronLeftIcon";

export const RoadmapComponent = () => {
  return (
    <div className="mx-72 px-26 pt-76">
      <p className="font-sora text-h3 font-semibold text-center">
        Our roadmap involves growing the Neptune Mutual ecosystem
      </p>
      <p className="font-poppins font-light text-2xl leading-10 mt-4 text-center tracking-wide">
        Follow our progress, join our community
      </p>

      <div className="mt-24 mb-14">
        <div className="relative flex justify-between items-center">
          <div className="w-14 h-14 border border-black rounded-full flex justify-center items-center z-30 bg-white">
            <ChevronLeftIcon className="w-7 h-7" />
          </div>
          <div className="w-14 h-14 border border-black rounded-full flex justify-center items-center z-30 bg-white">
            <ChevronRightIcon className="w-7 h-7" />
          </div>
          <div className="absolute w-full h-px bg-black">
            <div className="flex justify-evenly relative -top-3">
              <div className="bg-0E1028 w-7 h-7 rounded-full">
                <div className="relative top-14 right-5 font-poppins font-light opacity-50 tracking-wide">
                  Ideation
                </div>
              </div>
              <div className="bg-4E7DD9 w-7 h-7 rounded-full">
                <div className="relative text-4E7DD9 top-14 right-5 font-poppins tracking-wide">
                  Product Design
                </div>
              </div>
              <div className="bg-0E1028 w-7 h-7 rounded-full">
                <div className="relative top-14 right-5 font-poppins font-light opacity-50 tracking-wide">
                  Token Design
                </div>
              </div>
              <div className="bg-0E1028 w-7 h-7 rounded-full">
                <div className="relative top-14 right-5 font-poppins font-light opacity-50 tracking-wide">
                  Product MVP
                </div>
              </div>
              <div className="bg-0E1028 w-7 h-7 rounded-full">
                <div className="relative top-14 right-5 font-poppins font-light opacity-50 tracking-wide">
                  Cover SDK Beta
                </div>
              </div>
              <div className="bg-0E1028 w-7 h-7 rounded-full">
                <div className="relative top-14 right-5 font-poppins font-light opacity-50 tracking-wide">
                  Incorporation & Legal
                </div>
              </div>
              <div className="bg-4E7DD9 bg-opacity-10  w-20 h-20 rounded-full relative -top-7">
                <div className="bg-4E7DD9 bg-opacity-20 w-16 h-16 rounded-full relative top-2 left-2">
                  <div className="bg-4E7DD9 w-11 h-11 rounded-full relative top-2.5 left-2.5">
                    <div className="bg-black w-7 h-7 rounded-full relative top-2 left-2">
                      <div className="relative top-14 right-5 font-poppins font-light opacity-50 tracking-wide">
                        Fund Raising, Recruitment & Build
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
