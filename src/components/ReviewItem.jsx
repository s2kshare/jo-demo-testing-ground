function ReviewItem({ review }) {
    return (
        <div className="my-4 mx-2 text-sm bg-black/20 p-2 rounded-md">
            <h1>{review.name}</h1>
            <div className="rating rating-sm">
                <input name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input name="rating-6" className="mask mask-star-2 bg-orange-400" />
            </div>
            <p>{review.message}</p>
        </div>
    );
}

export default ReviewItem;
