import { IoMail } from 'react-icons/io5';
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className=" navbar bg-base-200 ">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl text-black">Jo's Beauty BALM</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <img src="./logo-black.png" alt="logo" className="w-10 h-10" />
            </div>
            <div className="navbar-end gap-1">
                <Link to={'/jo-demo-testing-ground/'} className="btn" alt="Email Us!">
                    <IoHome size={25} alt="Email Us!" /> <span className=" hidden sm:flex">Home</span>
                </Link>
                <Link to={'/jo-demo-testing-ground/contact'} className="btn btn-primary" alt="Email Us!">
                    <IoMail size={25} alt="Email Us!" /> <span className=" hidden sm:flex">Contact Us!</span>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
