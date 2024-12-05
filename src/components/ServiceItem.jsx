function ServiceItem({ service }) {
    return (
        <div className=" *:text-sm my-4 mx-2 text-sm bg-black/20 p-2 rounded-md hover:bg-white/25 hover:cursor-pointer transition-colors">
            <h1 className=" text-xl font-semibold mb-2 text-center">{service.name}</h1>
            <p>{service.description}</p>
            {service.duration == true ? (
                <>
                    <div className="overflow-x-auto w-full">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className=" text-white">
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {service.subs != null &&
                                    service.subs.map((sub, index) => {
                                        return (
                                            <tr
                                                key={index}
                                                className=" w-full hover:bg-white/25 hover:text-black transition-all hover:cursor-pointer "
                                            >
                                                <td>{sub.description}</td>
                                                <td>${sub.price}</td>
                                            </tr>
                                        );
                                    })}
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
