import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="my-4 text-sm bg-black/20 p-2 rounded-md">
            <h1 className="font-semibold text-4xl text-center whitespace-nowrap select-none mb-4 mt-2">
                Hear about us!
            </h1>
            <p className="my-2 text-xs sm:text-sm p-2 rounded-md">
                My passion for the beauty industry started when I was 19 & received my first facial treatment. I thought
                'wow this is how I want to make people feel' and I have now been a fully qualified Beauty Therapist &
                working in the beauty industry for over 17 years.
                <br />
                <br />
                I love making people look & feel amazing. I love my job & consider myself a natural at what I do. My
                most common compliment is 'Magic hands' & 'best massage/facial ever', and my favorite massage compliment
                being 'incredible'.
                <br />
                <br />
                When clients describe my hands as 'magical' I absolutely love when people leave their eyebrows in my
                hands so I can work my magic as a brow artist, confident to work with both Male & female. I'm all for
                affordable treatments to all, so I am very pleased to be able to offer my treatments at home salon
                prices. I take the natural approach to skincare using only natural & organic products that give the best
                results and can be tailored to suit any skin type, perfect for those sensitive skin ranges. I have put
                my all into making my Beauty space as comfortable & peaceful & possible & can't wait to share with you
                the Tranquil experience that awaits you at Jo's Beauty BALM
            </p>
            <p className="text-center">
                Check out our{' '}
                <Link to={'/jo-demo-testing-ground/services'} className=" text-primary underline underline-offset-2">
                    Services here!
                </Link>
            </p>
        </div>
    );
}

export default About;
