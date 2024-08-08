import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentButton extends Schema.Component {
  collectionName: 'components_component_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    type: Attribute.Enumeration<['submit', 'button', 'reset']>;
    target: Attribute.Enumeration<['_blank', '_self', '_parent', '_top']>;
    disabled: Attribute.Boolean & Attribute.DefaultTo<false>;
    href: Attribute.String;
    title: Attribute.String;
  };
}

export interface ComponentImage extends Schema.Component {
  collectionName: 'components_component_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ComponentTypo extends Schema.Component {
  collectionName: 'components_component_typos';
  info: {
    displayName: 'Typo';
  };
  attributes: {
    as: Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'p', 'span', 'blockquote']
    >;
    text: Attribute.Text & Attribute.Required;
    highlightedIndex: Attribute.String;
  };
}

export interface SectionCardSlider extends Schema.Component {
  collectionName: 'components_section_card_sliders';
  info: {
    displayName: 'CardSlider';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionHero1 extends Schema.Component {
  collectionName: 'components_section_hero1s';
  info: {
    displayName: 'Hero1';
  };
  attributes: {
    title: Attribute.Component<'component.typo'>;
    description: Attribute.Component<'component.typo'>;
    firstButton: Attribute.Component<'component.button'>;
    secondButton: Attribute.Component<'component.button'>;
  };
}

export interface SectionHero2 extends Schema.Component {
  collectionName: 'components_components_hero2s';
  info: {
    displayName: 'Hero2';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'component.typo'>;
    description: Attribute.Component<'component.typo'>;
    image: Attribute.Component<'component.image'>;
    firstButton: Attribute.Component<'component.button'>;
    secondButton: Attribute.Component<'component.button'>;
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
      'component.button': ComponentButton;
      'component.image': ComponentImage;
      'component.typo': ComponentTypo;
      'section.card-slider': SectionCardSlider;
      'section.hero1': SectionHero1;
      'section.hero2': SectionHero2;
      'util.seo': UtilSeo;
    }
  }
}
