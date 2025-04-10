export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
}

export interface Social {
  platform: string;
  url: string;
}

export interface Link {
  title: string;
  url: string;
  description: string;
  clicks?: number;
}

export interface LinkData {
  profile: Profile;
  socials: Social[];
  links: Link[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}