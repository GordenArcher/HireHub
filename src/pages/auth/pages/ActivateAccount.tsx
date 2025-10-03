import { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import Logo from "../../../components/ui/Logo";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import axiosClient from "../../../utils/axiosClient";

const ActivateAccount = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const uid = searchParams.get("uid");
    const token = searchParams.get("token");

    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

    useEffect(() => {
        const activate = async () => {
            try {
                const res = await axiosClient.post("/activate_account/", {'uid':uid, 'token':token})
                if (res) {
                    setStatus("success");
                    setTimeout(() => navigate("/auth/login"), 2000);
                }
            } catch (err) {
                setStatus("error");
            }finally{
                console.log("Activation request finished");
            }
        };

        if(uid || token){
            activate();
        }else{
            setStatus("error")
        }

        
    }, [uid, token, navigate]);

    return (
        <div className="h-full w-full relative">
            <Logo />
            <div className="h-full w-full flex items-center justify-center">
                

                <div className="mt-10 flex flex-col items-center">
                    {status === "loading" && (
                        <Loader2 className="h-20 w-20 text-blue-500 animate-spin" />
                    )}

                    {status === "success" && (
                        <CheckCircle className="h-20 w-20 text-green-500 animate-bounce" />
                    )}

                    {status === "error" && (
                        <XCircle className="h-20 w-20 text-red-500 animate-pulse" />
                    )}

                    <p className="mt-4 text-gray-600">
                        {status === "loading" && "Activating your account..."}
                        {status === "success" && "Account activated! Redirecting..."}
                        {status === "error" && "Activation failed. Please try again."}
                    </p>
                </div>
            </div>
        </div>
        
        
    );
    };

export default ActivateAccount;
