
import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Instagram, Globe } from 'lucide-react'
import Logo from '../components/ui/Logo'

const Footer = () => {
    const year = new Date().getFullYear()


    return (
        <div className='bg-[#F1F2F4] p-3 mt-7'>
            <section className='space-x-1.5 max-w-6xl m-auto'>
                <footer className="text-orange-500 pt-16 pb-10 border-t border-white/10 backdrop-blur">
                    <div className="px-4 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
                        <div className="flex flex-col items-start text-center md:text-left">
                            <Logo />

                            <div className="flex gap-4 mt-4">
                                <a href="https://x.com/goriaai" target="_blank" rel="noopener noreferrer" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium" aria-label="Twitter">
                                    <Twitter className="w-5 h-5" />
                                </a>

                                {/* <a href="#" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium" aria-label="LinkedIn">
                                    <Linkedin className="w-5 h-5" />
                                </a> */}

                                <a href="https://instagram.com/goriaai" target="_blank" rel="noopener noreferrer" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium" aria-label="Instagram">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-red-600 mb-4">Quick Link</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/about" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium">About us</Link></li>
                                <li><Link to="/blog" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium">Blog</Link></li>
                                <li><Link to="/contact" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium">Contact</Link></li>
                                <li><Link to="/help" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium">Help Center</Link></li>
                            </ul>
                        </div>

                        {/* <div>
                            <h3 className="text-lg font-medium text-red-600 mb-4">Candidate</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/features" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium">Features</Link></li>
                                <li><Link to="/pricing" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium">Pricing</Link></li>
                                <li><Link to="/testimonials" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium">Testimonials</Link></li>
                                <li><Link to="/guides" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium">Guides</Link></li>
                            </ul>
                        </div> */}

                        <div>
                            <h3 className="text-lg font-medium text-red-600 mb-4">Support</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/legal" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium">Legal</Link></li>
                                <li><Link to="/legal" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium">Terms</Link></li>
                                <li><Link to="/legal" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium">Privacy</Link></li>
                                <li><Link to="/legal" className="relative text-orange-600 hover:text-red-600 pb-1 transition font-medium">Cookies</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-white/10 pt-6">
                        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex items-center space-x-3">
                                <Globe className="w-5 h-5 text-gray-400" />
                                    <p className="text-sm text-gray-400 text-center sm:text-left">
                                        © {year} HireHub Inc. All rights reserved.
                                    </p>
                            </div>
                            
                            <div className="flex gap-4 text-sm">
                                
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer