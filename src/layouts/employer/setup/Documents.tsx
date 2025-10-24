import { ArrowRight, UploadCloud, X, FileText } from "lucide-react"
import Button from "../../../components/ui/Button"
import { useState, useRef } from "react"

interface DocumentsForm {
    businessRegistration: File | null;
    taxDocument: File | null;
    identificationDocument: File | null;
    additionalDocument: File | null;
}

interface Props {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    setForm: React.Dispatch<React.SetStateAction<DocumentsForm>>;
    form: DocumentsForm;
}

const Documents = ({ setActiveTab, setForm, form }: Props) => {
    console.log(form)
    
    const [businessRegPreview, setBusinessRegPreview] = useState<string>(form?.businessRegistration?.name || "")
    const [taxDocPreview, setTaxDocPreview] = useState<string>(form?.taxDocument?.name || "")
    const [idDocPreview, setIdDocPreview] = useState<string>(form?.identificationDocument?.name || "")
    const [additionalDocPreview, setAdditionalDocPreview] = useState<string>(form?.additionalDocument?.name || "")
    
    const businessRegInputRef = useRef<HTMLInputElement>(null)
    const taxDocInputRef = useRef<HTMLInputElement>(null)
    const idDocInputRef = useRef<HTMLInputElement>(null)
    const additionalDocInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>, 
        type: 'businessRegistration' | 'taxDocument' | 'identificationDocument' | 'additionalDocument'
    ) => {
        const file = e.target.files?.[0]
        if (!file) return

        if (file.size > 10 * 1024 * 1024) {
            alert('File size must be less than 10MB')
            return
        }

        const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
        if (!allowedTypes.includes(file.type)) {
            alert('Please select a PDF, JPG, or PNG file')
            return
        }

        setForm(prev => ({ ...prev, [type]: file }))

        const fileName = file.name
        switch(type) {
            case 'businessRegistration':
                setBusinessRegPreview(fileName)
                break
            case 'taxDocument':
                setTaxDocPreview(fileName)
                break
            case 'identificationDocument':
                setIdDocPreview(fileName)
                break
            case 'additionalDocument':
                setAdditionalDocPreview(fileName)
                break
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const removeDocument = (type: 'businessRegistration' | 'taxDocument' | 'identificationDocument' | 'additionalDocument') => {
        setForm(prev => ({ ...prev, [type]: null }))
        
        switch(type) {
            case 'businessRegistration':
                setBusinessRegPreview("")
                if (businessRegInputRef.current) businessRegInputRef.current.value = ""
                break
            case 'taxDocument':
                setTaxDocPreview("")
                if (taxDocInputRef.current) taxDocInputRef.current.value = ""
                break
            case 'identificationDocument':
                setIdDocPreview("")
                if (idDocInputRef.current) idDocInputRef.current.value = ""
                break
            case 'additionalDocument':
                setAdditionalDocPreview("")
                if (additionalDocInputRef.current) additionalDocInputRef.current.value = ""
                break
        }
    }

    const handleDrop = (
        e: React.DragEvent<HTMLDivElement>, 
        type: 'businessRegistration' | 'taxDocument' | 'identificationDocument' | 'additionalDocument'
    ) => {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        if (file) {
            const event = {
                target: {
                    files: [file]
                }
            } as React.ChangeEvent<HTMLInputElement>
            handleFileChange(event, type)
        }
    }

    const renderUploadBox = (
        label: string,
        type: 'businessRegistration' | 'taxDocument' | 'identificationDocument' | 'additionalDocument',
        preview: string,
        inputRef: React.RefObject<HTMLInputElement>,
        required: boolean = true
    ) => (
        <div className="w-full space-y-2">
            <label htmlFor={type} className="font-medium">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type="file"
                id={type}
                name={type}
                ref={inputRef}
                onChange={(e) => handleFileChange(e, type)}
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
            />
            <div 
                className={`w-full h-40 border border-dashed rounded-md p-3 cursor-pointer transition-all duration-200 ${
                    preview 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-orange-500 bg-orange-300/30 hover:bg-orange-400/20'
                }`}
                onClick={() => inputRef.current?.click()}
                onDrop={(e) => handleDrop(e, type)}
                onDragOver={handleDragOver}
            >
                {preview ? (
                    <div className="relative h-full flex items-center justify-center">
                        <div className="flex items-center gap-3">
                            <FileText size={40} className="text-green-600" />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800 break-all">{preview}</p>
                                <p className="text-xs text-gray-500 mt-1">Document uploaded successfully</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                removeDocument(type)
                            }}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ) : (
                    <div className="h-full flex items-center flex-col gap-3 justify-center">
                        <UploadCloud size={50} className="text-slate-500" />
                        <h3 className="text-center text-sm"> 
                            <b>Browse file</b> or drop here 
                        </h3>
                        <p className="text-xs text-center text-gray-600">
                            PDF, JPG, or PNG. Max file size 10MB
                        </p>
                    </div>
                )}
            </div>
        </div>
    )

    return (
        <div className="w-full relative h-full">
            <div>
                <div className="space-y-4">
                    <div className="space-y-5.5 pb-8 relative">
                        <h3 className="font-medium text-lg">Legal Documents & Verification</h3>
                        <p className="text-sm text-gray-600">
                            Please upload the required documents to verify your company. All documents should be clear and legible.
                        </p>

                        <div className="w-full relative grid grid-cols-2 max-md:grid-cols-1 gap-6 mt-6">
                            {renderUploadBox(
                                "Business Registration Certificate",
                                "businessRegistration",
                                businessRegPreview,
                                businessRegInputRef,
                                true
                            )}

                            {renderUploadBox(
                                "Tax Identification Document",
                                "taxDocument",
                                taxDocPreview,
                                taxDocInputRef,
                                true
                            )}

                            {renderUploadBox(
                                "ID of Company Representative",
                                "identificationDocument",
                                idDocPreview,
                                idDocInputRef,
                                true
                            )}

                            {renderUploadBox(
                                "Additional Document (Optional)",
                                "additionalDocument",
                                additionalDocPreview,
                                additionalDocInputRef,
                                false
                            )}
                        </div>
                    </div>

                    <div className="h-[1px] bg-orange-600 rounded-full transition-all duration-300 w-full"></div>

                    <div className="pt-6 relative">
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                            <h4 className="font-medium text-gray-800 mb-2">Document Guidelines:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• All documents must be valid and up-to-date</li>
                                <li>• Documents should be clearly visible and readable</li>
                                <li>• Accepted formats: PDF, JPG, PNG (Max 10MB each)</li>
                                <li>• Documents will be reviewed within 2-3 business days</li>
                            </ul>
                        </div>

                        <div className="flex gap-4 max-md:flex-col">
                            <Button 
                                handleClick={() => setActiveTab("founding-info")} 
                                title="back"
                            >
                                <span>Back</span>
                            </Button>
                            
                            <Button 
                                handleClick={() => setActiveTab("contact")} 
                                title="save"
                            >
                                <>
                                    <span>Save & Next</span>
                                    <ArrowRight />
                                </> 
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Documents