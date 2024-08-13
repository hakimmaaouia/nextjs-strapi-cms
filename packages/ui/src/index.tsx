// Components
import Button from "./components/button";
import Image from "./components/image";
import Typo from "./components/typo";
import Collapsible from "./components/collapsible";
import DropDownMenu from "./components/dropdownMenu";

//Layouts
import Nav from "./layouts/nav";
import Footer from "./layouts/footer";

// Sections
import Hero1 from "./sections/heros/hero1";
import Hero2 from "./sections/heros/hero2";

export { GET_HERO1_FRAGMENT } from "./sections/heros/hero1";
export { GET_BUTTON_FRAGMENT } from "./components/button/button.graphql";
export { GET_TYPO_FRAGMENT } from "./components/typo/typo.graphql";
//export { Hero2 } from "./sections/heros/hero2";
//export { Testimonial1 } from "./sections/testimonial/testimonial1";

export {
  Collapsible,
  DropDownMenu,
  Button,
  Image,
  Typo,
  Hero1,
  Hero2,
  Nav,
  Footer,
};
