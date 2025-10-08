import { useState } from "react";
import { FileText, PlusCircle, Trash2 } from "lucide-react";
import axiosClient from "../../utils/axiosClient";

const ResumeUpload = () => {
    const [resume, setResume] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleResumeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.type !== "application/pdf") {
                alert("Only PDF files are allowed!");
                return;
            }
            setResume(file);
        }
    };

    const handleUpload = async () => {
        if (!resume) return;

        setIsUploading(true);

        const formData = new FormData();
        formData.append("resume_name", resume.name);
        formData.append("resume_file", resume);
        formData.append("biography", ""); 

        try {
            const res = await axiosClient.post(`resume_save/`, formData, {headers: { "Content-Type": "multipart/form-data"}} );

            if (res.data.status === "success") {
                alert("Resume saved successfully!");
                setResume(null);
            }
        } catch (err: any) {
            console.error(err);
            alert(err.response?.data?.message || "Failed to upload resume");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="mt-10 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Your CV / Resume</h2>

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                {resume ? (
                    <div className="w-full flex items-center justify-between gap-2 border border-orange-400 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-2">
                            <FileText className="text-blue-600" size={30} />
                            <div>
                                <p className="text-sm font-medium">{resume.name}</p>
                                <span className="text-xs text-gray-500">
                                    {(resume.size / (1024 * 1024)).toFixed(1)} MB
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <button
                                onClick={handleUpload}
                                disabled={isUploading}
                                className="text-blue-600 hover:underline"
                            >
                                {isUploading ? "Saving..." : "Save"}
                            </button>

                            <button
                                title="remove"
                                onClick={() => setResume(null)}
                                className="text-red-500 hover:underline"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ) : (
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-orange-300 rounded-lg p-6 w-52 cursor-pointer hover:bg-gray-50 transition">
                        <PlusCircle className="text-gray-500" size={24} />
                        <p className="text-sm text-gray-600">Add CV / Resume</p>
                        <p className="text-xs text-gray-400">Only PDF</p>

                        <input
                            type="file"
                            accept="application/pdf"
                            className="hidden"
                            onChange={handleResumeFileChange}
                        />
                    </label>
                )}
            </div>
        </div>
    );
};

export default ResumeUpload;
