import { animate, motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const logoRef = useRef(null); // For the logo scaling
    const textRefs = useRef([]); // Array of refs for each `motion.p`

    const handleLogoHoverStart = () => {
        if (logoRef.current) {
            animate(logoRef.current, { scale: 1.2 }, { duration: 0.3, ease: 'easeInOut' });
        }

        // Animate textRefs to full white
        textRefs.current.forEach((ref) => {
            if (ref) {
                animate(ref, { color: '#ffffff' }, { duration: 0.3, ease: 'easeInOut' });
            }
        });
    };

    const handleLogoHoverEnd = () => {
        if (logoRef.current) {
            animate(logoRef.current, { scale: 1 }, { duration: 0.3, ease: 'easeInOut' });
        }

        // Reset textRefs color
        textRefs.current.forEach((ref) => {
            if (ref) {
                animate(ref, { color: 'rgba(255, 255, 255, 0.25)' }, { duration: 0.3, ease: 'easeInOut' });
            }
        });
    };

    return (
        <motion.div
            onHoverStart={handleLogoHoverStart}
            onHoverEnd={handleLogoHoverEnd}
            className="my-4 text-sm bg-black/20 p-2 rounded-md"
        >
            <img src="/logo-white.png" alt="logo" ref={logoRef} className="w-24 h-24 mx-auto" />
            <motion.div className="text-white/25 text-xs gap-1 justify-between flex flex-row">
                {['Beautiful Facials', 'Amazing Massage', 'Lashes & Brows', 'Magic Hands'].map((text, index) => (
                    <motion.p
                        key={index}
                        ref={(el) => (textRefs.current[index] = el)}
                        initial={{ opacity: 0, y: -25 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.3, delay: 0.3 * index, ease: 'easeInOut' },
                        }}
                    >
                        {text}
                    </motion.p>
                ))}
            </motion.div>
            <motion.p className="my-4 select-none text-xs text-center sm:text-sm">
                A home based beauty therapy salon that offers affordable treatments using natural & organic skincare.
                With 20 years of experience, I specialize in brow artistry, natural facials & relaxation massage that
                transports your mind to a place of bliss. I strive to provide a comfortable & peaceful experience for
                all my customers.
            </motion.p>
            <div className="flex gap-1 w-full">
                <motion.div className="flex-1">
                    <Link to="/services" className="btn btn-primary w-full text-xs sm:text-sm">
                        Check Out Our Services!
                    </Link>
                </motion.div>
                <Link to="/contact" className="btn flex-1 btn-primary btn-outline text-xs sm:text-sm">
                    Contact Us!
                </Link>
            </div>
        </motion.div>
    );
}

export default Home;
