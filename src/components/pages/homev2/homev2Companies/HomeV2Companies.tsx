import React from 'react';
import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';
import Img from '../../../../assets/homev2/Img.png';
import aerrow from '../../../../assets/homev2/aerrow.png';
import composition1 from '../../../../assets/homev2/composition-1.svg';
import composition2 from '../../../../assets/homev2/composition-2.svg';
import composition3 from '../../../../assets/homev2/composition-3.svg';
import type { StaticImageData } from 'next/image';
import { bannerTextBottomInit, bannerTextBottomAnimation } from '../../../../utils/animation';

const imageData = [
  { src: composition1, title: 'Fast Progress', subtitle: 'Get audit-ready and archive compliance in weeks, not months.' },
  { src: composition2, title: 'Stay Current', subtitle: 'Stay current on the latest laws and regulations to mitigate legal, regulatory, and financial risk' },
  { src: composition3, title: 'Scale Compliance', subtitle: 'Scale compliance to your business and customize policies and tests to fit your unique needs' },
  { src: composition3, title: 'Scale Compliance', subtitle: 'Scale compliance to your business and customize policies and tests to fit your unique needs' },
  { src: composition1, title: 'Fast Progress', subtitle: 'Get audit-ready and archive compliance in weeks, not months.' },
  { src: composition2, title: 'Stay Current', subtitle: 'Stay current on the latest laws and regulations to mitigate legal, regulatory, and financial risk' },
  { src: composition1, title: 'Fast Progress', subtitle: 'Get audit-ready and archive compliance in weeks, not months.' },
  { src: composition2, title: 'Stay Current', subtitle: 'Stay current on the latest laws and regulations to mitigate legal, regulatory, and financial risk' },
  { src: composition3, title: 'Scale Compliance', subtitle: 'Scale compliance to your business and customize policies and tests to fit your unique needs' },
  { src: composition2, title: 'Stay Current', subtitle: 'Stay current on the latest laws and regulations to mitigate legal, regulatory, and financial risk' },
  { src: composition3, title: 'Scale Compliance', subtitle: 'Scale compliance to your business and customize policies and tests to fit your unique needs' },
  { src: composition1, title: 'Fast Progress', subtitle: 'Get audit-ready and archive compliance in weeks, not months.' },
];

type ImageCardProps = {
  image: {
    src: string | StaticImageData;
    title: string;
    subtitle: string;
  };
  index: number;
};

// Memoized Image Card Component
const ImageCard: React.FC<ImageCardProps> = React.memo(({ image, index }) => (
  <div className='w-[256px] transition-opacity duration-500 ease-in-out' key={index}>
    <Image
      width={256}
      height={234}
      src={image.src}
      alt={image.title}
      priority={index === 0}
      className='object-contain rounded-lg opacity-100 hover:opacity-90 transition-opacity duration-300'
    />
    <div className='flex justify-between align-middle items-center mt-2  text-[16px] font-semibold leading-[16px] text-[#40424B] font-poppins'>
      <h3>{image.title}</h3>
      <Image width={32} height={32} src={aerrow} alt='Arrow Icon' />
    </div>
    <p className=' text-[14px] font-normal leading-[22px] text-[#6F6F6F] font-poppins'>{image.subtitle}</p>
  </div>
));

const HomeV2Companies = () => {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3 for desktop

  // Dynamically set itemsPerPage based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) { // Mobile (sm breakpoint)
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3); // Desktop
      }
    };

    // Set initial value
    updateItemsPerPage();

    // Add resize listener
    window.addEventListener('resize', updateItemsPerPage);

    // Cleanup listener
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(imageData.length / itemsPerPage);

  const nextPage = () => {
    setPage((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
  };

  const prevPage = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, 2000);

    return () => clearInterval(interval);
  }, [totalPages]); // Depend on totalPages to reset interval if itemsPerPage changes

  const handleDotClick = (index: number) => {
    setPage(index);
  };

  // Memoized current images
  const currentImages = useMemo(() => {
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    return imageData.slice(start, end);
  }, [page, itemsPerPage]);

  // Debugging logs (remove in production)

  return (
    <div className='relative z-10 pb-0 md:pb-[120px] mt-14'>
      <div className='container px-4 md:px-[30px]'>
        <div className='max-w-[700px]'>
          <h3 className='text-sm text-[#40424B] font-poppins font-semibold mb-3'>PRODUCTS</h3>
          <h2 className='md:text-[36px] text-[32px]  font-semibold leading-[36px] md:leading-[52px] text-[#40424B] font-poppins'>
            End-to-End Compliance That Scales with Your Business
          </h2>
          <p className='text-sm md:text-[16px]  md:leading-[24px] max-w-[600px] mt-4 mb-8 font-normal  text-[#6F6F6F] font-poppins'>
            Fourth IT automation platform helps you ensure security and privacy compliance at every stage of growth, providing a scalable solution tailored to your business needs.
          </p>
        </div>

        <div className='flex w-full justify-center md:justify-end'>
          <div className='flex items-center mt-10 flex-col'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8'>
              {currentImages.length > 0 ? ( 
                currentImages.map((image, index) => (
                  <ImageCard image={image} index={page * itemsPerPage + index} />
                ))
              ) : (
                <p>No images available</p>
              )}
            </div>

            <div className='w-full flex justify-center md:justify-start mt-10 space-x-2'>
              {Array.from({ length: totalPages }, (_, i) => i).slice(
                Math.max(0, Math.min(page - 2, totalPages - 5)), // Start index
                Math.max(5, Math.min(page + 3, totalPages)) // End index
              ).map((i) => (
                <div
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`cursor-pointer h-2 flex-shrink-0 ${
                    page === i ? 'w-[60px] bg-[#FF4D4F]' : 'bg-gray-300 w-[30px]'
                  } rounded-tl-[10px] rounded-br-[10px] transition-all duration-300`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeV2Companies;