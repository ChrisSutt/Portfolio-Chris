import {useState} from 'react';
import {FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu =() => {
        setIsOpen(!isOpen);
    };

    const handleCloseMenu = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'});
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 right-0 z-50">
            {/* hamburger */}
            <button className="text-white text-1xl m-4 focus:outline-none" onClick={toggleMenu}>
                { isOpen ? <FaTimes /> : <FaBars />}
            </button>
            {/* hamburger end */}

            {/*Menu */}
            {isOpen && (
            <div className=" fixed inset-0 bg-gray-800 text-white flex flex-col justify-center items-center z-40">
                <button className="absolute top-4 right-4 text-white text-2x1 focus:outline-none" onClick={toggleMenu}>
                    <FaTimes />
                </button>
            <ul className ="space-y-6 text-center">
                <li>
                    <a href="#hero" className="text-lg font-semibold hover:underline" onClick={() => handleCloseMenu('hero')}>Home</a>
                </li>
                <li>
                    <a href="#about" className="text-lg font-semibold hover:underline" onClick={() => handleCloseMenu('about')}>About</a>
                </li>
                <li>
                    <a href="#projects" className="text-lg font-semibold hover:underline" onClick={() => handleCloseMenu('projects')}>Projects</a>
                </li>
                <li>
                    <a href="#contact" className="text-lg font-semibold hover:underline" onClick={() => handleCloseMenu('contact')}>Contact</a>
                </li>

                </ul>
                </div>
                )}
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
