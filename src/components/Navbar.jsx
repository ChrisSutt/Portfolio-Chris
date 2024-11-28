const Navbar = () => (
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
);

export default Navbar;
