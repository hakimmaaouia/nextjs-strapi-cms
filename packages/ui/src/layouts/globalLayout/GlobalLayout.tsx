import Nav, { INavProps } from "../nav";
import Footer, { IFooterProps } from "../footer";
import { FC, ReactNode } from "react";

interface IGlobalLayoutProps {
  children: ReactNode;
  nav: INavProps;
  footer: IFooterProps;
}

const GlobalLayout: FC<IGlobalLayoutProps> = ({ children, nav, footer }) => {
  return (
    <div>
      <Nav {...nav} />
      <div className="min-h-screen">{children}</div>
      <Footer {...footer} />
    </div>
  );
};

export default GlobalLayout;
