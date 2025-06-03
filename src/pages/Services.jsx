import { IoMail } from 'react-icons/io5';
import ServiceItem from '../components/ServiceItem';
import services from '../data/ServiceList';
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div className="my-4 text-sm bg-black/20 p-2 rounded-md lg:mx-16">
            <h1 className="font-semibold text-4xl text-center my-3 whitespace-nowrap select-none">
                Services we provide!
            </h1>
            <div className="overflow-y-scroll max-h-96">
                {services.map((service, index) => {
                    return <ServiceItem key={index} service={service} />;
                })}
            </div>
            <Link to={'/contact'} className="btn btn-primary w-full">
                Contact us about our Services <IoMail size={18} />
            </Link>
        </div>
    );
}

export default Services;
