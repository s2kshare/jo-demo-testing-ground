import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
    const childVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
    };

    return (
        <div className="my-4 text-sm bg-black/20 p-2 rounded-md">
            <img src="/jo-demo-testing-ground/logo-white.png" alt="logo" className="w-24 h-24 mx-auto" />
            <motion.h1
                variants={childVariants}
                className="title my-5 font-semibold text-5xl text-center md:text-7xl lg:text-9xl whitespace-nowrap select-none"
            >
                Jo's Beauty BALM
            </motion.h1>
            <motion.p variants={childVariants} className="my-4 select-none">
                We are a beauty salon that provides a range of services to help you look and feel your best.
            </motion.p>
            <div className="flex gap-1 w-full">
                {/* Fixed Link */}
                <motion.div variants={childVariants} className="flex-1">
                    <Link to="/services" className="btn btn-primary w-full">
                        Check Out Our Services!
                    </Link>
                </motion.div>

                {/* Fixed Navigate Button */}
                <Link to={'/jo-demo-testing-ground/contact'} className="btn flex-1 btn-primary btn-outline">
                    Contact Us!
                </Link>
            </div>
        </div>
    );
}

export default Home;
