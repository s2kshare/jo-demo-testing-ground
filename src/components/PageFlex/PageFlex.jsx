import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PageFlexItem from './PageFlexItem';

function PageFlex({ routes }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    // Sync activePath with the current location pathname
    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    return (
        <div className="w-full h-full">
            <div className="flex flex-col md:flex-row w-full h-full rounded-2xl">
                <AnimatePresence>
                    {/* Each page element */}
                    {routes.map((route, index) => (
                        <PageFlexItem
                            key={index}
                            route={route}
                            activePath={activePath}
                            setActivePath={setActivePath}
                            navigate={navigate}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default PageFlex;
