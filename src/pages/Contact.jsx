import { useRef } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Contact() {
    const username = useRef();
    const email = useRef();
    const message = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value);
        console.log(email.current.value);
        console.log(message.current.value);
    };

    return (
        <div className="my-4 text-sm bg-black/20 p-2 rounded-md">
            {/* Title */}
            <h1 className="font-semibold text-4xl text-center whitespace-nowrap select-none my-5">
                Get in touch with us!
            </h1>
            {/* Form */}
            <div className=" *:text-black">
                <div className="btn bg-gray-200 border-gray-200 w-full">
                    <a
                        href={'mailto:josbeautybalm@gmail.com'}
                        className=" whitespace-nowrap flex gap-1 items-center"
                        target="_blank"
                    >
                        Contact us through Email <IoMdMail size={18} />
                    </a>
                </div>
                <div className="divider"></div>
                <div className="btn bg-blue-500 border-blue-500 w-full">
                    <Link
                        to={'https://www.facebook.com/josbeautybalm'}
                        className=" whitespace-nowrap flex gap-1 items-center"
                        target="_blank"
                    >
                        Contact us on Facebook <FaFacebook size={18} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Contact;
