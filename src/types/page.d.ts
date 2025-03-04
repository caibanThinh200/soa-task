export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Activity {
  category: string;
  tagline: string;
  description: string;
  cta?: string;
}

export interface PointOfInterest {
  name: string;
  website: string;
  address: string;
  coordinates?: Coordinates;
  phone: string | string[];
  free_call?: string;
  fax?: string;
  email?: string;
  activities: string[];
  marker_information: string[];
}

export interface Picto {
  title: string;
  description: string;
}

export interface Review {
  author: string;
  review: string;
  date: string;
}

export interface FooterLink {
  name: string;
  url: string;
}

export interface Footer {
  address: {
    name: string;
    phone: string;
    location: string;
  };
  links: FooterLink[];
}

export interface Page {
  id: string;
  language: string;
  head_menu: string[];
  banner_title: string[];
  banner_menu: string[];
  bloc_1: {
    title: string;
    subtitle: string;
    cases: Activity[];
  };
  bloc_2: {
    title: string;
    cases: string[];
  };
  bloc_2_2: {
    title: string;
    btn_1: [string, string];
    btn_2: [string, string];
    btn_3: string;
    btn_4: [string, string, string];
    btn_5: string;
    btn_6: string;
  };
  bloc_3: {
    title: string;
    more_info: string;
    cases: Activity[];
  };
  carte_point: PointOfInterest[];
  bloc_4: {
    title: string;
    subtitle: string;
    text_title: string;
    text: string;
    pictos: Picto[];
  };
  bloc_5: {
    title: string;
    text: string;
    reviews: Review[];
    footer: string;
  };
  bloc_6: {
    title: string;
    subtitle: string;
    text: string;
    button: string;
  };
  footer: Footer;
}
