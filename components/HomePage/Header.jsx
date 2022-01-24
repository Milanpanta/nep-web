import { HorizontalDivider } from "@components/utils/Divider";
import ArrowLeftIcon from "@utils/icons/ArrowLeftIcon";

const navlinks = [
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const logo = "/logos/neptune-mutual-full.png";

export const Header = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-transparent px-2 sm:px-32 3xl:px-96 sm:flex justify-between items-center py-3.5 sm:py-6 relative font-sora text-base  text-black tracking-wide">
        <div className="font-sora flex items-center justify-start w-42 sm:w-64">
          <img src={logo} alt="Neptune Mutual" />
        </div>
        <div className="hidden lg:flex justify-between items-center">
          <span className="leading-9.5">Blog</span>
          <span className="pl-14 leading-9.5 mr-11.5">Contact</span>
          <button className="border border-333333 pl-3 pr-3.5 rounded flex items-end py-1">
            <span className="leading-5 font-inter text-lg pr-1.5">en</span>
            <div className="-rotate-90 relative top-1">
              <ArrowLeftIcon className="w-4 h-5" />
            </div>
          </button>
        </div>
      </div>
      <HorizontalDivider />
    </div>
  );
};
