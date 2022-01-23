import Image from "next/image";
import TopLeftImg from "@assets/image/ecosystem/top-left.png";
import BottomLeftImg from "@assets/image/ecosystem/bottom-left.png";
import BottomRightImg from "@assets/image/ecosystem/bottom-right.png";

export const NeptuneEcosystemComponent = () => {
  return (
    <div className="bg-01052D relative pt-18 lg:pt-46 w-screen h-auto overflow-x-hidden">
      <div className="hidden lg:block absolute top-0 left-0">
        <Image src={TopLeftImg} alt="Vector Image" />
      </div>
      <div className="absolute w-52 sm:w-68 md:w-80 top-16 right-0 lg:hidden">
        <Image src={BottomLeftImg} alt="Vector Image" />
      </div>
      <div className="hidden lg:block absolute lg:bottom-0 lg:left-0 3xl:bottom-0 3xl:left-56">
        <Image src={BottomLeftImg} alt="Vector Image" />
      </div>
      <div className="hidden lg:block absolute bottom-0 right-0">
        <Image src={BottomRightImg} alt="Vector Image" />
      </div>
      <div className="px-4 sm:px-32 3xl:mx-72 3xl:px-26 pb-38 lg:pb-96 flex flex-col lg:flex-row lg:justify-between lg:gap-28">
        <div>
          <p className="lg:w-3/4 font-sora font-semibold text-center sm:text-left text-3xxl lg:text-h2 text-F9FAFB">
            Neptune Mutual Ecosystem
          </p>
          <p className="pt-20 lg:pt-2.5 font-poppins text-transparent text-2xl lg:text-4xxl leading-10 lg:leading-14 bg-clip-text bg-gradient-to-r from-FF9029 via-FF006B to-FF006B">
            Low Risk Cover Policies
          </p>
        </div>

        <div className="mt-8 lg:mt-0">
          <div>
            <p className="font-sora font-semibold text-transparent text-lg lg:text-4xxl leading-6 lg:leading-10 bg-clip-text bg-gradient-to-r from-FF9029 via-FF006B to-FF006B">
              Zero Risk
            </p>
            <p className="pt-2 font-poppins font-light text-white leading-6">
              Zero risk of denied claim assessment.
            </p>
          </div>
          <div className="mt-10">
            <p className="font-sora font-semibold text-transparent text-lg lg:text-4xxl leading-6 lg:leading-10 bg-clip-text bg-gradient-to-r from-FF9029 via-FF006B to-FF006B">
              100%+ MCR
            </p>
            <p className="pt-2 font-poppins font-light text-white leading-6">
              There is always enough liquidity to pay all cover policy holders.
            </p>
          </div>
          <div className="mt-10">
            <p className="font-sora font-semibold text-transparent text-lg lg:text-4xxl leading-6 lg:leading-10 bg-clip-text bg-gradient-to-r from-FF9029 via-FF006B to-FF006B">
              Dedicated Cover Pools
            </p>
            <p className="pt-2 font-poppins font-light text-white leading-6">
              A hack on one project will not affect cover for another.
            </p>
          </div>
          <div className="mt-10">
            <p className="font-sora font-semibold text-transparent text-lg lg:text-4xxl leading-6 lg:leading-10 bg-clip-text bg-gradient-to-r from-FF9029 via-FF006B to-FF006B">
              Stablecoin Liquidity
            </p>
            <p className="pt-2 font-poppins font-light text-white leading-6">
              NPM token price does not affect cover pool liquidity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
