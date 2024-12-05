import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageFlex from './components/PageFlex/PageFlex';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

function App() {
    const routes = [
        {
            path: '/',
            label: 'Home',
            color: 'red',
            content: <Home />,
            hint: 'Return to the homepage',
            image: './home.jpg',
            imageOrigin: 'bottom',
        },
        {
            path: '/about',
            label: 'About',
            color: 'green',
            content: <About />,
            hint: 'Read About Us!',
            image: './what.jpg',
            imageOrigin: 'center',
        },
        {
            path: '/services',
            label: 'Services',
            color: 'cyan',
            content: <Services />,
            hint: 'Checkout our amazing services here!',
            image: './services.jpg',
            imageOrigin: 'center',
        },
        {
            path: '/reviews',
            label: 'Reviews',
            color: 'orange',
            content: <Reviews />,
            hint: 'See what others are saying about us!',
            image: './reviews.jpg',
            imageOrigin: 'left',
        },
        {
            path: '/contact',
            label: 'Contact!',
            color: 'purple',
            content: <Contact />,
            hint: 'Get in contact with us!',
            image: './contactus.jpg',
            imageOrigin: 'center',
        },
    ];

    return (
        <div data-theme="lemonade" className="  bg-base-200 flex h-[100vh] flex-col mx-0 pb-0  lg:pb-8">
            <Navbar />
            <div className="lg:mx-8 h-full lg:rounded-3xl mx-0 rounded-none transition-all overflow-hidden">
                <PageFlex routes={routes} />
            </div>
        </div>
    );
}

export default function Root() {
    return (
        <Routes>
            <Route path="*" element={<App />} />
        </Routes>
    );
}
