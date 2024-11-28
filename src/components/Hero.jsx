import { motion } from 'framer-motion';

const Hero = () => (
    <section id="hero" className ="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-32 flex flex-col items-center">
        <motion.h1
            initial = {{ opacity: 0, y: -20 }}
            animate = {{ opacity: 1, y: 0 }}
            transition ={{ duration: 0.8 }}
            className="text-4xl font-bold"
            >
                Hi, I'm <span className="text-yellow-300">Not Chris</span>
            </motion.h1>
            <p className="mt-4 text-lg">A Web Developer | Software Engineer</p>
        <motion.botton 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="mt-10 px-6 py-3 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-500 border"
            onClick-={() => 
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }
        >
            Contact Me 
        </motion.botton>
    </section>
);

export default Hero;