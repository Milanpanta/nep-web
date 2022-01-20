import ArrowRightAltIcon from "@assets/icons/ArrowRightAltIcon";
import Blog1Img from "@assets/image/blog/blog1.png";
import Blog2Img from "@assets/image/blog/blog2.png";
import Image from "next/image";

export const BlogComponent = () => {
  return (
    <div className="mt-92 pb-74">
      <div className="flex justify-between items-center">
        <p className="text-h2 font-semibold font-sora">What&apos;s Going On?</p>
        <div className="flex justify-center items-center">
          <span className="text-4E7DD9 text-lg leading-7 font-poppins">
            Read Our Blog
          </span>
          <ArrowRightAltIcon className="w-7 h-3 relative top-1 ml-2" />
        </div>
      </div>

      <div className="grid grid-rows-2 grid-flow-col gap-4 mt-10">
        <div className="row-span-2">
          <Image src={Blog1Img} alt="Blog1" />
          <p className="font-poppins text-2xl mt-2 leading-8 font-semibold">
            Neptune Mutual June 2021 Development Updates
          </p>
          <p className="mt-1 font-poppins text-9A9A9A leading-6">
            Jan 23, 2022 | 3 mins read
          </p>
        </div>
        <div className="row-span-1">
          <Image src={Blog2Img} alt="Blog2" />
          <p className="font-poppins font-semibold text-base">
            Best Binance Smart Chain Projects of 2021
          </p>
          <p className="font-poppins text-9A9A9A text-xs leading-6">
            Dec 19, 2021 | 8 mins read
          </p>
        </div>
        <div className="row-span-1 mt-2">
          <Image src={Blog2Img} alt="Blog2" />
          <p className="font-poppins font-semibold text-base">
            Announcement of Neptune Mutual
          </p>
          <p className="font-poppins text-9A9A9A text-xs leading-6">
            June 9, 2021 | 5 mins read
          </p>
        </div>
      </div>
    </div>
  );
};
