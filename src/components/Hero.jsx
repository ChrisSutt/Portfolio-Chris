import { motion } from 'framer-motion';
import '../styles/hero.css'


const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };
    const itemVariants ={
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section 
            id="hero" 
            className="bg-animated text-white flex flex-col items-center justify-center h-screen"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >

            <motion.h1
                variants={itemVariants}
                className="text-4xl font-bold text-center"
            >
                Hi, I'm <span className="text-yellow-300">Chris</span>
            </motion.h1>

            <motion.p
                variants={itemVariants}
                className="mt-4 text-lg text-center"
            >
                A Web Developer | Software Engineer
            </motion.p>

            {/* <motion.button
                variants={itemVariants}
                whileHover= {{ scale: 1.1 }}
                whileTap= {{ scale: 0.9 }}
                className="mt-10 px-6 py-3 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-500 border"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth'})
            }
            >
                Contact Me
            </motion.button> */}
        </motion.section>
    );
};

/* const Hero = () => (
    <section id="hero" className ="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-32 flex flex-col justify-center items-center h-screen">
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
);*/ 

export default Hero;