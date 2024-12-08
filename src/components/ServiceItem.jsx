function ServiceItem({ service }) {
    // Function to handle newlines in description
    const formatDescription = (text) => {
        return text.split('\n\n').map((line, index) => (
            <span key={index}>
                {line}
                <br />
                <br />
            </span>
        ));
    };

    return (
        <div className=" *:text-sm my-4 mx-2 text-sm bg-black/20 p-2 rounded-md hover:bg-white/25 hover:cursor-pointer transition-colors">
            <h1 className=" text-xl font-semibold mb-2 text-center">{service.name}</h1>
            <p>{service.description && formatDescription(service.description)}</p>
            {service.duration === true ? (
                <>
                    <div className="overflow-x-auto w-full">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className=" text-white">
                                    <th>{service.subs[0].treatment ? 'Treatment' : 'Duration'}</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {service.subs != null &&
                                    service.subs.map((sub, index) => (
                                        <tr
                                            key={index}
                                            className=" w-full hover:bg-white/25 hover:text-black transition-all hover:cursor-pointer "
                                        >
                                            <td>{sub.description}</td>
                                            <td>${sub.price}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <>
                    <p className=" mt-5 text-end">
                        <span className=" font-semibold text-xl ">${service.price}</span>
                    </p>
                </>
            )}
        </div>
    );
}

export default ServiceItem;
