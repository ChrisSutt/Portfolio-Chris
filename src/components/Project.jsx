import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';

const Projects = () => {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true });

    const leftVariants = {
        hidden: { x: '-100%', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    };

    const rightVariants = {
        hidden: { x: '100%', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    };

    const projects = [
        { title: "Aurora Lighting Solutions", link: "https://auroralightingsolutions.com", desc: "shopfiy ecommerce store" },
        { title: "Project Management Tool", link: "#", desc: "A tool to manage tasks effectively"},
        { title: "Project 3", link: "#", desc: "My portfolio"},
        { title: "Project 4", link: "#", desc: "a personal blog site"},
        { title: "Project 5", link: "#", desc: "a real-time chat application"},
        { title: "Project 6", link: "#", desc: "a fitness tracking mobile app"},
    ];

    return (
        <section id="projects" className="bg-gray-50 text-gray-800 py-16 px-6 lg:px-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-4">My Projects</h2>
                <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto"></div>
            </div>

            <div className="container mx-auto grid gird-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-12" ref={ref} >
                {projects.map((project, index) => (
                    <motion.div
                    key={ index }
                    variants={ index % 2=== 0 ? leftVariants : rightVariants }
                    initial="hidden"
                    animate={ inView ? 'visible' : 'hidden' }
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <a href={project.link} 
                           className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors">
                            View Project
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

/* const Projects = () => (
    <section id="projects" className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-600">Projects</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.desc}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 font-semibold hover:underline">
                    View Project
                </a>
            </div>
                ))}
        </div>
    </div>

    </section>
); */

export default Projects;