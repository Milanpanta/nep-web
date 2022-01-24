import ChevronRightIcon from "@utils/icons/ChevronRightIcon";
import ChevronLeftIcon from "@utils/icons/ChevronLeftIcon";

const data = [
  {
    name: "Ideation",
  },
  {
    name: "Product Design",
  },
  {
    name: "Token Design",
  },
  {
    name: "Product MVP",
  },
  {
    name: "Cover SDK Beta",
  },
  {
    name: "Incorporation & Legal",
  },
  {
    name: "Fund Raising, Recruitment & Build",
  },
];

export const RoadmapComponent = () => {
  return (
    <div className="px-4 sm:px-32 3xl:border-x 3xl:border-b0c4db 3xl:mx-72 3xl:px-26 pt-26 lg:pt-76">
      <p className="lg:w-3/4 leading-12 lg:leading-normal m-auto font-sora text-3xxl lg:text-h3 font-semibold text-left sm:text-center">
        Our roadmap involves growing the Neptune Mutual ecosystem
      </p>
      <p className="font-poppins font-light lg:text-2xl leading-10 mt-2 lg:mt-4 text-left sm:text-center tracking-wide">
        Follow our progress, join our community
      </p>

      {/* TimeLine  */}
      <div className="mt-14 lg:mt-24">
        <div className="relative flex justify-between items-center">
          <div className="hidden lg:flex w-14 h-14 border border-black rounded-full justify-center items-center z-30 bg-white">
            <ChevronLeftIcon className="w-7 h-7" />
          </div>
          <div className="hidden lg:flex w-14 h-14 border border-black rounded-full justify-center items-center z-30 bg-white">
            <ChevronRightIcon className="w-7 h-7" />
          </div>
          <div className="absolute w-full h-px lg:bg-black bg-gradient-to-r from-transparent via-01052D to-transparent">
            <div className="flex justify-evenly relative -top-3">
              <div className=" bg-0E1028 w-7 h-7 rounded-full">
                <div className="hidden lg:block relative top-14 right-5 font-poppins font-light opacity-50 tracking-wide">
                  Ideation
                </div>
              </div>
              <div className="hidden lg:flex bg-4E7DD9 w-7 h-7 rounded-full">
                <div className="relative text-4E7DD9 top-14 right-5 font-poppins tracking-wide">
                  Product Design
                </div>
              </div>
              <div className="hidden lg:flex bg-0E1028 w-7 h-7 rounded-full">
                <div className="relative top-14 right-5 font-poppins font-light opacity-50 tracking-wide">
                  Token Design
                </div>
              </div>
              <div className="hidden lg:flex bg-0E1028 w-7 h-7 rounded-full">
                <div className="relative top-14 right-5 font-poppins font-light opacity-50 tracking-wide">
                  Product MVP
                </div>
              </div>
              <div className="hidden lg:flex bg-0E1028 w-7 h-7 rounded-full">
                <div className="hidden lg:block relative top-14 right-5 font-poppins font-light opacity-50 tracking-wide">
                  Cover SDK Beta
                </div>
              </div>
              <div className="hidden lg:flex bg-0E1028 w-7 h-7 rounded-full">
                <div className=" relative top-14 right-5 font-poppins font-light opacity-50 tracking-wide">
                  Incorporation & Legal
                </div>
              </div>
              <div className="bg-4E7DD9 bg-opacity-10  w-20 h-20 rounded-full relative -top-7">
                <div className="bg-4E7DD9 bg-opacity-20 w-16 h-16 rounded-full relative top-2 left-2">
                  <div className="bg-4E7DD9 w-11 h-11 rounded-full relative top-2.5 left-2.5">
                    <div className="bg-black w-7 h-7 rounded-full relative top-2 left-2">
                      <div className="hidden lg:block relative top-14 right-5 font-poppins font-light opacity-50 tracking-wide">
                        Fund Raising, Recruitment & Build
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:hidden bg-white border border-black w-7 h-7 rounded-full">
                <div className="hidden lg:block relative top-14 right-5 font-poppins font-light opacity-50 tracking-wide">
                  Cover SDK Beta
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-14 lg:mt-44 text-left lg:pl-36">
        <p className="font-poppins font-semibold text-xl lg:text-4xl leading-8 lg:leading-10">
          Product Design
        </p>
        <p className="lg:w-1/2 font-poppins font-light mt-4">
          The design of Neptune Mutual’s cover protocol is driven by four
          underlying principles, namely:
        </p>
        <p className="w-2/3 font-poppins font-light mt-6">1. Security</p>
        <p className="w-2/3 font-poppins font-light">2. Minimise risk</p>
        <p className="w-2/3 font-poppins font-light">3. Scalability</p>
        <p className="w-2/3 font-poppins font-light">4. User Experience(UX)</p>
      </div>
    </div>
  );
};
