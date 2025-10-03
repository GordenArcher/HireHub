import { useState } from "react"
import Logo from "../../components/ui/Logo"
import { Link, NavLink } from "react-router-dom"
import { useAuthStore } from "../../stores/useAuthStore"

interface NavLinks {
    id: number,
    label: string,
    link: string,
    type?: "JS" | null
}

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthenticated, user } = useAuthStore()

    const NavLinks: NavLinks[] = [
        {
            id: 1,
            label: "Home",
            link: "/",
            type: null
        },
        {
            id: 2,
            label: "Find Job",
            link: '/find-job',
            type: "JS"
        },
        {
            id: 3,
            label: "Dashboard",
            link: '/me/dashboard',
            type: null
        },
    ]

    const FilterNav = NavLinks.filter((nav) => {
        if (nav.type === null) return true;

        return nav.type === user?.user_type;
    });



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="w-full relative">
            <div className="bg-[#F1F2F4] h-[70px] w-full">
                <div className="max-w-6xl m-auto h-full relative px-4 sm:px-6">
                    <div className="w-full h-full flex items-center justify-between">
                        <div aria-description="page logo">
                            <Logo />
                        </div>

                        <div className="hidden md:block">
                            <ul className="flex items-center gap-3.5 relative">
                                {FilterNav.map((nav) => (
                                    !isAuthenticated && nav.label == "Dashboard" ? null :
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

                        <div className="hidden md:flex relative">
                            <div className="flex items-center gap-2.5">
{/*                                 
                                <div className="relative">
                                    <Link to={"/post/job"} className="px-6 py-3 rounded-xl bg-orange-600 text-white border cursor-pointer hover:bg-transparent hover:text-orange-600 hover:border-orange-600 duration-75 transition ease-in">Post a Job</Link>
                                </div> */}

                                {isAuthenticated ? (
                                    <div>
                                        {user?.profile_image ? (
                                            <img className="w-12 h-12 rounded-full" src={user?.profile_image} alt={user?.user?.username} />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-600">
                                                <span className="capitalize text-xl text-white font-bold">{user?.user?.username?.[0]}</span>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="relative">
                                        <Link to={"/auth/login"} className="px-6 py-3 border border-orange-600 rounded-xl text-orange-500 cursor-pointer hover:bg-orange-600 hover:text-white duration-75 transition ease-in">Login</Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="md:hidden flex items-center gap-2">
                            <div>
                                {user?.profile_image ? (
                                    <img src={user?.profile_image} alt={user?.user?.username} />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-orange-600"></div>
                                )}
                                
                            </div>

                            <button
                                onClick={toggleMenu}
                                className="text-orange-600 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>

                        </div>
                    </div>
                </div>

                <div className={`md:hidden bg-[#F1F2F4] absolute top-full left-0 right-0 shadow-lg transition-all duration-300 ease-in-out z-50 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="px-4 py-5">
                        <ul className="flex flex-col space-y-4">
                            {NavLinks.map((nav) => (
                                <li key={nav.id} className="relative">
                                    <NavLink
                                        to={nav.link}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `block py-2 text-orange-600 hover:text-red-600 transition font-medium ${isActive ? 'border-l-4 border-orange-600 pl-2' : 'pl-2'}`
                                        }
                                    >
                                        {nav.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="mt-6 pt-4 border-t border-gray-300">
                            <div className="flex flex-col space-y-4">
                                
                                <div className="relative">
                                    <Link
                                        to={"/post/job"} 
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block w-full text-center px-6 py-3 rounded-xl bg-orange-600 text-white border cursor-pointer hover:bg-transparent hover:text-orange-600 hover:border-orange-600 duration-75 transition ease-in"
                                    >
                                        Post a Job
                                    </Link>
                                </div>

                                {!isAuthenticated &&
                                    <div className="relative">
                                        <Link 
                                            to={"/auth/login"} 
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block w-full text-center px-6 py-3 border border-orange-600 rounded-xl text-orange-500 cursor-pointer hover:bg-orange-600 hover:text-white duration-75 transition ease-in"
                                        >
                                            Login
                                        </Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar