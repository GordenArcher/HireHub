export interface LandingHero {
    id: number,
    icon: string,
    figures: number,
    label: string
}

export interface PopulVaca {
    id: number,
    link: string,
    label: string,
    figure: number
}

import type { LucideIcon } from "lucide-react";

export interface Step {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
    isHighlighted: boolean;
}

export interface Category {
    id: number;
    name: string;
    openPositions: number;
    icon: React.ElementType;
    bgColor: string;
}

export interface Job {
    id: number;
    title: string;
    type: 'FULL-TIME' | 'PART-TIME' | 'INTERNSHIP' | 'CONTRACT';
    salary: {
        min: number;
        max: number;
    };
    company: {
        name: string;
        logo: string;
        location: string;
    },
    description: string,
    requirements: string[],
    desirable: string[],
    benefits: string[],
    tags: string[]
}

export interface Company {
    id: number;
    name: string;
    logo: string;
    location: string;
    featured: boolean;
    openPositions: number;
    bgColor: string;
}

export interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    avatar: string;
    rating: number;
    content: string;
    featured?: boolean;
}

export interface NavLinks {
    id: number,
    label: string,
    icon: LucideIcon,
    link: string
}