export interface ResumeObject {
  personal: PersonalSectionObject;
}

export interface PersonalSectionObject {
  name: string;
  about: string;
  resume: string;
  title: string;
  aboutMeImage: string;
  adjectives: PersonalAdjectives[];
}

export interface PersonalAdjectives {
  adjective: string;
  link: string;
}
