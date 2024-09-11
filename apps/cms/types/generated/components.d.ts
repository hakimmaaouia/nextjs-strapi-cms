import type { Schema, Attribute } from '@strapi/strapi';

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

export interface SectionTestimonial1 extends Schema.Component {
  collectionName: 'components_section_testimonial1s';
  info: {
    displayName: 'Testimonial1';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'component.typo'> & Attribute.Required;
    description: Attribute.Component<'component.typo'> & Attribute.Required;
    authorName: Attribute.Component<'component.typo'> & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    avatar: Attribute.Media<'images'> & Attribute.Required;
    isReverse: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    className: Attribute.String;
  };
}

export interface SectionLogo1 extends Schema.Component {
  collectionName: 'components_section_logo1s';
  info: {
    displayName: 'Logos1';
    description: '';
  };
  attributes: {
    text: Attribute.Component<'component.typo'>;
    logos: Attribute.Media<'images', true> & Attribute.Required;
    className: Attribute.Text;
  };
}

export interface SectionHero2 extends Schema.Component {
  collectionName: 'components_components_hero2s';
  info: {
    displayName: 'Hero2';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'component.typo'> & Attribute.Required;
    description: Attribute.Component<'component.typo'> & Attribute.Required;
    firstButton: Attribute.Component<'component.button'> & Attribute.Required;
    secondButton: Attribute.Component<'component.button'> & Attribute.Required;
    className: Attribute.String;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface SectionHero1 extends Schema.Component {
  collectionName: 'components_section_hero1s';
  info: {
    displayName: 'Hero1';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'component.typo'> & Attribute.Required;
    description: Attribute.Component<'component.typo'> & Attribute.Required;
    firstButton: Attribute.Component<'component.button'> & Attribute.Required;
    secondButton: Attribute.Component<'component.button'> & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    className: Attribute.String;
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

export interface NavNavList extends Schema.Component {
  collectionName: 'components_nav_nav_lists';
  info: {
    displayName: 'NavList';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'nav.link', true>;
  };
}

export interface NavLink extends Schema.Component {
  collectionName: 'components_nav_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    href: Attribute.Text;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface NavDropdown extends Schema.Component {
  collectionName: 'components_nav_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'arrowDown';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'nav.link', true>;
  };
}

export interface ComponentTypo extends Schema.Component {
  collectionName: 'components_component_typos';
  info: {
    displayName: 'Typo';
    description: '';
  };
  attributes: {
    as: Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'p', 'span', 'blockquote']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'span'>;
    text: Attribute.Text & Attribute.Required;
    highlightedIndex: Attribute.String;
  };
}

export interface ComponentLink extends Schema.Component {
  collectionName: 'components_component_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {};
}

export interface ComponentImage extends Schema.Component {
  collectionName: 'components_component_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'util.seo': UtilSeo;
      'section.testimonial1': SectionTestimonial1;
      'section.logo1': SectionLogo1;
      'section.hero2': SectionHero2;
      'section.hero1': SectionHero1;
      'section.card-slider': SectionCardSlider;
      'nav.nav-list': NavNavList;
      'nav.link': NavLink;
      'nav.dropdown': NavDropdown;
      'component.typo': ComponentTypo;
      'component.link': ComponentLink;
      'component.image': ComponentImage;
      'component.button': ComponentButton;
    }
  }
}
