import { motion } from 'framer-motion';

const Hero = () => (
    <section className ="h-screen flex flex-col justif-center items-center bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
        <motion.h1
            initial = {{ opacity: 0, y: -50 }}
            animate = {{ opacity: 1, y: 0 }}
            transition ={{ duration: 0.5 }}
            className="text 5xl md:text-7xl font-bold"
            >
                Hi, I'm <span className="text-yellow-300">Chris</span>
            </motion.h1>
            <p className="mt-4 text-lg md:text-2xl">A Web Developer & Software Engineer</p>
            <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
                Contact Me
            </button>
    </section>
);

export default Hero;