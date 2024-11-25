import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const About = () => (
    <section className="about">
        <h2>About Me</h2>
        <p> I specialize in building fast, modern web applications.</p>
        <div classname="skills">
            <FaReact size ={40} />
            <FaNodeJs size ={40} />
            <FaHtml5 size ={40} />
            <FaCss3Alt size={40} />
        </div>
    </section>
);

export default About;
