import React from "react";
import { Popover } from "@headlessui/react";

import { pageRoutes } from "@lib/routes";

const navlinks = [
  {
    href: pageRoutes.home,
    label: "Home",
    navKey: "home",
  },
  {
    href: pageRoutes.blog,
    label: "Blog",
    navKey: "blog",
  },
  {
    href: pageRoutes.contact,
    label: "Contact",
    navKey: "contact",
  },
];

const DesktopHref = ({ name, href, navKey, selectedNavKey }) => {
  return (
    <div className="">
      <a
        href={href}
        className={`inline-flex items-center font-medium border-black hover:text-black hover:text-opacity-60 capitalize ${
          selectedNavKey === navKey && "text-black"
        } text-center`}
      >
        {name}
      </a>
    </div>
  );
};

export const Header = ({ selectedNavKey }) => {
  return (
    <Popover className="sticky top-0 w-full z-30 bg-white h-auto shadow-md">
      <div className="flex w-full justify-between gap-8 items-center py-2">
        <div>
          <a href={pageRoutes.home}></a>
        </div>
        <Popover.Group
          as="nav"
          className="hidden lg:flex flex-wrap gap-6 items-center justify-end text-gray-800 text-sm 2xl:text-base"
        >
          {navlinks.map(({ label, navKey, href }, i) => (
            <React.Fragment key={i}>
              <DesktopHref
                href={href}
                name={label}
                navKey={navKey}
                selectedNavKey={selectedNavKey}
              />
            </React.Fragment>
          ))}
        </Popover.Group>
      </div>
    </Popover>
  );
};
