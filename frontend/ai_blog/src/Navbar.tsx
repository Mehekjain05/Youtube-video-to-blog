import { FaLongArrowAltRight } from "react-icons/fa";
import './index.css'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div>
            <nav className="block w-full px-4 py-2 mx-auto text-white drop-shadow-2xl bg-slate-950 shadow-md lg:px-8 lg:py-3">
                <div className="container flex flex-wrap items-center justify-between mx-auto text-gray-100">
                    <a href="#"
                        className="mr-4 block cursor-pointer py-1.5 text-gray-200 font-semibold text-xl">
                        AI Blog Writer
                    </a>
                    <div className="hidden lg:block">
                        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <li className="flex items-center p-1 text-md gap-x-2 text-gray-200">
                                <a href="#" className="flex items-center">
                                    Sign In
                                </a>
                            </li>
                            <li className="flex items-center p-1 text-md gap-x-2 text-gray-200">
                                <a href="#" className="flex items-center">
                                    Get Started
                                </a>
                                <FaLongArrowAltRight size={20} className="arrow"/>
                            </li>
                        </ul>
                    </div>
                    <button
                        className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                        type="button">
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar