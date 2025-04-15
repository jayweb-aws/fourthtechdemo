import TestimonialHero from './TestimonialHero/TestimonialHero';
import TestimonialReview from './TestimonialReview/TestimonialReview';
import TestimonialVideos from './TestimonialVideos/TestimonialVideos';
import TestimonialSimple from './TestimonialSimple/TestimonialSimple';
import HomeV2Companies from '../homev2/homev2Companies/HomeV2Companies';

const TestimonialV2 = () => {
    return (
        <>
            <TestimonialHero />
            {/* <HomeV2Companies /> */}
            <TestimonialSimple />
            <TestimonialVideos />
            {/* <TestimonialReview /> */}
        </>
    );
};

export default TestimonialV2;