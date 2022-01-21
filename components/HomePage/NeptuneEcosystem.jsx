import Image from "next/image";
import TopLeftImg from "@assets/image/ecosystem/top-left.png";
import BottomLeftImg from "@assets/image/ecosystem/bottom-left.png";
import BottomRightImg from "@assets/image/ecosystem/bottom-right.png";

export const NeptuneEcosystemComponent = () => {
  return (
    <div className="bg-01052D relative pt-46 mt-60 w-screen h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0">
        <Image src={TopLeftImg} alt="Vector Image" />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image src={BottomLeftImg} alt="Vector Image" />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src={BottomRightImg} alt="Vector Image" />
      </div>
      <div className="mx-72 px-26 flex justify-between gap-28">
        <div>
          <p className="w-3/4 font-sora font-semibold text-h2 text-F9FAFB">
            Neptune Mutual Ecosystem
          </p>
          <p className="pt-2.5 font-poppins text-transparent text-4xxl leading-14 bg-clip-text bg-gradient-to-r from-FF9029 via-FF006B to-FF006B">
            Low Risk Cover Policies
          </p>
        </div>

        <div>
          <div>
            <p className="font-sora font-semibold text-transparent text-4xxl leading-10 bg-clip-text bg-gradient-to-r from-FF9029 via-FF006B to-FF006B">
              Zero Risk
            </p>
            <p className="pt-2 font-poppins font-light text-white leading-6">
              Zero risk of denied claim assessment.
            </p>
          </div>
          <div className="mt-10">
            <p className="font-sora font-semibold text-transparent text-4xxl leading-10 bg-clip-text bg-gradient-to-r from-FF9029 via-FF006B to-FF006B">
              100%+ MCR
            </p>
            <p className="pt-2 font-poppins font-light text-white leading-6">
              There is always enough liquidity to pay all cover policy holders.
            </p>
          </div>
          <div className="mt-10">
            <p className="font-sora font-semibold text-transparent text-4xxl leading-10 bg-clip-text bg-gradient-to-r from-FF9029 via-FF006B to-FF006B">
              Dedicated Cover Pools
            </p>
            <p className="pt-2 font-poppins font-light text-white leading-6">
              A hack on one project will not affect cover for another.
            </p>
          </div>
          <div className="mt-10">
            <p className="font-sora font-semibold text-transparent text-4xxl leading-10 bg-clip-text bg-gradient-to-r from-FF9029 via-FF006B to-FF006B">
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
