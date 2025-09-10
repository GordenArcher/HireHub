import { useState } from "react"
import Logo from "../../components/ui/Logo"
import { Link , NavLink} from "react-router-dom"

interface NavLinks {
    id: number,
    label: string,
    link: string
}
const NavBar = () => {

    const NavLinks: NavLinks[] = [
        {
            id: 1,
            label: "Home",
            link: "/"
        },
        {
            id: 2,
            label: "Find Job",
            link: '/job'
        },
        {
            id: 3,
            label: "Dashboard",
            link: '/me/dashboard'
        },
        // {
        //     id: 4,
        //     label: "Home"
        // },
        // {
        //     id: 5,
        //     label: "Home"
        // },
        // {
        //     id: 6,
        //     label: "Home"
        // },
    ]

    const [is_authenticated] = useState<boolean>(false)

    return (
        <div className="w-full relative">
            <div className="bg-[#F1F2F4] h-[70px] w-full ">
                <div className="max-w-6xl m-auto h-full relative">
                    <div className="w-full h-full flex items-center justify-between">
                        <div aria-description="page logo">
                            <Logo />
                        </div>

                        <div className="">
                            <ul className="flex items-center gap-3.5 relative">
                                {NavLinks.map((nav) => (
                                <li key={nav.id} className="relative">
                                    <NavLink
                                        to={nav.link}
                                        className={({ isActive }) =>
                                            `relative text-orange-600 hover:text-red-600 pb-1 transition font-medium`
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {nav.label}
                                                <span
                                                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-orange-600 transition-all duration-300 ${
                                                    isActive ? "w-full" : "w-0"
                                                    }`}
                                                />
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="flex items-center gap-2.5">
                                {is_authenticated ? (
                                    <div></div>
                                ) : (
                                   <div className="relative">
                                        <Link to={"/auth/login"} className="px-6 py-3 border border-orange-600 rounded-xl text-orange-500 cursor-pointer hover:bg-orange-600 hover:text-white duration-75 transition ease-in">Login</Link>
                                    </div> 
                                )}

                                <div className="relative">
                                    <Link to={"/post/job"} className="px-6 py-3 rounded-xl bg-orange-600 text-white border cursor-pointer hover:bg-transparent hover:text-orange-600 hover:border-orange-600 duration-75 transition ease-in">Post a Job</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar