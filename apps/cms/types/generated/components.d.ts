import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionCardSlider extends Schema.Component {
  collectionName: 'components_section_card_sliders';
  info: {
    displayName: 'CardSlider';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface UtilSeo extends Schema.Component {
  collectionName: 'components_util_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.card-slider': SectionCardSlider;
      'util.seo': UtilSeo;
    }
  }
}
