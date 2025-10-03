import type { CompanyForm } from "../types/Shared";

export const calculateProgress = (form: CompanyForm): number => {
    const requiredFields: (keyof CompanyForm)[] = [
        "name",
        "about",
        "org_type",
        "industry_type",
        "team_size",
        "year_established",
        "company_website",
        "company_vision",
        "facebook",
        "twitter",
        "linkedin",
        "instagram",
        "map_location",
        "phone",
        "email",
        "logo",
        "banner",
    ];

    const filled = requiredFields.filter((field) => {
        const value = form[field];
        if (value === null || value === undefined) return false;
        if (typeof value === "string") return value.trim() !== "";
        return true; 
    }).length;

    return Math.round((filled / requiredFields.length) * 100);
};
