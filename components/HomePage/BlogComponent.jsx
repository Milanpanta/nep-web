import ArrowRightAltIcon from "@utils/icons/ArrowRightAltIcon";

export const BlogComponent = () => {
  const blog1 = "/images/blog/blog1.png";
  const blog2 = "/images/blog/blog2.png";
  const blog3 = "/images/blog/blog3.png";

  return (
    <div className="mt-92 pb-74">
      <div className="lg:flex justify-between items-center">
        <p className="text-center text-3xl lg:text-h2 font-semibold font-sora">
          What&apos;s Going On?
        </p>
        <div className="hidden md:flex justify-center items-center">
          <span className="text-4E7DD9 text-lg leading-7 font-poppins">
            Read Our Blog
          </span>
          <ArrowRightAltIcon className="w-7 h-3 relative top-1 ml-2" />
        </div>
      </div>

      <div className="grid grid-flow-row lg:grid-rows-2 lg:grid-flow-col gap-4 mt-10">
        <div className="bg-white rounded-xl p-4 flex lg:block lg:p-0 lg:rounded-none lg:bg-transparent lg:row-span-2">
          <div className="lg:w-auto">
            <img
              src={blog1}
              alt="Blog1"
              className="w-52 h-24 lg:w-auto lg:h-auto lg:object-cover "
            />
          </div>
          <div className="flex flex-col-reverse items-start justify-end px-2 lg:px-0 lg:block">
            <p className="font-poppins text-base lg:text-2xl lg:mt-2 leading-8 font-semibold">
              Neptune Mutual June 2021 Development Updates
            </p>
            <p className="text-sm lg:text-base lg:mt-1 font-poppins text-9A9A9A leading-6">
              Jan 23, 2022 | 3 mins read
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 flex lg:block lg:p-0 lg:rounded-none lg:bg-transparent">
          <div className="lg:w-auto">
            {/* <Image src={Blog2Img} alt="Blog2" className="object-cover" /> */}
            <img
              src={blog2}
              alt="Blog2"
              className="w-52 h-24 lg:w-auto lg:h-auto lg:object-cover "
            />
          </div>
          <div className="flex flex-col-reverse items-start justify-end px-2 lg:px-0 lg:block">
            <p className="font-poppins font-semibold text-base">
              Best Binance Smart Chain Projects of 2021
            </p>
            <p className="font-poppins text-9A9A9A text-xs leading-6">
              Dec 19, 2021 | 8 mins read
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 flex lg:block lg:p-0 lg:rounded-none lg:bg-transparent">
          <div className="lg:w-auto">
            {/* <Image src={Blog2Img} alt="Blog2" /> */}
            <img
              src={blog3}
              alt="Blog3"
              className="w-52 h-24 lg:w-auto lg:h-auto lg:object-cover"
            />
          </div>
          <div className="flex flex-col-reverse items-start justify-end px-2 lg:px-0 lg:block">
            <p className="font-poppins font-semibold text-base">
              Announcement of Neptune Mutual
            </p>
            <p className="font-poppins text-9A9A9A text-xs leading-6">
              June 9, 2021 | 5 mins read
            </p>
          </div>
        </div>
      </div>

      <div className="flex mt-10 md:hidden justify-center items-center">
        <span className="text-4E7DD9 text-base font-poppins font-semibold">
          Read Our Blog
        </span>
        <ArrowRightAltIcon className="w-7 h-3 relative top-1 ml-2" />
      </div>
    </div>
  );
};
