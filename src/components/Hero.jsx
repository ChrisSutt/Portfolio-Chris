import { motion } from 'framer-motion';

const Hero = () => (
    <section className ="hero">
        <motion.h1
            initial = {{ opacity: 0, y: -50 }}
            animate = {{ opacity: 1, y: 0 }}
            transition ={{ duration: 0.5 }}
            >
                Hi, I'm <span>Chris</span>
            </motion.h1>
            <p>A Web Developer & Software Engineer</p>
            <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
                Contact Me
            </button>
    </section>
);

export default Hero;