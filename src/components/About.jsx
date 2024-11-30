import { motion, useInView } from 'framer-motion'; 
import { FaReact, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaFigma, FaJs, FaBug, FaExchangeAlt, FaTasks, FaDesktop } from 'react-icons/fa';
import { useRef } from 'react';

const About = () => {
    const leftVariants = {
        hidden: { x: '-100%', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    };

    const rightVariants = {
        hidden: { x: '100%', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    };

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-50px'});

    return ( 
        <section id="about" className="bg-gray-100 text-gray-800 py-16 flex flex-col items-center" ref={ref}>
        <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden' }
            className="text-center max-w-2xl space-y-4 px-4"
        ></motion.div>
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Who I Am</h2>

            

                {/*Left Section */}
                <motion.div
                    variants={leftVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden' }
                    className="text-left items-center max-w-2xl space-y-4 px-4"
                    >
                        <h3 className="text-2xl font-semibold"></h3>
                        <p>
                            Hi, I’m Chris – a passionate Web Developer and Software Engineer with a love for creating clean, intuitive, and dynamic user experiences. With a strong foundation in modern frameworks like React and a knack for integrating tools like Tailwind CSS, I specialize in building efficient and scalable web applications that merge functionality with aesthetic appeal.
                        </p>

                        <p>
                        When I’m not coding, you’ll find me immersed in gaming, exploring new technologies, or working on community-driven projects like Discord servers for popular games. My journey into development began with a curiosity for problem-solving and has grown into a full-fledged passion for crafting innovative digital solutions.
                        </p>

                        <p>
                        I pride myself on being adaptable and always up for a challenge. Whether it’s collaborating on complex projects, learning the latest tech stack, or fine-tuning the details of an interactive UI, I’m constantly driven to refine my skills and make meaningful contributions. 
                        </p>

                        <p>
                        If you’re looking for a dedicated developer who’s not afraid to dive into the details and deliver high-quality results, let’s connect! 
                        </p>
        </motion.div>

    <div className="relative w-full py-16 bg-purple600 rounded-t-xl">
        <motion.div
        
            variants={rightVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-12 w-3/4 mx-auto">
                {/*front end */}
                <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                    <img
                        src="https://fakeimg.pl/20x20"
                        alt="Frontend Icon"
                        className="w-20 h-20 mb-4"
                    />
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">Frontend</h3>
                    <p className="text-gray-600 mb-4 text-center">
                        Specializing in responsive design, React Development, and crafting engaging user interfaces.
                    </p>
                    <div className="flex flex-col space-y-2">
                    <h3 className="text-1xl font-bold text-blue-600 mb-2 text-center">Tools</h3>
                        <div className="flex items-center">
                            <FaReact className="text-blue-500 text-5xl mr-2" />
                            <span className="text-xl font-semibold text-gray-700">React</span>
                        </div>
                        <div className="flex items-center">
                            <FaJsSquare className="text-blue-500 text-5xl mr-2" />
                            <span className="text-xl font-semibold text-gray-700">JavaScript</span>
                        </div>
                        <div className="flex items-center">
                            <FaHtml5 className="text-blue-500 text-5xl mr-2" />
                            <span className="text-xl font-semibold text-gray-700">Html5</span>
                        </div>
                        <div className="flex items-center">
                            <FaCss3Alt className="text-blue-500 text-5xl mr-2" />
                            <span className="text-xl font-semibold text-gray-700">CSS</span>
                        </div>
                        <div className="flex items-center">
                            <FaGitAlt className="text-blue-500 text-5xl mr-2" />
                            <span className="text-xl font-semibold text-gray-700">Github</span>
                        </div>
                                                <div className="flex items-center">
                            <FaDatabase className="text-blue-500 text-5xl mr-2" />
                            <span className="text-xl font-semibold text-gray-700">jQuery</span>
                        </div>
                    </div>
                </div>

                {/* backend */}
                <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <img
                        src="https://fakeimg.pl/20x20"
                        alt="Frontend Icon"
                        className="w-20 h-20 mb-4"
                    />
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Backend</h3>
                    <p className="text-gray-600 mb-4 text-center">
                    Focused on building scalable server-side applications and managing databases efficiently.
                    </p>
                    <h3 className="text-1xl font-bold text-green-600 mb-2 text-center">Tools</h3>
                    <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                        <FaNodeJs className="text-green-500 text-5xl mr-2" />
                        <span className="text-xl font-semibold text-gray-700">Node</span>
                    </div>
                    <div className="flex items-center">
                        <FaDatabase className="text-green-500 text-5xl mr-2" />
                        <span className="text-xl font-semibold text-gray-700">MySql</span>
                    </div>
                    <div className="flex items-center">
                        <FaDatabase className="text-green-500 text-5xl mr-2" />
                        <span className="text-xl font-semibold text-gray-700">NoSql</span>
                    </div>
                    <div className="flex items-center">
                        <FaDatabase className="text-green-500 text-5xl mr-2" />
                        <span className="text-xl font-semibold text-gray-700">MongoDB</span>
                    </div>
                    <div className="flex items-center">
                        <FaDatabase className="text-green-500 text-5xl mr-2" />
                        <span className="text-xl font-semibold text-gray-700">Express.js</span>
                    </div>
                </div>
            </div>

                <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <img
                        src="https://fakeimg.pl/20x20"
                        alt="Frontend Icon"
                        className="w-20 h-20 mb-4"
                    />
                    <h3 className="text-2xl font-bold text-purple-600 mb-2">UI/UX</h3>
                    <p className="text-gray-600 mb-4 text-center">
                    Dedicated to designing intuitive and engaging user experiences and prototypes.
                    </p>
                    <div className="flex flex-col space-y-2">
                    <h3 className="text-1xl font-bold text-purple-600 mb-2 text-center">Tools</h3>
                    <div className="flex items-center">
                        <FaFigma className="text-purple-500 text-5xl mr-2" />
                        <span className="text-xl font-semibold text-gray-700">Figma</span>
                    </div>
                    <div className="flex items-center">
                        <FaDesktop className="text-purple-500 text-5xl mr-2" />
                        <span className="text-xl font-semibold text-gray-700">Interfaces</span>
                    </div>
                    <div className="flex items-center">
                        <FaBug className="text-purple-500 text-5xl mr-2" />
                        <span className="text-xl font-semibold text-gray-700">Debugging</span>
                    </div>
                    <div className="flex items-center">
                        <FaTasks className="text-purple-500 text-5xl mr-2" />
                        <span className="text-xl font-semibold text-gray-700">Project Dev</span>
                    </div>
                    <div className="flex items-center">
                        <FaExchangeAlt className="text-purple-500 text-5xl mr-2" />
                        <span className="text-xl font-semibold text-gray-700">Rest APIs</span>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
        </section>
    );
};




export default About;
