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

export const Header = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-transparent px-96 flex justify-between items-center py-10 relative font-sora text-base  text-black tracking-wide">
        <div className="font-sora">NEPTUNE MUTUAL</div>
        <div className="flex justify-between items-center">
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
