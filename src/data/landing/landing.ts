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
        title: "Technical Support Specialist",
        type: "PART-TIME",
        salary: { min: 30000, max: 50000 },
        company: {
        name: "Hubtel",
        logo: "H",
        location: "Cape Coast, Ghana"
        },
        description:
        "As a Technical Support Specialist at Hubtel, you will provide exceptional technical support to customers across Ghana. You will troubleshoot both hardware and software issues, escalate complex problems when necessary, and ensure customers receive timely resolutions. You’ll play a critical role in building customer trust while gaining exposure to cutting-edge communication tools and digital services.",
        requirements: [
            "Diploma or degree in Information Technology or related field",
            "1+ years of experience in IT support or customer service",
            "Strong diagnostic and troubleshooting skills",
            "Excellent communication and problem-solving abilities"
        ],
        desirable: [
        "Experience with Hubtel applications and systems",
        "Basic understanding of networking and cloud services",
        "Previous experience in fintech or telecommunications"
        ],
        benefits: [
        "Flexible work schedule",
        "Discounts on Hubtel services",
        "Ongoing technical training and certification support"
        ],
        tags: ["IT Support", "Helpdesk", "Customer Service", "Part-Time"]
    },
    {
        id: 2,
        title: "Senior UX Designer",
        type: "FULL-TIME",
        salary: { min: 250000, max: 300000 },
        company: {
        name: "MTN Ghana",
        logo: "M",
        location: "Accra, Ghana"
        },
        description:
        "MTN Ghana is seeking a highly creative Senior UX Designer to lead design initiatives for its digital platforms. You will collaborate with cross-functional teams, conduct user research, and craft intuitive experiences that delight millions of users nationwide. Your work will directly impact the digital transformation journey of one of Africa’s largest telecom companies.",
        requirements: [
        "Bachelor’s degree in Design, HCI, or related field",
        "5+ years of professional experience in UX/UI design",
        "Strong portfolio demonstrating user-centered design",
        "Proficiency with design tools such as Figma, Sketch, or Adobe XD"
        ],
        desirable: [
        "Experience in leading design teams",
        "Knowledge of accessibility and inclusive design",
        "Background in the telecommunications sector"
        ],
        benefits: [
        "Competitive compensation and bonus structure",
        "Medical and wellness benefits",
        "Training opportunities locally and abroad"
        ],
        tags: ["UX", "UI", "Telecom", "Design", "Full-Time"]
    },
    {
        id: 3,
        title: "Software Engineer (Backend)",
        type: "FULL-TIME",
        salary: { min: 120000, max: 180000 },
        company: {
        name: "Flutterwave",
        logo: "F",
        location: "Remote, Africa"
        },
        description:
        "Flutterwave is looking for a talented Backend Engineer to build scalable payment solutions. You will develop APIs, optimize system performance, and contribute to secure financial transactions for millions of users across Africa. This role requires a deep understanding of distributed systems and a passion for writing clean, maintainable code.",
        requirements: [
        "Bachelor’s degree in Computer Science or related field",
        "3+ years of backend development experience",
        "Proficiency in Python, Java, or Go",
        "Experience with REST APIs and microservices"
        ],
        desirable: [
        "Knowledge of financial technologies",
        "Experience with Docker and Kubernetes",
        "Familiarity with PostgreSQL and NoSQL databases"
        ],
        benefits: [
        "Remote-friendly work",
        "Health and wellness coverage",
        "Annual team retreats across Africa"
        ],
        tags: ["Backend", "APIs", "Fintech", "Engineering", "Full-Time"]
    },
    {
        id: 4,
        title: "Data Analyst",
        type: "CONTRACT",
        salary: { min: 80000, max: 100000 },
        company: {
        name: "Vodafone Ghana",
        logo: "V",
        location: "Accra, Ghana"
        },
        description:
        "As a Data Analyst at Vodafone Ghana, you will collect, analyze, and interpret large datasets to provide actionable insights that guide strategic decisions. You will work closely with marketing, product, and operations teams to uncover trends and improve customer engagement.",
        requirements: [
        "Bachelor’s degree in Statistics, Mathematics, or related field",
        "2+ years of experience in data analysis",
        "Proficiency in SQL and Excel",
        "Experience with data visualization tools like Power BI or Tableau"
        ],
        desirable: [
        "Experience in telecom or customer analytics",
        "Knowledge of Python or R for data processing",
        "Strong presentation and communication skills"
        ],
        benefits: [
        "Competitive contract pay",
        "Access to Vodafone learning platform",
        "Networking opportunities with global teams"
        ],
        tags: ["Data", "Analytics", "Telecom", "Contract"]
    },
    {
        id: 5,
        title: "Digital Marketing Specialist",
        type: "FULL-TIME",
        salary: { min: 60000, max: 90000 },
        company: {
        name: "Jumia Ghana",
        logo: "J",
        location: "Accra, Ghana"
        },
        description:
        "Jumia Ghana is hiring a Digital Marketing Specialist to plan, execute, and optimize online marketing campaigns. You will work with SEO, PPC, email, and social media to increase brand awareness and sales conversions. This role is perfect for a data-driven marketer with creativity and passion for e-commerce.",
        requirements: [
        "Bachelor’s degree in Marketing or related field",
        "3+ years of digital marketing experience",
        "Proficiency in Google Ads and Facebook Ads Manager",
        "Strong SEO and SEM skills"
        ],
        desirable: [
        "Experience in e-commerce marketing",
        "Knowledge of marketing automation tools",
        "Creative copywriting skills"
        ],
        benefits: [
        "Performance bonuses",
        "Discounts on Jumia products",
        "Flexible work culture"
        ],
        tags: ["Marketing", "E-commerce", "SEO", "Digital", "Full-Time"]
    },
    {
        id: 6,
        title: "Cybersecurity Analyst",
        type: "FULL-TIME",
        salary: { min: 150000, max: 200000 },
        company: {
        name: "KPMG Ghana",
        logo: "K",
        location: "Accra, Ghana"
        },
        description:
        "KPMG Ghana is looking for a Cybersecurity Analyst to safeguard client systems from cyber threats. You will monitor security alerts, conduct vulnerability assessments, and recommend best practices. This role offers the chance to work with top-tier clients in diverse industries.",
        requirements: [
        "Bachelor’s degree in Cybersecurity or related field",
        "2+ years of experience in security operations",
        "Familiarity with SIEM tools and penetration testing",
        "Strong knowledge of network and system security"
        ],
        desirable: [
        "Certifications like CEH, CISSP, or CompTIA Security+",
        "Experience in consulting environments",
        "Knowledge of cloud security best practices"
        ],
        benefits: [
        "Competitive salary and bonuses",
        "Continuous professional training",
        "Exposure to multinational clients"
        ],
        tags: ["Security", "Cybersecurity", "IT", "Full-Time"]
    },
    {
        id: 7,
        title: "Frontend Developer",
        type: "FULL-TIME",
        salary: { min: 100000, max: 140000 },
        company: {
        name: "MEST Africa",
        logo: "M",
        location: "Accra, Ghana"
        },
        description:
        "MEST Africa is searching for a Frontend Developer passionate about building beautiful and scalable web applications. You will collaborate with designers and backend engineers to deliver engaging user interfaces that work across devices.",
        requirements: [
        "Bachelor’s degree in Computer Science or equivalent experience",
        "2+ years experience with React, Vue, or Angular",
        "Strong knowledge of HTML, CSS, and JavaScript",
        "Familiarity with Git and version control workflows"
        ],
        desirable: [
        "Experience with Next.js or Nuxt.js",
        "Knowledge of testing frameworks like Jest",
        "UI/UX design appreciation"
        ],
        benefits: [
        "Startup culture with growth opportunities",
        "Access to MEST’s tech network",
        "Flexible working environment"
        ],
        tags: ["Frontend", "React", "JavaScript", "Full-Time"]
    },
    {
        id: 8,
        title: "Mobile App Developer (iOS/Android)",
        type: "FULL-TIME",
        salary: { min: 120000, max: 160000 },
        company: {
        name: "Zeepay",
        logo: "Z",
        location: "Accra, Ghana"
        },
        description:
        "Zeepay is seeking a Mobile App Developer skilled in iOS and Android development. You will design and maintain secure fintech applications that enable millions to access financial services conveniently on mobile devices.",
        requirements: [
        "Bachelor’s degree in Computer Science or equivalent",
        "3+ years of experience in iOS and/or Android development",
        "Proficiency in Swift, Kotlin, or Flutter",
        "Knowledge of REST APIs and mobile UI guidelines"
        ],
        desirable: [
        "Experience in fintech or payments apps",
        "Knowledge of mobile security best practices",
        "Familiarity with cross-platform frameworks"
        ],
        benefits: [
        "Competitive salary",
        "Medical and life insurance",
        "Exposure to global fintech innovations"
        ],
        tags: ["Mobile", "iOS", "Android", "Fintech", "Full-Time"]
    },
    {
        id: 9,
        title: "Cloud Solutions Architect",
        type: "FULL-TIME",
        salary: { min: 200000, max: 250000 },
        company: {
        name: "Google Ghana",
        logo: "G",
        location: "Accra, Ghana"
        },
        description:
        "As a Cloud Solutions Architect at Google Ghana, you will design cloud strategies for enterprise clients. You will architect scalable solutions, ensure security compliance, and drive adoption of Google Cloud services across industries.",
        requirements: [
        "Bachelor’s degree in Computer Science, Engineering, or related field",
        "5+ years of experience in cloud architecture",
        "Proficiency in GCP, AWS, or Azure",
        "Strong knowledge of networking, databases, and security"
        ],
        desirable: [
        "Google Cloud Professional certification",
        "Experience with hybrid cloud solutions",
        "Strong client-facing and presentation skills"
        ],
        benefits: [
        "World-class training and certifications",
        "Stock options and bonuses",
        "Global career opportunities"
        ],
        tags: ["Cloud", "Google", "Architecture", "Engineering", "Full-Time"]
    },
    {
        id: 10,
        title: "Product Manager",
        type: "FULL-TIME",
        salary: { min: 140000, max: 200000 },
        company: {
            name: "Chipper Cash",
            logo: "C",
            location: "Remote, Africa"
        },

        description: "Chipper Cash is hiring a Product Manager to lead the development of innovative fintech solutions. You will gather user insights, define product roadmaps, and work with engineering and design teams to deliver impactful products.",
        requirements: [
            "Bachelor’s degree in Business, Technology, or related field",
            "3+ years of experience as a product manager",
            "Strong analytical and problem-solving skills",
            "Excellent communication and leadership abilities"
        ],
        desirable: [
            "Experience in fintech or financial services",
            "Background in agile methodologies",
            "Experience managing cross-border products"
        ],
        benefits: [
            "Fully remote work",
            "Competitive pay and equity options",
            "Professional development budget"
        ],
        tags: ["Product", "Management", "Fintech", "Full-Time"]
    },
    {
        id: 11,
        title: "Business Development Manager",
        type: "FULL-TIME",
        salary: { min: 100000, max: 160000 },
        company: {
        name: "ExpressPay",
        logo: "E",
        location: "Accra, Ghana"
        },
        description:
        "ExpressPay is seeking a Business Development Manager to drive strategic partnerships and revenue growth. You will identify new business opportunities, negotiate contracts, and collaborate with internal teams to launch and scale financial solutions. This role requires strong commercial acumen and the ability to build lasting relationships in fintech and beyond.",
        requirements: [
        "Bachelor’s degree in Business, Finance, or related field",
        "4+ years of experience in business development or sales",
        "Strong negotiation and presentation skills",
        "Proven track record of meeting revenue targets"
        ],
        desirable: [
        "Experience in fintech or banking sector",
        "Network of business contacts in Ghana",
        "Knowledge of digital payment systems"
        ],
        benefits: [
        "Performance-based bonuses",
        "Healthcare benefits",
        "Career growth opportunities within fintech"
        ],
        tags: ["Business", "Development", "Fintech", "Full-Time"]
    },
    {
        id: 12,
        title: "Graphic Designer",
        type: "FULL-TIME",
        salary: { min: 40000, max: 70000 },
        company: {
        name: "Meltwater Entrepreneurial School of Technology (MEST)",
        logo: "M",
        location: "Accra, Ghana"
        },
        description:
        "MEST is hiring a Graphic Designer to create engaging visual content that supports its brand and entrepreneurship programs. You will design promotional materials, digital assets, and event branding while working closely with the communications team to maintain a consistent visual identity.",
        requirements: [
        "Diploma or degree in Graphic Design or related field",
        "Proficiency in Adobe Creative Suite (Illustrator, Photoshop, InDesign)",
        "Creative portfolio demonstrating past design projects",
        "Strong understanding of design principles and typography"
        ],
        desirable: [
        "Experience in branding startups or tech hubs",
        "Video editing and motion graphics skills",
        "Knowledge of UX/UI basics"
        ],
        benefits: [
        "Opportunity to work in a vibrant entrepreneurial ecosystem",
        "Access to workshops and networking events",
        "Creative freedom and flexible work culture"
        ],
        tags: ["Design", "Graphics", "Creative", "Full-Time"]
    },
    {
        id: 13,
        title: "Operations Coordinator",
        type: "CONTRACT",
        salary: { min: 50000, max: 80000 },
        company: {
        name: "Bolt Ghana",
        logo: "B",
        location: "Accra, Ghana"
        },
        description:
        "Bolt Ghana seeks an Operations Coordinator to support its ride-hailing business. You will analyze driver performance, ensure compliance with safety standards, and help streamline operations. This role is ideal for someone who thrives in fast-paced environments and enjoys solving logistical challenges.",
        requirements: [
        "Bachelor’s degree in Business Administration, Logistics, or related field",
        "2+ years of operations or logistics experience",
        "Strong analytical and organizational skills",
        "Proficiency in MS Excel and data reporting"
        ],
        desirable: [
        "Experience in mobility or ride-hailing industry",
        "Knowledge of Ghana’s transport ecosystem",
        "Fluency in multiple local languages"
        ],
        benefits: [
        "Competitive contract pay",
        "Opportunity to transition to a full-time role",
        "Exposure to international operations teams"
        ],
        tags: ["Operations", "Transport", "Ride-Hailing", "Contract"]
    },
    {
        id: 14,
        title: "Machine Learning Engineer",
        type: "FULL-TIME",
        salary: { min: 180000, max: 250000 },
        company: {
        name: "IBM Ghana",
        logo: "I",
        location: "Accra, Ghana"
        },
        description:
        "IBM Ghana is looking for a Machine Learning Engineer to design, develop, and deploy AI solutions for clients across Africa. You will work on predictive analytics, natural language processing, and computer vision projects that solve real-world business problems. This role offers the opportunity to work with cutting-edge technologies and a global innovation network.",
        requirements: [
        "Bachelor’s or Master’s in Computer Science, AI, or related field",
        "3+ years of experience in machine learning",
        "Proficiency in Python and ML frameworks (TensorFlow, PyTorch, Scikit-learn)",
        "Strong knowledge of data preprocessing and model evaluation"
        ],
        desirable: [
        "Experience with cloud-based ML deployment",
        "Publications or contributions to open-source ML projects",
        "Knowledge of big data tools (Hadoop, Spark)"
        ],
        benefits: [
        "Global training programs",
        "Competitive salary and bonuses",
        "Access to IBM Research collaborations"
        ],
        tags: ["AI", "Machine Learning", "Engineering", "Full-Time"]
    },
    {
        id: 15,
        title: "HR Manager",
        type: "FULL-TIME",
        salary: { min: 90000, max: 130000 },
        company: {
        name: "Unilever Ghana",
        logo: "U",
        location: "Tema, Ghana"
        },
        description:
        "Unilever Ghana is recruiting an HR Manager to lead talent acquisition, employee engagement, and HR compliance. You will play a critical role in shaping company culture and aligning HR strategies with business goals. This position requires a balance of people skills and organizational expertise.",
        requirements: [
        "Bachelor’s degree in Human Resources, Business, or related field",
        "5+ years of HR experience",
        "Knowledge of Ghanaian labor laws and HR best practices",
        "Strong leadership and conflict resolution skills"
        ],
        desirable: [
        "Experience in FMCG sector",
        "HR certifications (CIPD, SHRM, etc.)",
        "Ability to manage large-scale recruitment campaigns"
        ],
        benefits: [
        "Healthcare and retirement plans",
        "Employee discounts on Unilever products",
        "Professional growth and training opportunities"
        ],
        tags: ["HR", "Management", "FMCG", "Full-Time"]
    },
    {
        id: 16,
        title: "Full-Stack Developer",
        type: "FULL-TIME",
        salary: { min: 120000, max: 180000 },
        company: {
        name: "Andela",
        logo: "A",
        location: "Remote, Africa"
        },
        description:
        "Andela is hiring a Full-Stack Developer to build scalable applications for global clients. You will work across front-end and back-end systems, collaborate with distributed teams, and deliver high-quality software solutions.",
        requirements: [
        "Bachelor’s degree in Computer Science or equivalent",
        "3+ years of experience in full-stack development",
        "Proficiency in React, Node.js, or Django",
        "Experience with REST APIs and relational databases"
        ],
        desirable: [
        "Knowledge of DevOps and CI/CD pipelines",
        "Experience in remote team environments",
        "Familiarity with GraphQL"
        ],
        benefits: [
        "Remote-first culture",
        "Access to international projects",
        "Continuous technical mentorship"
        ],
        tags: ["Full-Stack", "React", "Django", "Remote", "Full-Time"]
    },
    {
        id: 17,
        title: "Customer Success Manager",
        type: "FULL-TIME",
        salary: { min: 70000, max: 100000 },
        company: {
        name: "Zoho Africa",
        logo: "Z",
        location: "Accra, Ghana"
        },
        description:
        "Zoho Africa is looking for a Customer Success Manager to ensure clients achieve maximum value from Zoho’s business applications. You will onboard new clients, provide training, and serve as the primary liaison for product adoption and success.",
        requirements: [
        "Bachelor’s degree in Business, IT, or related field",
        "2+ years in customer-facing roles",
        "Strong communication and relationship-building skills",
        "Ability to manage multiple accounts simultaneously"
        ],
        desirable: [
        "Experience with SaaS products",
        "Knowledge of CRM and ERP systems",
        "Fluency in French or other regional languages"
        ],
        benefits: [
        "Career progression opportunities",
        "Access to global Zoho resources",
        "Supportive and diverse work culture"
        ],
        tags: ["Customer Success", "SaaS", "CRM", "Full-Time"]
    },
    {
        id: 18,
        title: "Project Manager (IT)",
        type: "FULL-TIME",
        salary: { min: 110000, max: 150000 },
        company: {
        name: "PwC Ghana",
        logo: "P",
        location: "Accra, Ghana"
        },
        description:
        "PwC Ghana seeks a Project Manager to oversee large-scale IT and digital transformation projects. You will manage timelines, coordinate teams, and ensure project deliverables meet client expectations while maintaining profitability and efficiency.",
        requirements: [
        "Bachelor’s degree in Project Management, IT, or related field",
        "5+ years of project management experience",
        "Strong knowledge of Agile and Waterfall methodologies",
        "Excellent leadership and organizational skills"
        ],
        desirable: [
        "PMP or PRINCE2 certification",
        "Experience with ERP implementation",
        "Consulting background"
        ],
        benefits: [
        "Professional training and certifications",
        "Competitive salary and bonuses",
        "Opportunity to work on global client projects"
        ],
        tags: ["Project Management", "IT", "Consulting", "Full-Time"]
    },
    {
        id: 19,
        title: "Sales Executive",
        type: "FULL-TIME",
        salary: { min: 40000, max: 70000 },
        company: {
        name: "Kasapreko Company Limited",
        logo: "K",
        location: "Accra, Ghana"
        },
        description:
        "Kasapreko is seeking Sales Executives to drive product sales across Ghana. You will identify prospects, negotiate contracts, and maintain strong relationships with distributors and retailers. This is a target-driven role with performance-based incentives.",
        requirements: [
        "Diploma or degree in Marketing, Business, or related field",
        "1+ year of sales experience",
        "Excellent communication and negotiation skills",
        "Ability to work independently and meet sales targets"
        ],
        desirable: [
        "Experience in FMCG sales",
        "Knowledge of Ghana’s retail market",
        "Valid driver’s license"
        ],
        benefits: [
        "Commission-based incentives",
        "Transport and mobile allowance",
        "Access to staff welfare programs"
        ],
        tags: ["Sales", "FMCG", "Business", "Full-Time"]
    },
    {
        id: 20,
        title: "Data Scientist",
        type: "FULL-TIME",
        salary: { min: 160000, max: 220000 },
        company: {
        name: "Microsoft Ghana",
        logo: "MS",
        location: "Accra, Ghana"
        },
        description:
        "Microsoft Ghana is hiring a Data Scientist to develop predictive models and derive insights from massive datasets. You will work with engineering and business teams to apply AI/ML solutions that improve products and decision-making processes.",
        requirements: [
        "Bachelor’s or Master’s in Data Science, Statistics, or related field",
        "3+ years of experience in data science roles",
        "Proficiency in Python, R, and SQL",
        "Experience with machine learning algorithms and data visualization"
        ],
        desirable: [
        "Experience with Azure Machine Learning",
        "Publications or projects in AI/ML",
        "Familiarity with big data ecosystems"
        ],
        benefits: [
        "Access to Microsoft global resources",
        "Stock options and bonuses",
        "Continuous career development"
        ],
        tags: ["Data", "AI", "Science", "Microsoft", "Full-Time"]
    },
    {
        id: 21,
        title: 'Journalist',
        type: 'FULL-TIME',
        salary: { min: 40000, max: 100000 },
        company: { name: 'Graphic Communications Group.', logo: 'G', location: 'Accra, Ghana' },
        description: 'As a Journalist at Graphic Communications Group, you will be responsible for researching, writing, editing, and publishing engaging news articles, reports, and features. You will conduct interviews, investigate current events, and ensure that published content is accurate, well-structured, and timely.',
        requirements: [
        'Bachelor’s degree in Journalism, Communications, English, or a related field.',
        'Strong writing, editing, and proofreading skills.',
        'Ability to conduct interviews and gather information from multiple sources.',
        'Knowledge of media law, ethics, and fact-checking best practices.',
        'At least 2 years of professional reporting experience.'
        ],
        desirable: [
        'Experience in digital journalism or multimedia reporting.',
        'Familiarity with SEO and social media publishing.',
        'Strong photography or video editing skills.'
        ],
        benefits: [
        'Health insurance coverage.',
        'Opportunities for professional development and training.',
        'Annual performance bonuses.',
        'Paid leave and holidays.'
        ],
        tags: ['Journalism', 'Writing', 'Media', 'Research', 'Storytelling']
    },
    {
        id: 22,
        title: 'Barista',
        type: 'PART-TIME',
        salary: { min: 10000, max: 20000 },
        company: { name: 'Starbucks.', logo: 'S', location: 'London, UK' },
        description: 'As a Barista at Starbucks, you will be the face of the brand, preparing and serving coffee, tea, and specialty drinks while ensuring excellent customer service. You will also maintain cleanliness, restock supplies, and create a welcoming environment for all customers.',
        requirements: [
        'High school diploma or equivalent.',
        'Strong interpersonal and communication skills.',
        'Ability to work in a fast-paced environment.',
        'Flexibility to work shifts including mornings, evenings, weekends, and holidays.'
        ],
        desirable: [
        'Previous experience in a café or food service environment.',
        'Basic knowledge of coffee brewing techniques.',
        'Cash handling and POS system experience.'
        ],
        benefits: [
        'Free beverages and food discounts.',
        'Flexible scheduling.',
        'Employee wellness programs.',
        'Opportunities for career growth within Starbucks.'
        ],
        tags: ['Customer Service', 'Coffee', 'Teamwork', 'Retail']
    },
    {
        id: 23,
        title: 'Lawyer',
        type: 'FULL-TIME',
        salary: { min: 150000, max: 500000 },
        company: { name: 'AB & David Law Firm.', logo: 'A', location: 'Accra, Ghana' },
        description: 'As a Lawyer at AB & David Law Firm, you will provide legal advice, draft contracts, represent clients in court, and handle negotiations. You will specialize in corporate law, litigation, intellectual property, or another field as required.',
        requirements: [
        'Bachelor of Laws (LLB) degree and Call to the Bar in Ghana.',
        'At least 3 years of post-qualification legal practice experience.',
        'Excellent communication and negotiation skills.',
        'Strong analytical and research abilities.'
        ],
        desirable: [
        'Experience working in an international law firm.',
        'Specialization in corporate or commercial law.',
        'Proficiency in drafting complex legal agreements.'
        ],
        benefits: [
        'Competitive salary and performance bonuses.',
        'Comprehensive medical insurance.',
        'Opportunities for international exposure.',
        'Continuing legal education support.'
        ],
        tags: ['Law', 'Corporate Law', 'Litigation', 'Contracts', 'Legal Advice']
    },
    {
        id: 24,
        title: 'Veterinarian',
        type: 'FULL-TIME',
        salary: { min: 60000, max: 120000 },
        company: { name: 'Animal Care Clinic.', logo: 'A', location: 'Accra, Ghana' },
        description: 'As a Veterinarian, you will diagnose, treat, and prevent illnesses in animals, provide routine checkups, administer vaccinations, and perform surgeries. You will also advise pet owners on nutrition, care, and overall well-being of their animals.',
        requirements: [
        'Doctor of Veterinary Medicine (DVM) degree.',
        'License to practice veterinary medicine in Ghana.',
        'Strong diagnostic and surgical skills.',
        'Compassionate and empathetic communication with pet owners.'
        ],
        desirable: [
        'Experience working with exotic animals.',
        'Knowledge of advanced diagnostic equipment.',
        'Strong teamwork and collaboration skills.'
        ],
        benefits: [
        'Health and accident insurance.',
        'Paid time off and holidays.',
        'Professional development opportunities.',
        'Discounts on veterinary services.'
        ],
        tags: ['Veterinary', 'Animal Care', 'Healthcare', 'Pet Wellness']
    },
    {
        id: 25,
        title: 'Plumber',
        type: 'CONTRACT',
        salary: { min: 20000, max: 40000 },
        company: { name: 'Fix-It Services.', logo: 'F', location: 'Takoradi, Ghana' },
        description: 'As a Plumber at Fix-It Services, you will be responsible for installing, repairing, and maintaining water systems, drainage systems, and sanitation facilities. You will troubleshoot issues, respond to emergencies, and ensure all work meets safety and quality standards.',
        requirements: [
        'Certificate or diploma in plumbing or a related field.',
        'Proven work experience as a plumber.',
        'Knowledge of water supply systems and piping.',
        'Ability to work independently with minimal supervision.'
        ],
        desirable: [
        'Experience with commercial plumbing projects.',
        'Familiarity with green energy plumbing systems.',
        'Good customer service skills.'
        ],
        benefits: [
        'Project-based bonuses.',
        'Protective gear and tools provided.',
        'Training and certification opportunities.',
        'Flexible working hours.'
        ],
        tags: ['Plumbing', 'Maintenance', 'Construction', 'Repairs']
    },
    {
        id: 26,
        title: 'Sales Executive',
        type: 'FULL-TIME',
        salary: { min: 30000, max: 80000 },
        company: { name: 'Melcom.', logo: 'M', location: 'Accra, Ghana' },
        description: 'As a Sales Executive at Melcom, you will develop sales strategies, identify potential clients, and close deals to meet company targets. You will also maintain relationships with existing clients and analyze market trends to boost sales performance.',
        requirements: [
        'Bachelor’s degree in Marketing, Business Administration, or related field.',
        'At least 2 years of sales experience.',
        'Excellent communication and negotiation skills.',
        'Proficiency with CRM software.'
        ],
        desirable: [
        'Experience in retail or FMCG sales.',
        'Ability to work under pressure and meet targets.',
        'Strong presentation skills.'
        ],
        benefits: [
        'Sales commissions and performance bonuses.',
        'Medical and health insurance.',
        'Staff discounts on company products.',
        'Career advancement opportunities.'
        ],
        tags: ['Sales', 'Business Development', 'Negotiation', 'Client Relations']
    },
    {
        id: 27,
        title: 'Event Planner',
        type: 'CONTRACT',
        salary: { min: 40000, max: 90000 },
        company: { name: 'EventsHub.', logo: 'E', location: 'Accra, Ghana' },
        description: 'As an Event Planner, you will design, organize, and manage events such as conferences, weddings, corporate meetings, and festivals. You will coordinate logistics, negotiate with vendors, and ensure flawless execution of all planned events.',
        requirements: [
        'Bachelor’s degree in Hospitality, Event Management, or related field.',
        'Strong organizational and multitasking skills.',
        'Ability to manage budgets and resources effectively.',
        'Proven track record in planning large-scale events.'
        ],
        desirable: [
        'Creativity in event design and themes.',
        'Vendor and supplier network in Ghana.',
        'Crisis management and problem-solving skills.'
        ],
        benefits: [
        'Competitive contract fees.',
        'Networking opportunities with high-profile clients.',
        'Flexible working arrangements.',
        'Event-related travel perks.'
        ],
        tags: ['Event Management', 'Planning', 'Hospitality', 'Organization']
    },
    {
        id: 28,
        title: 'Librarian',
        type: 'FULL-TIME',
        salary: { min: 25000, max: 50000 },
        company: { name: 'University of Ghana.', logo: 'U', location: 'Accra, Ghana' },
        description: 'As a Librarian at the University of Ghana, you will manage the library’s resources, organize book collections, assist students and staff with research, and maintain digital databases. You will also be responsible for developing library policies and training users.',
        requirements: [
        'Bachelor’s degree in Library Science or Information Management.',
        'Strong organizational and cataloguing skills.',
        'Knowledge of digital library systems.',
        'Good interpersonal and research assistance skills.'
        ],
        desirable: [
        'Master’s degree in Library Science.',
        'Experience working in an academic library.',
        'Familiarity with e-learning systems.'
        ],
        benefits: [
            'Academic research allowances.',
            'Access to professional library associations.',
            'Medical insurance.',
            'Paid annual leave.'
        ],
        tags: ['Library', 'Research', 'Education', 'Cataloguing']
    },
    {
        id: 29,
        title: 'Architect',
        type: 'FULL-TIME',
        salary: { min: 120000, max: 300000 },
        company: { name: 'Incept Architectural Group.', logo: 'I', location: 'Accra, Ghana' },
        description: 'As an Architect, you will design, plan, and oversee the construction of buildings and infrastructure. You will collaborate with clients, engineers, and construction teams to create functional, safe, and aesthetically pleasing structures.',
        requirements: [
            'Bachelor’s or Master’s degree in Architecture.',
            'Licensed to practice architecture in Ghana.',
            'Proficiency in CAD software (AutoCAD, Revit, SketchUp).',
            'Strong creativity and problem-solving skills.'
        ],
        desirable: [
            'Experience with sustainable architecture and green design.',
            'Project management experience.',
            'Strong presentation and visualization skills.'
        ],
        benefits: [
            'Competitive salary package.',
            'Bonuses for completed projects.',
            'Health and safety insurance.',
            'Opportunities to work on landmark projects.'
        ],
        tags: ['Architecture', 'Design', 'Construction', 'CAD']
    },
    {
        id: 30,
        title: 'Physiotherapist',
        type: 'FULL-TIME',
        salary: { min: 60000, max: 150000 },
        company: { name: 'Lister Hospital.', logo: 'L', location: 'Accra, Ghana' },
        description: 'As a Physiotherapist, you will work with patients recovering from injuries, surgeries, or chronic illnesses to improve mobility and manage pain. You will assess patient needs, create treatment plans, and guide rehabilitation exercises.',
        requirements: [
            'Bachelor’s degree in Physiotherapy.',
            'Licensed to practice in Ghana.',
            'Strong knowledge of rehabilitation techniques and anatomy.',
            'Excellent patient communication and empathy.'
        ],
        desirable: [
            'Experience in sports physiotherapy.',
            'Knowledge of hydrotherapy and electrotherapy.',
            'Teamwork with multidisciplinary healthcare providers.'
        ],
        benefits: [
            'Medical and dental insurance.',
            'Professional development funding.',
            'Paid vacation and leave days.',
            'Wellness and gym access.'
        ],
        tags: ['Physiotherapy', 'Rehabilitation', 'Healthcare', 'Patient Care']
    },
    {
        id: 31,
        title: "Senior Landscape Architect",
        type: "FULL-TIME",
        salary: { "min": 75000, "max": 110000 },
        company: {
            name: "TerraForm Designs",
            logo: "T",
            location: "Portland, Oregon"
        },
        description: "TerraForm Designs is seeking a creative and experienced Senior Landscape Architect to lead the design of innovative and sustainable public parks, commercial spaces, and residential communities. You will be responsible for developing master plans, creating detailed design concepts, selecting appropriate plant materials, and managing projects from initial client consultation through to construction oversight. A strong portfolio showcasing a range of project types is essential.",
        requirements: [
            "Bachelor’s or Master’s degree in Landscape Architecture",
            "5+ years of professional experience in landscape architecture",
            "Professional licensure (PLA)",
            "Proficiency in AutoCAD, Adobe Creative Suite, and SketchUp"
        ],
        desirable: [
            "Experience with BIM software (e.g., Vectorworks, Revit)",
            "Knowledge of sustainable design principles and certifications (e.g., SITES, LEED)",
            "Strong hand graphics and conceptual design skills"
        ],
        benefits: [
            "Flexible hybrid work schedule",
            "Professional development stipend",
            "Comprehensive health and dental insurance",
            "Quarterly profit-sharing bonus"
        ],
    tags: ["Design", "Architecture", "Sustainability", "Project Management", "Full-Time"]
    },
    {
        id: 32,
        title: "Executive Pastry Chef",
        type: "FULL-TIME",
        salary: { "min": 65000, "max": 85000 },
        company: {
            name: "La Pâtisserie Moderne",
            logo: "L",
            location: "New York, NY"
        },
        description: "La Pâtisserie Moderne is looking for a visionary Executive Pastry Chef to lead our bakery and dessert program for a new high-end restaurant. You will be responsible for menu development, creating innovative plated desserts, viennoiserie, and chocolate work, managing inventory, and leading a team of junior bakers. This role demands a blend of artistic creativity and precise technical skill.",
        requirements: [
            "Culinary degree with a focus on pastry arts",
            "7+ years of experience in a high-volume pastry kitchen",
            "Proven experience in menu development and costing",
            "Expert knowledge of baking techniques, food safety, and sanitation"
        ],
        desirable: [
            "Experience with sugar and chocolate sculpture",
            "Background in dietary-restrictive baking (e.g., gluten-free, vegan)",
            "Previous management experience in a Michelin-starred or AAA Five-Diamond establishment"
        ],
        benefits: [
            "Paid time off and sick leave",
            "Gourmet meal allowance",
            "Health and dental insurance",
            "Opportunity for company-wide recognition and awards"
        ],
        tags: ["Culinary", "Pastry", "Management", "Creative", "Full-Time"]
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