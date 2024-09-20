import ComponentsStore from "./ComponentStore";
import {
  Hero1,
  hero1Adaptor,
  GET_HERO1_FRAGMENT,
  Hero2,
  GET_HERO2_FRAGMENT,
  hero2Adaptor,
  Testimonial1,
  testimonial1Adaptor,
  GET_TESTIMONIAL1_FRAGMENT,
  GET_LOGO1_FRAGMENT,
  GET_FEATURES1_FRAGMENT,
  Logos1,
  logo1Adaptor,
  Features1,
  features1Adapter,
} from "@repo/ui";

export const Builder = new ComponentsStore();

Builder.addComponent({
  component: Hero1,
  adaptor: hero1Adaptor,
  graphql: GET_HERO1_FRAGMENT,
});

Builder.addComponent({
  component: Hero2,
  adaptor: hero2Adaptor,
  graphql: GET_HERO2_FRAGMENT,
});

Builder.addComponent({
  component: Testimonial1,
  adaptor: testimonial1Adaptor,
  graphql: GET_TESTIMONIAL1_FRAGMENT,
});

Builder.addComponent({
  component: Logos1,
  adaptor: logo1Adaptor,
  graphql: GET_LOGO1_FRAGMENT,
});

Builder.addComponent({
  component: Features1,
  adaptor: features1Adapter,
  graphql: GET_FEATURES1_FRAGMENT,
});

Builder.generateGraphqlSchema();
