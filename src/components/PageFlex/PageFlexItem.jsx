import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function PageFlexItem({ route, index, activePath, setActivePath, navigate }) {
    const isActive = activePath === route.path;
    const [isHover, setIsHover] = useState(false);
    const itemRef = useRef();

    const handleNavigation = () => {
        if (!isActive) {
            setActivePath(route.path); // Update the active path
            navigate(route.path); // Navigate to the new route
        }
    };

    return (
        <motion.div
            layout
            ref={itemRef}
            style={{
                backgroundColor: route.color,
                backgroundImage: `url(${route.image})`,
                backgroundSize: 'cover',
                backgroundPosition: `${route.imageOrigin}`,
            }}
            className={`${
                isActive ? 'flex-12 items-start' : 'hover:flex-2 hover:cursor-pointer flex-1 items-start'
            } flex flex-col transition-all ease-in-out duration-300 delay-75 relative overflow-hidden`}
            key={`pageflex-${index}`}
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            onClick={handleNavigation}
        >
            {/* Black Backdrop */}
            {isActive && (
                <div className="transition-all bg-gradient-to-t z-0 from-black/75 to-transparent w-full h-1/2 left-0 bottom-0 absolute" />
            )}

            {!isActive && (
                <div className="transition-all bg-gradient-to-t z-0 from-black/50 to-transparent w-full h-1/2 left-0 bottom-0 absolute" />
            )}

            {/* Inactive Blur Backdrop */}
            {!isActive && (
                <div className="z-[0] backdrop absolute bottom-0 w-full h-full left-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-gradient-to-t from-transparent transition-all"></div>
            )}
            {/* Active Blur Backdrop */}
            {isActive && (
                <div className="z-[0] backdrop absolute bottom-0 w-full h-full left-0 bg-clip-padding backdrop-filter backdrop-blur-sm transition-all"></div>
            )}

            {/* Page Activation Content */}
            <div className="z-[1] flex flex-col h-full w-full justify-center pb-2">
                {/* Label */}
                <AnimatePresence>
                    <motion.div
                        key={`label-${index}`}
                        className={`${
                            isActive ? 'text-2xl p-5 font-semibold' : 'my-5 mx-3 whitespace-nowrap font-medium'
                        } flex-1 text-white`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {route.label}
                    </motion.div>
                </AnimatePresence>

                {/* Hovering Hint */}
                <AnimatePresence>
                    {isHover && !isActive && (
                        <motion.p
                            key={`hint-${index}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 50, transition: { delay: 0.2 } }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-white/55 text-center"
                        >
                            {route.hint}
                        </motion.p>
                    )}
                </AnimatePresence>

                {/* Active Content */}
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            key={`content-${index}`}
                            className="text-white md:p-10 rounded-2xl px-5"
                            initial={{ opacity: 0, y: 250 }}
                            animate={{ opacity: 1, y: -5 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ ease: 'easeInOut', duration: 0.5 }}
                        >
                            <div className="z-50 flex items-center justify-center">{route.content}</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default PageFlexItem;
