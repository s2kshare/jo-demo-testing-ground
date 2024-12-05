import { Link } from 'react-router-dom';
import ReviewItem from '../components/ReviewItem';
import reviews from '../data/ReviewList';

function Reviews() {
    console.log(reviews);
    return (
        <div className="my-4 text-sm bg-black/20 p-2 rounded-md">
            <h1 className="font-semibold text-4xl text-center whitespace-nowrap select-none my-5">
                Hear from out clients!
            </h1>
            <div className=" overflow-y-scroll max-h-96">
                {reviews.map((review, index) => {
                    return <ReviewItem key={index} review={review} />;
                })}
            </div>
            <p className=" my-2 text-xs text-center text-white/50">
                Don't find your review up?{' '}
                <Link to={'/jo-demo-testing-ground/contact'} className=" underline underline-offset-4 text-primary">
                    Contact us!
                </Link>
            </p>
        </div>
    );
}

export default Reviews;
