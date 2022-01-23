import StarIcon from "@utils/icons/StarIcon";
import CautionIcon from "@utils/icons/CautionIcon";
import CreateIcon from "@utils/icons/CreateIcon";

export const GotCoveredComponent = () => {
  return (
    <div className="w-screen h-auto pb-18 sm:pb-46 3xl:px-72 bg-01052D overflow-x-hidden">
      <div className="relative">
        <div className="absolute -top-14">
          <img src="/cover-mask.png" alt="Cover Mask" className="" />
        </div>
        <div className="px-4 sm:pl-28 sm:pr-26 pt-38">
          <p className="font-sora lg:w-1/2 font-semibold text-h2 text-transparent bg-clip-text bg-gradient-to-l from-3C69FE to-E86BFB">
            We’ve Got You Covered
          </p>
          <p className="text-white font-poppins font-light text-2xl pt-4 leading-10">
            Parametric cover means guaranteed payouts. No claims assessment
            means faster and scalable resolution when hacks or exploits occur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:pl-28 sm:pr-26 pt-16 ">
          <div className="bg-CDDFFB bg-opacity-10 rounded-xl py-16 px-10">
            <StarIcon className="w-10 h-10" />
            <p className="pt-10 font-inter font-semibold text-2xl text-transparent bg-clip-text tracking-wide leading-7 bg-gradient-to-l from-3C69FE to-E86BFB">
              Earn Rewards
            </p>
            <p className="pt-6 font-poppins text-white tracking-wide font-light leading-8">
              Invest stablecoin liquidity to earn rewards and protect your
              preferred blockchain projects.
            </p>
            <p className="pt-16 font-inter font-bold leading-6 text-4289F2 tracking-wider underline">
              LEARN MORE
            </p>
          </div>

          <div className="bg-CDDFFB bg-opacity-10 rounded-xl py-16 px-10">
            <CautionIcon className="w-10 h-10" />
            <p className="pt-10 font-inter font-semibold text-2xl text-transparent bg-clip-text tracking-wide leading-7 bg-gradient-to-l from-3C69FE to-E86BFB">
              Get Protection
            </p>
            <p className="pt-6 font-poppins text-white tracking-wide font-light leading-8">
              Buy protection against exchange hacks & dApp, DeFi, and smart
              contract vulnerabilities.
            </p>
            <p className="pt-16 font-inter font-bold leading-6 text-4289F2 tracking-wider underline">
              LEARN MORE
            </p>
          </div>

          <div className="bg-CDDFFB bg-opacity-10 rounded-xl py-16 px-10">
            <CreateIcon className="w-10 h-10" />
            <p className="pt-10 font-inter font-semibold text-2xl text-transparent bg-clip-text tracking-wide leading-7 bg-gradient-to-l from-3C69FE to-E86BFB">
              Create Covers
            </p>
            <p className="pt-6 font-poppins text-white tracking-wide font-light leading-8">
              Build a cover protection community for your protocol, exchange or
              DeFi project.
            </p>
            <p className="pt-16 font-inter font-bold leading-6 text-4289F2 tracking-wider underline">
              LEARN MORE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
