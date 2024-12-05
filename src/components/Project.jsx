import { motion, useInView } from 'framer-motion'
import { useRef, } from 'react';
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
        { title: "Aurora Lighting Solutions", link: "https://auroralightingsolutions.com", desc: "Developed a fully functional eCommerce store using Shopify, focusing on a user-friendly design and seamless shopping experience. The store features customizable product pages, efficient navigation, secure payment integration, and responsive design for optimal performance across devices. Leveraged Shopify's tools to manage inventory, track sales, and implement marketing strategies, creating a professional and scalable online retail solution", image: Project1 },
        { title: "Project Management Tool", link: "#", desc: "Currently in development, this project is actively being crafted to showcase innovative solutions and refined functionality. Stay tuned for updates as it progresses toward completion.", image: Project2},
        { title: "Fact-V Tech Lounge", link: "https://github.com/ChrisSutt/fact-v-tech-lounge", desc: "Designed a seamless online platform for the Tech Lounge, enabling users to browse and purchase tech-inspired drinks, diverse menu items, and event tickets with ease. Features include a user-friendly interface, clear categorization, and secure payment integration for a smooth experience", image: Project3},
        { title: "Travel Bucket", link: "https://github.com/ChrisSutt/Travel-BucketList", desc: "Developed a Travel Bucket List app for organizing dream destinations, tracking visits, adding notes, and visualizing locations on an interactive map. Features include trip planning tools, photo uploads, and social sharing options.", image: Project4},
        { title: "Fontastic Fusion", link: "https://github.com/ChrisSutt/Project-1-Interactive-Front-End-Application", desc: "Created an interactive web app using TheColorAPI to generate color palettes based on user input, helping designers and artists craft harmonious color schemes for their projects.", image: Project5},
        { title: "My Portfolio", link: "https://chris-sutton.ca", desc: "Currently in development, this project is actively being crafted to showcase innovative solutions and refined functionality. Stay tuned for updates as it progresses toward completion.", image: Project6},
    ];

    return (
    
        <section id="projects" className="bg-light-gray text-gray-800 py-16">
                    <div className=" h-[300px]">
                    </div>
        <div className="-mt-[225px] mx-auto relative ">
            <div className="text-center mb-12">
            <h2 className="text-4xl font-bold b-orange mb-4">My Projects</h2>
            </div>

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-12 px-4" ref={ref} >
                {projects.map((project, index) => (
                    <motion.div
                    key={ index }
                    variants={ index % 2=== 0 ? leftVariants : rightVariants }
                    initial="hidden"
                    animate={ inView ? 'visible' : 'hidden' }
                    
                    className="bg-lighter-gray shadow-lg rounded-lg p-6 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* top Half of card */}
                        <div
                            className="h-48 w-full"
                            style={{
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            ></div>
                        {/* Bottom half of image*/}
                    <div className="p-6 flex flex-col items-start">
                        <h3 className="text-2xl font-bold b-orange mb-2">{project.title}</h3>
                        <p className="text-white mb-4">{project.desc}</p>
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