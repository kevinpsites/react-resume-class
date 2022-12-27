export interface ResumeObject {
  personal: PersonalSectionObject;
  education: ExperienceObject[];
  experience: ExperienceObject[];
  leadershipService: ExperienceObject[];
  achievements: string[];
  skills: SkillObject[];
  portfolio: PortfolioObject[];
}

export type sectionKeys = "education" | "experience" | "leadership & Service";

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

export interface ExperienceObject {
  organization: OrganizationObject;
  location: string;
  date: ExperienceDateObject;
  title: string;
  bullets: string[];
}

export interface OrganizationObject {
  name: string;
  image: string;
  website?: string;
}

export interface ExperienceDateObject {
  start: string;
  end: string;
}

export interface SkillObject {
  skill: string;
  rating: 10;
}

export interface PortfolioObject {
  name: string;
  projectRole: string;
  url: string;
  skills: string[];
  app: string;
  pictures: string[];
  description: string;
}
