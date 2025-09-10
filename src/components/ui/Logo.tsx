import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to={"/"} title="hirehub logo" type="logo">
            <div className="flex items-center gap-2">
                <Briefcase className="w-8 h-8 text-orange-500" />

                <span className="text-2xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                    HireHub
                </span>
            </div>
        </Link>
    );
};

export default Logo;
