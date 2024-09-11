// Components
import Button from "./components/button";
import Image from "./components/image";
import Typo from "./components/typo";
import Collapsible from "./components/collapsible";
import DropDownMenu from "./components/dropdownMenu";
import GlobalLayout from "./layouts/globalLayout";
//Layouts
import Nav, { adaptor as navAdaptor } from "./layouts/nav";
import Footer, { adaptor as footerAdaptor } from "./layouts/footer";

// Sections
import Hero1, { adaptor as hero1Adaptor } from "./sections/heros/hero1";
import Hero2, { adaptor as hero2Adaptor } from "./sections/heros/hero2";
import Testimonial1, {
  adaptor as testimonial1Adaptor,
} from "./sections/testimonial/testimonial1";
import Logos1, { adaptor as logo1Adaptor } from "./sections/logos/logos1";

export { GET_HERO1_FRAGMENT } from "./sections/heros/hero1";
export { GET_HERO2_FRAGMENT } from "./sections/heros/hero2";
export { GET_TESTIMONIAL1_FRAGMENT } from "./sections/testimonial/testimonial1";
export { GET_LOGO1_FRAGMENT } from "./sections/logos/logos1/";
export { GET_BUTTON_FRAGMENT } from "./components/button/button.graphql";
export { GET_TYPO_FRAGMENT } from "./components/typo/typo.graphql";

//export { Testimonial1 } from "./sections/testimonial/testimonial1";

export {
  navAdaptor,
  footerAdaptor,
  hero1Adaptor,
  hero2Adaptor,
  testimonial1Adaptor,
  logo1Adaptor,
};
export {
  GlobalLayout,
  Collapsible,
  DropDownMenu,
  Button,
  Image,
  Typo,
  Hero1,
  Hero2,
  Testimonial1,
  Logos1,
  Nav,
  Footer,
};
