import { useState, useEffect } from "react";
import { 
    Search, 
    CheckCircle, 
    XCircle, 
    Clock, 
    Eye,
    Building,
    Mail,
    Phone,
    Calendar,
    Briefcase,
    TrendingUp
} from "lucide-react";
import type { Company } from "../../../../types/Shared";
import axiosClient from "../../../../utils/axiosClient";
import { toast } from "react-toastify";
import CompanyReviewModal from "../../../../layouts/admin/CompanyReviewModal";
import NavBar from "../../../../layouts/landing/NavBar";

const CompanyVerificationDashboard = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<"all" | "review" | "accepted" | "rejected">("review");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchCompanies();
    }, []);

    useEffect(() => {
        filterCompanies();
    }, [companies, filter, searchTerm]);

    const fetchCompanies = async () => {
        try {
            setLoading(true);
            const response = await axiosClient.get("/admin/companies/");
            setCompanies(response.data);
        } catch (error) {
            toast.error("Failed to fetch companies");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const filterCompanies = () => {
        let filtered = companies;

        if (filter === "review") {
            filtered = filtered.filter(c => c.onboarded && c.is_accepted === "review");
        } else if (filter === "accepted") {
            filtered = filtered.filter(c => c.is_accepted === "accepted");
        } else if (filter === "rejected") {
            filtered = filtered.filter(c => c.onboarded && c.is_accepted === "rejected");
        }

        if (searchTerm) {
            filtered = filtered.filter(c => 
                c.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                c.contact_info?.email?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredCompanies(filtered);
    };

    const handleApprove = async (companyId: string) => {
        try {
            await axiosClient.patch(`/admin/companies/${companyId}/approve/`);
            toast.success("Company approved successfully");
            fetchCompanies();
            setSelectedCompany(null);
        } catch (error) {
            toast.error("Failed to approve company");
            console.error(error);
        }
    };

    const handleReject = async (companyId: string) => {
        try {
            await axiosClient.patch(`/admin/companies/${companyId}/reject/`);
            toast.error("Company rejected");
            fetchCompanies();
            setSelectedCompany(null);
        } catch (error) {
            toast.error("Failed to reject company");
            console.error(error);
        }
    };

    const getStatusBadge = (company: Company) => {
        if (company.is_accepted == "accepted") {
            return (
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-sm font-semibold border border-green-200">
                    <CheckCircle size={16} />
                    Approved
                </span>
            );
        } else if (company.onboarded && company?.is_accepted == "review") {
            return (
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 rounded-full text-sm font-semibold border border-orange-200">
                    <Clock size={16} />
                    Pending Review
                </span>
            );
        }
        else if (company.onboarded && company?.is_accepted == "rejected") {
            return (
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-red-50 to-rose-50 text-red-700 rounded-full text-sm font-semibold border border-red-200">
                    <XCircle size={16} />
                   Rejected
                </span>
            );
        }
        return (
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                Not Onboarded
            </span>
        );
    };

    const stats = {
        total: companies.length,
        pending: companies.filter(c => c.onboarded && c.is_accepted == "review").length,
        approved: companies.filter(c => c.is_accepted == "accepted").length,
        rejected: companies.filter(c => c.onboarded && c.is_accepted === "rejected").length
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading companies, hold on tight...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <NavBar />
            <div className="min-h-screen p-6">
                <div className="max-w-7xl mx-auto space-y-8">
                    <div className="space-y-3 pt-6">
                        <h1 className="text-5xl max-md:text-3xl font-black leading-tight bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            Company Verification Dashboard
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl">
                            Review and manage company verification requests. Ensure quality partnerships by thoroughly vetting each application.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full -mr-12 -mt-12"></div>
                            <div className="relative">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                                        <Building className="text-gray-600" size={24} />
                                    </div>
                                    <TrendingUp className="text-gray-400" size={20} />
                                </div>
                                <p className="text-sm font-semibold text-gray-600 mb-1">Total Companies</p>
                                <p className="text-3xl font-black text-gray-900">{stats.total}</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl transition-all duration-300 border border-orange-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full -mr-12 -mt-12"></div>
                            <div className="relative">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                                        <Clock className="text-white" size={24} />
                                    </div>
                                    <TrendingUp className="text-orange-400" size={20} />
                                </div>
                                <p className="text-sm font-semibold text-orange-600 mb-1">Pending Review</p>
                                <p className="text-3xl font-black text-orange-700">{stats.pending}</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl transition-all duration-300 border border-green-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100 to-green-50 rounded-full -mr-12 -mt-12"></div>
                            <div className="relative">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                                        <CheckCircle className="text-white" size={24} />
                                    </div>
                                    <TrendingUp className="text-green-400" size={20} />
                                </div>
                                <p className="text-sm font-semibold text-green-600 mb-1">Approved</p>
                                <p className="text-3xl font-black text-green-700">{stats.approved}</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl transition-all duration-300 border border-red-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-100 to-red-50 rounded-full -mr-12 -mt-12"></div>
                            <div className="relative">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center">
                                        <XCircle className="text-white" size={24} />
                                    </div>
                                    <TrendingUp className="text-red-400" size={20} />
                                </div>
                                <p className="text-sm font-semibold text-red-600 mb-1">Rejected</p>
                                <p className="text-3xl font-black text-red-700">{stats.rejected}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-orange-200 overflow-hidden">
                        <div className="p-6 space-y-4">
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search by company name or email..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 border-2 border-orange-300 rounded-xl focus:border-orange-500 outline-none font-medium transition-all"
                                    />
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {[
                                        { key: "all", label: "All" },
                                        { key: "review", label: "Pending" },
                                        { key: "accepted", label: "Approved" },
                                        { key: "rejected", label: "Rejected" }
                                    ].map(({ key, label } : {key: string, label: string}) => (
                                        <button
                                            key={key}
                                            onClick={() => setFilter(key)}
                                            className={`px-6 py-3 rounded-xl cursor-pointer font-bold transition-all duration-300 ${
                                                filter === key
                                                    ? "bg-gradient-to-r bg-orange-500 text-white shadow-lg scale-105"
                                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
                        {filteredCompanies.length === 0 ? (
                            <div className="col-span-full flex flex-col items-center justify-center bg-white/50 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-inner py-16">
                                <Building className="text-gray-400 mb-3" size={48} />
                                <p className="text-gray-500 font-semibold">No companies found</p>
                            </div>
                        ) : (
                            filteredCompanies.map((company) => (
                            <div
                                key={company.id}
                                className="group relative bg-white/60 backdrop-blur-xl border border-gray-200 hover:border-orange-400 rounded-3xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg"
                            >
                                <div className="flex items-center gap-4">
                                    {company.logo ? (
                                        <img
                                            draggable={false}
                                            src={`http://localhost:8000${company.logo}`}
                                            alt={company.name}
                                            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-orange-100"
                                        />
                                    ) : (
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white">
                                            <Building size={26} />
                                        </div>
                                    )}

                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg">{company.name}</h3>
                                        <p className="text-sm text-gray-500">{company.founding_info?.org_type || "N/A"}</p>
                                    </div>
                                </div>

                                <div className="mt-4 space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Mail className="text-orange-500" size={16} /> {company.contact_info?.email || "N/A"}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Phone className="text-orange-500" size={16} /> {company.contact_info?.phone || "N/A"}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Briefcase className="text-orange-500" size={16} /> {company.founding_info?.industry_type || "N/A"}
                                    </div>
                                </div>

                                <div className="mt-4 border-t border-gray-100 pt-3 flex items-center justify-between">
                                    {getStatusBadge(company)}

                                    <button
                                        onClick={() => setSelectedCompany(company)}
                                        className="flex items-center cursor-pointer gap-2 bg-orange-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-orange-600 transition-all"
                                    >
                                        <Eye size={16} /> Review
                                    </button>
                                </div>
                            </div>
                            ))
                        )}
                        </div>

                </div>

                {selectedCompany && (
                    <CompanyReviewModal
                        company={selectedCompany}
                        onClose={() => setSelectedCompany(null)}
                        onApprove={handleApprove}
                        onReject={handleReject}
                    />
                )}
            </div>
        </>
    );
};

export default CompanyVerificationDashboard;