import Image from "next/image";
import CoinbaseImg from "@assets/image/brand/coinbase.png";
import GravityImg from "@assets/image/brand/gravity.png";
import HuobiImg from "@assets/image/brand/huobi.png";
import OkexImg from "@assets/image/brand/okex.png";

export const BrandCarouselComponent = () => {
  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      <div className="shadow-brand text-center bg-white py-10">
        <Image src={CoinbaseImg} alt="Coinbase Image" />
      </div>
      <div className="shadow-brand text-center bg-white py-10">
        <Image src={GravityImg} alt="Gravity Image" />
      </div>
      <div className="shadow-brand text-center bg-white py-10">
        <Image src={HuobiImg} alt="Huobi Image" />
      </div>
      <div className="shadow-brand text-center bg-white py-10">
        <Image src={OkexImg} alt="Okex Image" />
      </div>
    </div>
  );
};
