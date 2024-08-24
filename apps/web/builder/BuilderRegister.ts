import ComponentsStore from "./ComponentStore";
import {
  Hero1,
  hero1Adaptor,
  GET_HERO1_FRAGMENT,
  Hero2,
  GET_HERO2_FRAGMENT,
  hero2Adaptor,
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

Builder.generateGraphqlSchema();
