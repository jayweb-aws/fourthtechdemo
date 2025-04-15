import { useState, useRef } from 'react';


const TestimonialVideoGrid = () => {
    const [playVideo, setPlayVideo] = useState<{ [key: number]: boolean }>({});
    const videoRefs = useRef<HTMLVideoElement[] | null[]>([]);

    const handlePlay = (index: number) => {
        videoRefs.current[index]?.play();
        setPlayVideo(prevState => ({ ...prevState, [index]: true }));
    };

    const videos: string[] = [
        "https://res.cloudinary.com/codespan/video/upload/v1695032075/WhatsApp_Video_2023-09-18_at_13.14.53_wn6j6w.mp4",
        "https://res.cloudinary.com/codespan/video/upload/v1695032075/WhatsApp_Video_2023-09-18_at_13.14.53_wn6j6w.mp4"
    ];
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[40px]'>
                {videos.map((videoUrl, index) => (
                    <div className='relative mb-[40px] sm:mb-0' key={index}>
                        <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            controls
                            playsInline
                            autoPlay={playVideo[index]}
                        >
                            <source type='video/mp4' src={videoUrl} />
                        </video>
                        {/* {!playVideo[index] && (
                            <div
                                onClick={() => handlePlay(index)}
                                className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 inline-block cursor-pointer'
                            >
                                <Image src={playIcon} alt='play icon' />
                            </div>
                        )} */}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 sm:mt-[50px]">
                <div></div>
                <div className='relative col-span-2 mx-auto'>
                    <video
                        controls
                        playsInline
                    >
                        <source type='video/mp4' src={"https://res.cloudinary.com/codespan/video/upload/v1695032075/WhatsApp_Video_2023-09-18_at_13.14.53_wn6j6w.mp4"} />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default TestimonialVideoGrid;