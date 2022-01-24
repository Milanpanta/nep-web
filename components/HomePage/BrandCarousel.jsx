const coinbaseImg = "/images/brand/coinbase.png";
const gravityImg = "/images/brand/gravity.png";
const huobiImg = "/images/brand/huobi.png";
const okexImg = "/images/brand/okex.png";

export const BrandCarouselComponent = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mt-8 xl:mt-5">
      <div className="shadow-brand text-center flex justify-center items-center bg-white px-4 py-6 xl:py-10">
        <img src={coinbaseImg} alt="Coinbase" />
      </div>
      <div className="shadow-brand text-center flex justify-center items-center bg-white px-4 py-6 xl:py-10">
        <img src={gravityImg} alt="Gravity" />
      </div>
      <div className="shadow-brand text-center flex justify-center items-center bg-white px-4 py-6 xl:py-10">
        <img src={huobiImg} alt="Huobi" />
      </div>
      <div className="shadow-brand text-center flex justify-center items-center bg-white px-4 py-6 xl:py-10">
        <img src={okexImg} alt="Okex" />
      </div>
    </div>
  );
};
