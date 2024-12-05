import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';
import Project1 from '../../assets/images/Project1.png'
import Project2 from '../../assets/images/Project2.png'
import Project3 from '../../assets/images/Project3.png'
import Project4 from '../../assets/images/Project4.png'
import Project5 from '../../assets/images/Project5.png'
import Project6 from '../../assets/images/Project6.png'

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
        { title: "Aurora Lighting Solutions", link: "https://auroralightingsolutions.com", desc: "shopfiy ecommerce store", image: Project1 },
        { title: "Project Management Tool", link: "#", desc: "A tool to manage tasks effectively", image: Project2},
        { title: "Project 3", link: "#", desc: "My portfolio", image: Project3},
        { title: "Project 4", link: "#", desc: "a personal blog site", image: Project4},
        { title: "Project 5", link: "#", desc: "a real-time chat application", image: Project5},
        { title: "My Portfolio", link: "https://chris-sutton.ca", desc: "a fitness tracking mobile app", image: Project6},
    ];

    return (
    
        <section id="projects" className="bg-gray-50 text-gray-800 py-16">
                    <div className="bg-animated h-[300px]">
                    </div>
        <div className="-mt-[225px] mx-auto relative ">
            <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">My Projects</h2>
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
                        {/* top Half of card */}
                        <div
                            className="h-48"
                            style={{
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            ></div>
                        {/* Bottom half of image*/}
                    <div className="p-6 flex flex-col items-start">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <a href={project.link} 
                           className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors">
                            View Project
                        </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            </div>
        </section>

    );
};

export default Projects;