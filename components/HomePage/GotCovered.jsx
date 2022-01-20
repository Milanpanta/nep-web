export const GotCoveredComponent = () => {
  return (
    <div className="w-screen h-screen px-72 bg-01052D overflow-x-hidden">
      <div className="relative">
        <div className="absolute border-2 top-32">
          <img src="/cover-mask.png" alt="Cover Mask" className="" />
        </div>
        <div className="pl-28 pr-26 pt-38">
          <p className="font-sora w-1/2 border border-red-700 font-semibold text-h2 text-transparent bg-clip-text bg-gradient-to-l from-3C69FE to-E86BFB">
            We’ve Got You Covered
          </p>
          <p className="text-white font-poppins font-light text-2xl pt-4 leading-10">
            Parametric cover means guaranteed payouts. No claims assessment
            means faster and scalable resolution when hacks or exploits occur.
          </p>
        </div>
      </div>
    </div>
  );
};
