
export interface Salary {
  min: number;
  max: number;
}

export interface Job {
    id: string;
    title: string;
    type: "PART-TIME" | "FULL-TIME" | "CONTRACT" | "INTERNSHIP";
    salary: Salary;
    description: string;
    requirements: string[];
    desirable: string[];
    benefits: string[];
    tags: string[];
    company_id: string; 
    postedAt: Date;
    expiresAt: Date;
}

export interface FoundingInfo {
    orgType: string;
    industryType: string;
    teamSize: string;
    yearEstablished: number;
    companyWebsite: string;
    companyVision: string;
}

export interface ContactInfo {
    mapLocation: string;
    phone: string;
    email: string;
}

export interface Company {
    id: string;
    name: string;
    logo: string; 
    bannerLogo: string; 
    aboutUs: string;
    foundingInfo: FoundingInfo;
    socials: SocialLinks;
    contactInfo: ContactInfo;
}

export interface SocialLinks {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    [key: string]: string | undefined; 
}

type ValidationErrors = {
  [field: string]: string[]; 
};

export interface ErrorResponse {
  message: string;
  errors?: ValidationErrors;
}
