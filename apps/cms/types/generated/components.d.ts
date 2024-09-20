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

export interface SectionFeatures1 extends Schema.Component {
  collectionName: 'components_section_features1s';
  info: {
    displayName: 'Features1';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'component.typo'> & Attribute.Required;
    className: Attribute.String;
    features: Attribute.Component<'component.card-feature', true>;
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

export interface ComponentIcon extends Schema.Component {
  collectionName: 'components_component_icons';
  info: {
    displayName: 'Icon';
    description: '';
  };
  attributes: {
    name: Attribute.Enumeration<
      [
        'a-arrow-down',
        'a-arrow-up',
        'a-large-small',
        'accessibility',
        'activity',
        'air-vent',
        'airplay',
        'alarm-clock-check',
        'alarm-clock-minus',
        'alarm-clock-off',
        'alarm-clock-plus',
        'alarm-clock',
        'alarm-smoke',
        'album',
        'align-center-horizontal',
        'align-center-vertical',
        'align-center',
        'align-end-horizontal',
        'align-end-vertical',
        'align-horizontal-distribute-center',
        'align-horizontal-distribute-end',
        'align-horizontal-distribute-start',
        'align-horizontal-justify-center',
        'align-horizontal-justify-end',
        'align-horizontal-justify-start',
        'align-horizontal-space-around',
        'align-horizontal-space-between',
        'align-justify',
        'align-left',
        'align-right',
        'align-start-horizontal',
        'align-start-vertical',
        'align-vertical-distribute-center',
        'align-vertical-distribute-end',
        'align-vertical-distribute-start',
        'align-vertical-justify-center',
        'align-vertical-justify-end',
        'align-vertical-justify-start',
        'align-vertical-space-around',
        'align-vertical-space-between',
        'ambulance',
        'ampersand',
        'ampersands',
        'anchor',
        'angry',
        'annoyed',
        'antenna',
        'anvil',
        'aperture',
        'app-window-mac',
        'app-window',
        'apple',
        'archive-restore',
        'archive-x',
        'archive',
        'armchair',
        'arrow-big-down-dash',
        'arrow-big-down',
        'arrow-big-left-dash',
        'arrow-big-left',
        'arrow-big-right-dash',
        'arrow-big-right',
        'arrow-big-up-dash',
        'arrow-big-up',
        'arrow-down-0-1',
        'arrow-down-1-0',
        'arrow-down-a-z',
        'arrow-down-from-line',
        'arrow-down-left',
        'arrow-down-narrow-wide',
        'arrow-down-right',
        'arrow-down-to-dot',
        'arrow-down-to-line',
        'arrow-down-up',
        'arrow-down-wide-narrow',
        'arrow-down-z-a',
        'arrow-down',
        'arrow-left-from-line',
        'arrow-left-right',
        'arrow-left-to-line',
        'arrow-left',
        'arrow-right-from-line',
        'arrow-right-left',
        'arrow-right-to-line',
        'arrow-right',
        'arrow-up-0-1',
        'arrow-up-1-0',
        'arrow-up-a-z',
        'arrow-up-down',
        'arrow-up-from-dot',
        'arrow-up-from-line',
        'arrow-up-left',
        'arrow-up-narrow-wide',
        'arrow-up-right',
        'arrow-up-to-line',
        'arrow-up-wide-narrow',
        'arrow-up-z-a',
        'arrow-up',
        'arrows-up-from-line',
        'asterisk',
        'at-sign',
        'atom',
        'audio-lines',
        'audio-waveform',
        'award',
        'axe',
        'axis-3d',
        'baby',
        'backpack',
        'badge-alert',
        'badge-cent',
        'badge-check',
        'badge-dollar-sign',
        'badge-euro',
        'badge-help',
        'badge-indian-rupee',
        'badge-info',
        'badge-japanese-yen',
        'badge-minus',
        'badge-percent',
        'badge-plus',
        'badge-pound-sterling',
        'badge-russian-ruble',
        'badge-swiss-franc',
        'badge-x',
        'badge',
        'baggage-claim',
        'ban',
        'banana',
        'banknote',
        'bar-chart-2',
        'bar-chart-3',
        'bar-chart-4',
        'bar-chart-big',
        'bar-chart-horizontal-big',
        'bar-chart-horizontal',
        'bar-chart',
        'barcode',
        'baseline',
        'bath',
        'battery-charging',
        'battery-full',
        'battery-low',
        'battery-medium',
        'battery-warning',
        'battery',
        'beaker',
        'bean-off',
        'bean',
        'bed-double',
        'bed-single',
        'bed',
        'beef',
        'beer',
        'bell-dot',
        'bell-minus',
        'bell-off',
        'bell-plus',
        'bell-ring',
        'bell',
        'bike',
        'binary',
        'biohazard',
        'bird',
        'bitcoin',
        'blinds',
        'blocks',
        'bluetooth-connected',
        'bluetooth-off',
        'bluetooth-searching',
        'bluetooth',
        'bold',
        'bomb',
        'bone',
        'book-a',
        'book-audio',
        'book-check',
        'book-copy',
        'book-down',
        'book-headphones',
        'book-heart',
        'book-image',
        'book-key',
        'book-lock',
        'book-marked',
        'book-minus',
        'book-open-check',
        'book-open-text',
        'book-open',
        'book-plus',
        'book-text',
        'book-type',
        'book-up-2',
        'book-up',
        'book-user',
        'book-x',
        'book',
        'bookmark-check',
        'bookmark-minus',
        'bookmark-plus',
        'bookmark-x',
        'bookmark',
        'boom-box',
        'bot',
        'box-select',
        'box',
        'boxes',
        'braces-asterisk',
        'braces-curly',
        'braces-parentheses',
        'braces-square',
        'brackets-curly',
        'brackets-parentheses',
        'brackets-square',
        'brackets',
        'brain-circuit',
        'brain-cog',
        'brain',
        'briefcase',
        'bring-to-front',
        'brush',
        'bug-off',
        'bug-play',
        'bug',
        'building-2',
        'building',
        'bus-front',
        'bus',
        'cable-car',
        'cake-slice',
        'cake',
        'calculator',
        'calendar-check-2',
        'calendar-check',
        'calendar-clock',
        'calendar-days',
        'calendar-heart',
        'calendar-minus',
        'calendar-off',
        'calendar-plus',
        'calendar-range',
        'calendar-search',
        'calendar-x-2',
        'calendar-x',
        'calendar',
        'camera-off',
        'camera',
        'candy-cane',
        'candy-off',
        'candy',
        'car-front',
        'car-taxi-front',
        'car',
        'caravan',
        'carrot',
        'case-lower',
        'case-sensitive',
        'case-upper',
        'cassette-tape',
        'cast',
        'castle',
        'cat',
        'check-check',
        'check-circle-2',
        'check-circle',
        'check-square-2',
        'check-square',
        'check',
        'chef-hat',
        'cherry',
        'chevron-down-circle',
        'chevron-down-square',
        'chevron-down',
        'chevron-first',
        'chevron-last',
        'chevron-left-circle',
        'chevron-left-square',
        'chevron-left',
        'chevron-right-circle',
        'chevron-right-square',
        'chevron-right',
        'chevron-up-circle',
        'chevron-up-square',
        'chevron-up',
        'chevrons-down-up',
        'chevrons-down',
        'chevrons-left-right',
        'chevrons-left',
        'chevrons-right-left',
        'chevrons-right',
        'chevrons-up-down',
        'chevrons-up',
        'chrome',
        'church',
        'cigarette-off',
        'cigarette',
        'circle-dashed',
        'circle-dollar-sign',
        'circle-dot-dashed',
        'circle-dot',
        'circle-ellipsis',
        'circle-equal',
        'circle-off',
        'circle-slash-2',
        'circle-slash',
        'circle',
        'circuit-board',
        'citrus',
        'clapperboard',
        'clipboard-check',
        'clipboard-copy',
        'clipboard-edit',
        'clipboard-list',
        'clipboard-paste',
        'clipboard-signature',
        'clipboard-type',
        'clipboard-x',
        'clipboard',
        'clock-1',
        'clock-10',
        'clock-11',
        'clock-12',
        'clock-2',
        'clock-3',
        'clock-4',
        'clock-5',
        'clock-6',
        'clock-7',
        'clock-8',
        'clock-9',
        'clock',
        'cloud-cog',
        'cloud-drizzle',
        'cloud-fog',
        'cloud-hail',
        'cloud-lightning',
        'cloud-moon-rain',
        'cloud-moon',
        'cloud-off',
        'cloud-rain-wind',
        'cloud-rain',
        'cloud-snow',
        'cloud-sun-rain',
        'cloud-sun',
        'cloud',
        'cloudy',
        'clover',
        'club',
        'code-2',
        'code-square-brackets',
        'code'
      ]
    > &
      Attribute.Required;
  };
}

export interface ComponentCardFeature extends Schema.Component {
  collectionName: 'components_component_card_features';
  info: {
    displayName: 'cardFeature';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Component<'component.icon'>;
    button: Attribute.Component<'component.button'>;
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
      'nav.nav-list': NavNavList;
      'nav.link': NavLink;
      'nav.dropdown': NavDropdown;
      'section.testimonial1': SectionTestimonial1;
      'section.logo1': SectionLogo1;
      'section.hero2': SectionHero2;
      'section.hero1': SectionHero1;
      'section.features1': SectionFeatures1;
      'section.card-slider': SectionCardSlider;
      'component.typo': ComponentTypo;
      'component.link': ComponentLink;
      'component.image': ComponentImage;
      'component.icon': ComponentIcon;
      'component.card-feature': ComponentCardFeature;
      'component.button': ComponentButton;
    }
  }
}
