import { Download, FileText } from "lucide-react";

export const DocumentPreview = ({ label, file, required }: { label: string; file: string | null; required: boolean }) => {
    const isImage = file?.match(/\.(jpg|jpeg|png|gif)$/i);

    return (
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-start justify-between mb-2">
                <div>
                    <h5 className="font-medium text-gray-900">{label}</h5>
                    {required && <span className="text-xs text-red-500">Required</span>}
                </div>
                {file && (
                    <a
                        href={file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-orange-600 hover:text-orange-700 text-sm font-medium"
                    >
                        <Download size={16} />
                        Download
                    </a>
                )}
            </div>
            {file ? (
                isImage ? (
                    <img 
                        src={file} 
                        alt={label} 
                        className="w-full h-64 object-contain bg-white rounded-lg border border-gray-300"
                    />
                ) : (
                    <div className="flex items-center justify-center h-32 bg-white rounded-lg border border-gray-300">
                        <div className="text-center">
                            <FileText size={48} className="mx-auto text-gray-400 mb-2" />
                            <p className="text-sm text-gray-600">PDF Document</p>
                        </div>
                    </div>
                )
            ) : (
                <div className="flex items-center justify-center h-32 bg-white rounded-lg border border-dashed border-gray-300">
                    <p className="text-sm text-gray-500">{required ? "Document not uploaded" : "Optional - Not provided"}</p>
                </div>
            )}
        </div>
    );
};