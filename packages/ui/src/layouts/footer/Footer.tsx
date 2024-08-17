import Button from "../../components/button";
import Typo from "../../components/typo";

import { FC } from "react";
import SectionLayout from "../sectionLayout";

interface ILinkItem {
  title: string;
  href: string;
  isExternal: boolean;
}

interface ILink {
  title: string;
  item: ILinkItem[];
}

export interface IFooterProps {
  description: string;
  links: ILink[];
}

const Footer: FC<IFooterProps> = ({ description, links }) => {
  return (
    <SectionLayout>
      <div>
        <div className="container py-12 lg:py-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="text-white xl:col-span-1">
              <Typo
                as="h2"
                color="black"
                weight="bold"
                size="p"
                className="lg:pr-8"
              >
                wickedblocks
              </Typo>
              <Typo
                as="p"
                size="p"
                className="mt-2 w-3/4 text-sm text-gray-500"
              >
                {description}
              </Typo>
            </div>
            <div className="mt-12 grid md:grid-cols-2 grid-cols-1 g gap-8 xl:col-span-2 xl:mt-0">
              {links.map((linkGroup, index) => (
                <div key={index} className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <Typo
                      as="span"
                      color="black"
                      className="text-sm font-bold uppercase tracking-wider"
                    >
                      {linkGroup.title}
                    </Typo>
                    <ul role="list" className="mt-4 space-y-1">
                      {linkGroup.item.map((link, index) => (
                        <li key={index}>
                          <Button
                            href={link.href}
                            size="sm"
                            variant="link"
                            isExternal={link.isExternal}
                            target={link.isExternal ? "_blank" : "_self"}
                          >
                            <Typo as="h3" size="p2" color="gray">
                              {link.title}
                            </Typo>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 md:py-12 py-6 sm:px-6">
        <div className="container">
          <div className="flex flex-wrap items-baseline">
            <span className="mt-2">
              <Typo
                as="span"
                size="p2"
                color="gray"
                className="flex text-nowrap"
              >
                Copyright © 2020 - 2021
              </Typo>
              <Typo as="span" size="p2" color="black">
                @WickedTemplates
              </Typo>
            </span>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Footer;
