export const LandingPage = () => {
  return (
    <div className="px-72 relative w-full">
      <div className="w-10 h-full bg-b0c4db opacity-50"></div>
      <div className="pt-22 font-sora font-semibold text-h1 text-center">
        <p>Let’s Reduce </p>
        <p>Your Exposure to</p>
        <p>Crypto Market Risks</p>
      </div>
      <p className="font-poppins font-light text-2xl tracking-wide text-cta text-center pt-6">
        Choose a cover pool, select the duration, and enter an amount you would
        like to cover. Upon incident resolution, submit your claim to receive
        payout in stablecoins immediately.
      </p>
      <div className="text-center">
        <button className="px-12 mt-14 text-center bg-black text-white text-lg leading-6 py-6 rounded">
          View App Prototype
        </button>
      </div>
    </div>
  );
};
