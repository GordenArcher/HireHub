
export interface Salary {
  min: number;
  max: number;
}

interface Document {
    id: string;
    business_registration: string | null;
    tax_document: string | null;
    identification_document: string | null;
    additional_document: string | null;
    created_at: string;
    updated_at: string;
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
    documents: Document | null;
    onboarded: boolean;
    is_accepted: "review" | "accepted" | "rejected"
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

export interface Socials {
  facebook : string | undefined
  instagram : string | undefined
  linkedin : string | undefined
  twitter : string | undefined
  youtube : string | undefined
  personal_website: string | undefined;
}

export interface CompanyForm {
  name: string | undefined
  about: string | undefined
  logo: File | undefined | null
  banner: File | undefined | null
  org_type: string
  industry_type: string
  team_size: string
  year_established: string
  company_website: string
  company_vision: string
  facebook: string
  twitter: string
  linkedin: string
  instagram: string
  map_location: string
  phone: string
  email: string | undefined
  businessRegistration: File | null;
  taxDocument: File | null;
  identificationDocument: File | null;
  additionalDocument: File | null;
}

export interface Job {
  id: string;
  title: string;
  type: "PART-TIME" | "FULL-TIME" | "CONTRACT" | "INTERNSHIP";
  level?: string;
  salary: {
      min: number;
      max: number;
  };
  is_expired: boolean;
  requirements: string[];
  desirable: string[];
  benefits: string[];
  tags: string[];
}