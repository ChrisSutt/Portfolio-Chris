import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const About = () => (
    <section className="py-20 bg-gray-100" id="about">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className ="text-lg mb-8 max-w-2xl mx-auto">
                I specialize in building fast, modern web applications. My Expertise spans from front-end to back-end technologies to deliver seamless user experiences
            </p>
        <div className="flex justify-center gap-10">
            <div className="text-center">
                <FaReact size={40} className="text-blue-500 mx-auto mb-2" />
                <p className="text-sm font-semibold">React</p>
            </div>
            <div className="text-center">
                <FaNodeJs size={40} className="text-blue-500 mx-auto mb-2" />
                <p className="text-sm font-semibold">NodeJS</p>
            </div>
            <div className="text-center">
                <FaHtml5 size={40} className="text-blue-500 mx-auto mb-2" />
                <p className="text-sm font-semibold">Html5</p>
            </div>
            <div className="text-center">
                <FaCss3Alt size={40} className="text-blue-500 mx-auto mb-2" />
                <p className="text-sm font-semibold">CSS3</p>
            </div>
        </div>
    </div>
</section>
);


export default About;
