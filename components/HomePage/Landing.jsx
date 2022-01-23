export const LandingPage = () => {
  return (
    <div className="3xl:border-x 3xl:border-b0c4db 3xl:mx-72 pb-53">
      <div className="relative w-full ">
        <div className="w-10 h-full bg-b0c4db opacity-50"></div>
        <div className="mt-14 sm:mt-22 font-sora font-semibold text-3xxl sm:text-6xl sm:leading-20 3xl:text-h1 text-center">
          <p>Let’s Reduce </p>
          <p>Your Exposure to</p>
          <p>Crypto Market Risks</p>
        </div>
        <p className="font-poppins font-light tracking-wide leading-8 sm:text-cta text-center mt-2 sm:mt-6 px-2 sm:px-0 sm:w-3/4 xl:w-1/2 m-auto">
          Choose a cover pool, select the duration, and enter an amount you
          would like to cover. Upon incident resolution, submit your claim to
          receive payout in stablecoins immediately.
        </p>
        <div className="text-center">
          <button className="px-12 mt-7 sm:mt-14 text-center bg-black text-white text-lg leading-6 py-6 rounded font-sora">
            View App Prototype
          </button>
        </div>
      </div>
    </div>
  );
};
