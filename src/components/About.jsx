import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const About = () => (
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

);


export default About;
