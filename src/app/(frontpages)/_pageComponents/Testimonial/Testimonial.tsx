import Image from "next/image";
import { FC } from "react";
import tw from "tailwind-styled-components";
import Typography from "../Typography/Typography";

interface TestimonialProp {
    review: string | Array<string>;
    author: string;
    rating: number;
}

const Testimonial: FC<TestimonialProp> = function({
    review,
    author,
    rating
}){

    const TestimonialWrapper = tw.div`
        flex flex-col gap-1
        py-12 px-6
        rounded-3xl
        border-[2px] border-textColor-100
        skew-x-[-5deg]
        w-1/3	
    `;

    const RatingWrapper = tw.div`
        flex gap-2
    `;

    const ratingElem = [];

     

    for(let i = 1; i<= 5; i++ ) {
        if(i <= rating) {
            ratingElem.push(<Image key={i} src={'/solid-star.png'} alt="Star" width={20} height={20} />)
        } else {
            ratingElem.push(<Image key={i} src={'/outline-star.png'} alt="Star" width={20} height={20} />);
        }        
    }

    return <TestimonialWrapper>
        {Array.isArray(review) ? review.map((line: string, index: number) => (
            <Typography variant="h6" fontFamily="Jura" content={line} className="mb-4" key={index}/>
        )) :
            <Typography variant="h6" fontFamily="Jura" content={review} className="mb-4"/>
        }
        <Typography variant="h5" fontFamily="Jura" className="dark:text-textColor-100 text-primary font-semibold" content={author} />
        <RatingWrapper>
            { ratingElem }
        </RatingWrapper>
    </TestimonialWrapper>

}

export default Testimonial