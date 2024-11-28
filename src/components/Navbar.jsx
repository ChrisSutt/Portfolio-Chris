import {useState} from 'react';
import {FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu =() => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 right-0 z-50">
            <button className="text-white text-3xl m-4 focus:outline-none" onClick={toggleMenu}>
                { isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`absolute top-0 right -0 w-2/3 h-screen bg-blue-600 text-white transform ${ isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}
            >
            <ul className ="flex flex-col items center justify-center h-full space-y-6">
                <li>
                    <a href="#hero" className="text-lg font-semibold hover:underline" onClick="{toggleMenu}">Home</a>
                </li>
                <li>
                    <a href="#about" className="text-lg font-semibold hover:underline" onClick="{toggleMenu}">About</a>
                </li>
                <li>
                    <a href="#projects" className="text-lg font-semibold hover:underline" onClick="{toggleMenu}">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="text-lg font-semibold hover:underline" onClick="{toggleMenu}">Contact</a>
                </li>

                </ul>
                </div>
        </nav>
    );
};
/* const Navbar = () => (
    <nav className="bg-blue-600 text-white fixed top-0 w-full z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
            <div className="text-lg font-bold">Chris's Portfolio</div>
        <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
        </div>
    </nav>
); */

export default Navbar;
