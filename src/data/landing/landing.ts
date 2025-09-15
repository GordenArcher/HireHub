import { 
    Upload, 
    User, 
    CheckCircle, 
    Search,   
    Palette, 
    Code, 
    TrendingUp, 
    Video, 
    Music, 
    Building2, 
    Heart, 
    Database, 
} from "lucide-react";
import type { LandingHero, PopulVaca, Step, Company, Job, Category, Testimonial } from "../../types/landing/landingtypes";

export const HeroData: LandingHero[] = [
    {
        id: 1,
        icon: "BriefcaseBusinessIcon" ,
        figures: 175324,
        label: "Live job"
    },
    {
        id: 2,
        icon: "Building2" ,
        figures: 97354,
        label: "Companies"
    },
    {
        id: 3,
        icon: "Users2" ,
        figures: 3847154,
        label: "Candidates"
    },
    {
        id: 4,
        icon: "BriefcaseBusinessIcon" ,
        figures: 7532,
        label: "New job"
    },
]


export const MostPopularVaca: PopulVaca[] = [
    {
        id: 1,
        label: "Anesthesiologist",
        link: "",
        figure: 45904
    },
    {
        id: 2,
        label: "Surgeons",
        link: "",
        figure: 50364
    },
    {
        id: 3,
        label: "Obstetricians-Gynecoligist",
        link: "",
        figure: 4339
    },
    {
        id: 4,
        label: "Orthodontists",
        link: "",
        figure: 20079
    },
    {
        id: 5,
        label: "Maxillofical Surgeons",
        link: "",
        figure: 74875
    },
    {
        id: 6,
        label: "Software Developer",
        link: "",
        figure: 43359
    },
    {
        id: 7,
        label: "Psychiatrists",
        link: "",
        figure: 18599
    },
    {
        id: 8,
        label: "Data Science",
        link: "",
        figure: 28200
    },
    {
        id: 9,
        label: "Financial Manager",
        link: "",
        figure: 61391
    },
    {
        id: 10,
        label: "Management Analysis",
        link: "",
        figure: 93046
    },
    {
        id: 11,
        label: "IT Manager",
        link: "",
        figure: 50963
    },
    {
        id: 12,
        label: "Operations Research Analysis",
        link: "",
        figure: 16627
    },
]


export const steps: Step[] = [
    {
        id: 1,
        icon: User,
        title: "Create account",
        description: "Sign up and set up your profile to get started.",
        isHighlighted: false,
    },
    {
        id: 2,
        icon: Upload,
        title: "Upload CV/Resume",
        description: "Upload your CV or resume so employers can learn more about you.",
        isHighlighted: true,
    },
    {
        id: 3,
        icon: Search,
        title: "Find suitable job",
        description: "Browse and search for jobs that match your skills and interests.",
        isHighlighted: false,
    },
    {
        id: 4,
        icon: CheckCircle,
        title: "Apply job",
        description: "Apply directly to jobs and track your application status.",
        isHighlighted: false,
    },
];

export const categories: Category[] = [
    {
        id: 1,
        name: 'Graphics & Design',
        openPositions: 357,
        icon: Palette,
        bgColor: 'bg-blue-100'
    },
    {
        id: 2,
        name: 'Code & Programing',
        openPositions: 312,
        icon: Code,
        bgColor: 'bg-green-100'
    },
    {
        id: 3,
        name: 'Digital Marketing',
        openPositions: 297,
        icon: TrendingUp,
        bgColor: 'bg-purple-100'
    },
    {
        id: 4,
        name: 'Video & Animation',
        openPositions: 247,
        icon: Video,
        bgColor: 'bg-orange-100'
    },
    {
        id: 5,
        name: 'Music & Audio',
        openPositions: 204,
        icon: Music,
        bgColor: 'bg-pink-100'
    },
    {
        id: 6,
        name: 'Account & Finance',
        openPositions: 167,
        icon: Building2,
        bgColor: 'bg-indigo-100'
    },
    {
        id: 7,
        name: 'Health & Care',
        openPositions: 125,
        icon: Heart,
        bgColor: 'bg-red-100'
    },
    {
        id: 8,
        name: 'Data & Science',
        openPositions: 57,
        icon: Database,
        bgColor: 'bg-orange-500 text-white'
    }
];

export const jobs: Job[] = [
    {
        id: 1,
        title: 'Technical Support Specialist',
        type: 'PART-TIME',
        salary: { min: 30000, max: 50000 },
        company: { name: 'Hubtel.', logo: 'H', location: 'Cape Coast, Ghana' }
    },
    {
        id: 2,
        title: 'Senior UX Designer',
        type: 'FULL-TIME',
        salary: { min: 250000, max: 300000 },
        company: { name: 'MTN Ghana.', logo: 'M', location: 'Accra, Ghana' }
    },
    {
        id: 3,
        title: 'Marketing Officer',
        type: 'INTERNSHIP',
        salary: { min: 80000, max: 100000 },
        company: { name: 'Amalitech.', logo: 'A', location: 'Accra, Ghana' }
    },
    {
        id: 4,
        title: 'Junior Graphic Designer',
        type: 'PART-TIME',
        salary: { min: 4000, max: 5000 },
        company: { name: 'poco Solutions.', logo: 'P', location: 'Accra, Ghana' }
    },
    {
        id: 5,
        title: 'Interaction Designer',
        type: 'PART-TIME',
        salary: { min: 100000, max: 1500000 },
        company: { name: 'Telecel.', logo: 'T', location: 'Accra, Ghana' }
    },
    {
        id: 6,
        title: 'Project Manager',
        type: 'FULL-TIME',
        salary: { min: 200000, max: 300000 },
        company: { name: 'GoriaAI.', logo: 'G', location: 'Accra, Ghana' }
    }
];

export const companies: Company[] = [
    {
        id: 1,
        name: 'Telecel',
        logo: 'T',
        location: 'Accra, Ghana',
        featured: true,
        openPositions: 3,
        bgColor: 'bg-red-500'
    },
    {
        id: 2,
        name: 'GoriaAI',
        logo: 'G',
        location: 'Accra, Ghana',
        featured: true,
        openPositions: 5,
        bgColor: 'bg-blue-700'
    },
    {
        id: 3,
        name: 'Amalitech',
        logo: 'A',
        location: 'Takoradi, Ghana',
        featured: true,
        openPositions: 3,
        bgColor: 'bg-orange-500'
    }
];


export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Sarah Johnson',
        position: 'Senior Developer',
        company: 'TechCorp',
        avatar: 'SJ',
        rating: 5,
        content: 'JobPilot helped me find my dream job in just 2 weeks! The platform is incredibly user-friendly and the job recommendations were spot on. I highly recommend it to anyone looking for their next career opportunity.',
        featured: true
    },
    {
        id: 2,
        name: 'Michael Chen',
        position: 'UX Designer',
        company: 'DesignHub',
        avatar: 'MC',
        rating: 5,
        content: 'Amazing platform with great job opportunities. The application process was seamless and I received multiple interview invitations within days of uploading my resume.'
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        position: 'Marketing Manager',
        company: 'BrandWorks',
        avatar: 'ER',
        rating: 4,
        content: 'JobPilot transformed my job search experience. The personalized job matches and easy application process made finding the perfect role effortless. Truly exceptional service!'
    },
    {
        id: 4,
        name: 'David Kumar',
        position: 'Data Scientist',
        company: 'DataTech Solutions',
        avatar: 'DK',
        rating: 5,
        content: 'Outstanding job portal! The advanced filtering options helped me find exactly what I was looking for. Got hired within a month of joining the platform.'
    },
    {
        id: 5,
        name: 'Lisa Thompson',
        position: 'Product Manager',
        company: 'InnovateLabs',
        avatar: 'LT',
        rating: 5,
        content: 'Professional, efficient, and results-driven. JobPilot connected me with top-tier companies and helped me land my ideal position. Couldn\'t be happier with the outcome!'
    },
    {
        id: 6,
        name: 'James Wilson',
        position: 'Software Engineer',
        company: 'CodeCraft',
        avatar: 'JW',
        rating: 4,
        content: 'Great platform for job seekers! The interface is clean, the search functionality is powerful, and the customer support team is very responsive. Highly recommended!'
    }
];