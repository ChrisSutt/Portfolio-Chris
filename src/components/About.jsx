import { motion } from 'framer-motion'; 
import { FaReact, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaFigma, } from 'react-icons/fa';


const About = () => {
    const leftVariants = {
        hidden: { x: '-100%', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    };

    const rightVariants = {
        hidden: { x: '100%', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    };

    return ( 
        <section id="about" className="bg-gray-100 text-gray-800 py-16 flex flex-col items-center">

            <h2 className="text-4xl font-bold text-blue-600 mb-8">About Me</h2>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {/*Left Section */}
                <motion.div
                    variants={leftVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-left space-y-4"
                    >
                        <h3 className="text-2xl font-semibold">Who I Am</h3>
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

                {/* Right Section */}
                <motion.div
                    variants={rightVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 gap-6 text-center"
                >
                    {/* Skill Icons */}
                    <div className="flex flex-col items-center">
                        <FaReact className="text-blue-500 text-5xl" />
                        <span className="mt-2 text-sm font-semibold">React</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaNodeJs className="text-blue-500 text-5xl" />
                        <span className="mt-2 text-sm font-semibold">NodeJs</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaJsSquare className="text-blue-500 text-5xl" />
                        <span className="mt-2 text-sm font-semibold">JsSquare</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaHtml5 className="text-blue-500 text-5xl" />
                        <span className="mt-2 text-sm font-semibold">Html5</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaCss3Alt className="text-blue-500 text-5xl" />
                        <span className="mt-2 text-sm font-semibold">CSS3</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaGitAlt className="text-blue-500 text-5xl" />
                        <span className="mt-2 text-sm font-semibold">Github</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaDatabase className="text-blue-500 text-5xl" />
                        <span className="mt-2 text-sm font-semibold">Databases</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaFigma className="text-blue-500 text-5xl" />
                        <span className="mt-2 text-sm font-semibold">Figma</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};





/*const About = () => (
    <section id="about" className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-600">About Me</h2>
            <p className="mt-4 text-gray-700">
                I'm a web developer passionate about creating modern, responsive web applications. I specialize in JavaScript, React, Node.js and more.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
                <div className="flex flex-col items-center">
                    <FaReact className="text-blue-500 text-4xl"/>
                    <span className="mt-2 text-sm font-semibold">React</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaNodeJs className="text-blue-500 text-4xl"/>
                    <span className="mt-2 text-sm font-semibold">NodeJs</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaHtml5 className="text-blue-500 text-4xl"/>
                    <span className="mt-2 text-sm font-semibold">Html5</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaCss3Alt className="text-blue-500 text-4xl"/>
                    <span className="mt-2 text-sm font-semibold">CSS3</span>
                </div>
            </div>
        </div>
    </section>

);*/


export default About;
