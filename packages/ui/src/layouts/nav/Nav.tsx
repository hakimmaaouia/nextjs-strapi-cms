"use client";
import { FC, useState } from "react";
import Button from "../../components/button";
import DropdownMenu from "../../components/dropdownMenu";
import Collapsible from "../../components/collapsible";
import {
  Menu as MenuIcon,
  X as CloseIcon,
  ChevronDown as DownIcon,
} from "lucide-react";
import Typo from "../../components/typo";
import SectionLayout from "../sectionLayout";

interface ILink {
  title: string;
  href: string;
}

interface IDropdown {
  title: string;
  items: ILink[];
}

interface ICta {
  title: string;
  href: string;
}

export interface INavProps {
  links: (IDropdown | ILink)[];
  cta?: ICta[];
}

const NavLinks: FC<{ links: (IDropdown | ILink)[] }> = ({ links }) => {
  return (
    <>
      {links.map((link, index) => {
        if ("items" in link) {
          return (
            <div key={index} className="w-full md:w-fit">
              <Collapsible.CollapsibleContext>
                <Collapsible.CollapsibleTrigger className="flex justify-between w-full mt-2 px-4 py-2 focus:outline-none md:hidden">
                  <Typo as="h3" size="p2" color="gray">
                    {link.title}
                  </Typo>
                  <DownIcon />
                </Collapsible.CollapsibleTrigger>
                <Collapsible.CollapsibleContent className="md:hidden pl-4">
                  {link.items.map((item, i) => (
                    <Button
                      variant="link"
                      key={i}
                      fullWidth
                      className="px-4 py-2 text-sm justify-start pl-2 text-gray-600"
                      href={item.href}
                    >
                      {item.title}
                    </Button>
                  ))}
                </Collapsible.CollapsibleContent>
              </Collapsible.CollapsibleContext>
              <div className="hidden md:block">
                <DropdownMenu.DropdownMenuContext>
                  <DropdownMenu.DropdownMenuTrigger>
                    <Button
                      variant="link"
                      className="mt-2 flex gap-1 items-center px-4 py-2 md:mt-0"
                    >
                      <div className="flex gap-2 items-center">
                        <Typo
                          as="h3"
                          size="p2"
                          color="gray"
                          className="hover:text-black-600"
                        >
                          {link.title}
                        </Typo>
                        <DownIcon />
                      </div>
                    </Button>
                  </DropdownMenu.DropdownMenuTrigger>
                  <DropdownMenu.DropdownMenuContent>
                    {link.items.map((item, i) => (
                      <DropdownMenu.DropdownMenuItem key={i}>
                        <Button
                          className="w-36"
                          variant="link"
                          href={item.href}
                        >
                          <Typo as="h3" size="p2" color="gray">
                            {item.title}
                          </Typo>
                        </Button>
                      </DropdownMenu.DropdownMenuItem>
                    ))}
                  </DropdownMenu.DropdownMenuContent>
                </DropdownMenu.DropdownMenuContext>
              </div>
            </div>
          );
        } else {
          return (
            <Button
              variant="link"
              key={index}
              className="mt-2 px-4 py-2 w-full md:w-fit justify-start focus:outline-none md:mt-0 "
              href={link.href}
            >
              <Typo
                as="h3"
                size="p2"
                color="gray"
                className="hover:text-black-600 "
              >
                {link.title}
              </Typo>
            </Button>
          );
        }
      })}
    </>
  );
};

const NavCtaButtons: FC<{ cta?: ICta[] }> = ({ cta }) => {
  return (
    <>
      {cta?.map((button, index) => (
        <Button size="lg" fullWidth key={index} href={button.href}>
          {button.title}
        </Button>
      ))}
    </>
  );
};

const Nav: FC<INavProps> = ({ links, cta }) => {
  const [open, setOpen] = useState(false);

  return (
    <SectionLayout>
      <div className="flex flex-col py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <Typo
            as="h1"
            size="h5"
            color="black"
            weight="bold"
            className="lg:pr-8"
          >
            wickedblocks
          </Typo>
          <Button
            size="icon"
            className=" md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </Button>
        </div>
        <nav
          className={`${
            open ? "flex" : "hidden"
          } grow flex-col items-center border-black-600 pb-4 md:flex md:flex-row md:justify-end md:pb-0 lg:border-l-2 lg:pl-2`}
        >
          <NavLinks links={links} />
          <div className="md:flex-row flex flex-col list-none items-center gap-2 lg:ml-auto md:w-fit w-full mt-4 md:mt-0">
            <NavCtaButtons cta={cta} />
          </div>
        </nav>
      </div>
    </SectionLayout>
  );
};

export default Nav;
