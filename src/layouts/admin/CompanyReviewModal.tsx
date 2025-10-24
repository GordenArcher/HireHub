// CompanyReviewModal.tsx
import { X, CheckCircle, XCircle, Download, ExternalLink, FileText, Globe, Phone, Mail } from "lucide-react";
import type { Company } from "../../types/Shared";
import { useState } from "react";
import { DocumentPreview } from "../../components/ui/DocumentPreview";

interface Props {
    company: Company;
    onClose: () => void;
    onApprove: (id: string) => void;
    onReject: (id: string) => void;
}

const CompanyReviewModal = ({ company, onClose, onApprove, onReject }: Props) => {
    const [activeTab, setActiveTab] = useState<"info" | "documents">("info");

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">

                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold">Company Review</h2>
                        <button
                            title="close"
                            onClick={() => onClose()}
                            className="p-2 cursor-pointer hover:bg-white/20 rounded-lg transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        {company.logo ? (
                            <img 
                                src={`http://localhost:8000/${company.logo}`} 
                                alt={company.name} 
                                className="w-16 h-16 rounded-lg object-cover border-2 border-white"
                            />
                        ):
                        (company.name.charAt(0))
                        }
                        <div>
                            <h3 className="text-xl font-semibold">{company.name}</h3>
                            <p className="text-orange-100">{company.founding_info?.industry_type || "N/A"}</p>
                        </div>
                    </div>
                </div>

                <div className="flex border-b border-gray-200 px-6">
                    <button
                        onClick={() => setActiveTab("info")}
                        className={`px-6 cursor-pointer py-3 font-medium transition-colors ${
                            activeTab === "info"
                                ? "text-orange-600 border-b-2 border-orange-600"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        Company Information
                    </button>

                    <button
                        onClick={() => setActiveTab("documents")}
                        className={`px-6 py-3 cursor-pointer font-medium transition-colors ${
                            activeTab === "documents"
                                ? "text-orange-600 border-b-2 border-orange-600"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        Documents
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    {activeTab === "info" ? (
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">About the Company</h4>
                                <p className="text-gray-700">{company.about_us || "No description provided"}</p>
                            </div>

                            {company.founding_info && (
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-gray-900 mb-3">Founding Information</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-600">Organization Type</p>
                                            <p className="font-medium text-gray-900">{company.founding_info.org_type || "N/A"}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Industry</p>
                                            <p className="font-medium text-gray-900">{company.founding_info.industry_type || "N/A"}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Team Size</p>
                                            <p className="font-medium text-gray-900">{company.founding_info.team_size || "N/A"}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Year Established</p>
                                            <p className="font-medium text-gray-900">{company.founding_info.year_established || "N/A"}</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-sm text-gray-600">Website</p>
                                            {company.founding_info.company_website ? (
                                                <a 
                                                    href={company.founding_info.company_website} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                                                >
                                                    {company.founding_info.company_website}
                                                    <ExternalLink size={14} />
                                                </a>
                                            ) : (
                                                <p className="font-medium text-gray-900">N/A</p>
                                            )}
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-sm text-gray-600">Company Vision</p>
                                            <p className="font-medium text-gray-900">{company.founding_info.company_vision || "N/A"}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {company.contact_info && (
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Mail size={18} className="text-gray-400" />
                                            <span className="text-gray-900">{company.contact_info.email || "N/A"}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone size={18} className="text-gray-400" />
                                            <span className="text-gray-900">{company.contact_info.phone || "N/A"}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Globe size={18} className="text-gray-400" />
                                            <span className="text-gray-900">{company.contact_info.map_location || "N/A"}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Social Links */}
                            {company.socials && (
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-gray-900 mb-3">Social Media</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {company.socials.facebook && (
                                            <a 
                                                href={company.socials.facebook} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                                            >
                                                Facebook <ExternalLink size={14} />
                                            </a>
                                        )}
                                        {company.socials.twitter && (
                                            <a 
                                                href={company.socials.twitter} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                                            >
                                                Twitter <ExternalLink size={14} />
                                            </a>
                                        )}
                                        {company.socials.linkedin && (
                                            <a 
                                                href={company.socials.linkedin} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                                            >
                                                LinkedIn <ExternalLink size={14} />
                                            </a>
                                        )}
                                        {company.socials.instagram && (
                                            <a 
                                                href={company.socials.instagram} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                                            >
                                                Instagram <ExternalLink size={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {company.documents ? (
                                <>
                                    <DocumentPreview
                                        label="Business Registration Certificate"
                                        file={company.documents.business_registration}
                                        required={true}
                                    />

                                    <DocumentPreview
                                        label="Tax Identification Document"
                                        file={company.documents.tax_document}
                                        required={true}
                                    />

                                    <DocumentPreview
                                        label="ID of Company Representative"
                                        file={company.documents.identification_document}
                                        required={true}
                                    />

                                    <DocumentPreview
                                        label="Additional Document"
                                        file={company.documents.additional_document}
                                        required={false}
                                    />
                                </>
                            ) : (
                                <div className="text-center py-12 text-gray-500">
                                    <FileText size={48} className="mx-auto mb-4 text-gray-300" />
                                    <p>No documents uploaded</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="flex gap-4 justify-end">
                        <button
                            onClick={() => onReject(company.id)}
                            className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
                        >
                            <XCircle size={20} />
                            Reject Company
                        </button>

                        <button
                            onClick={() => onApprove(company.id)}
                            className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-medium"
                        >
                            <CheckCircle size={20} />
                            Approve Company
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default CompanyReviewModal;