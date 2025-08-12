import Image from 'next/image';

const VerticalInfiniteSlider = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
  
      <div className="relative h-full w-48 overflow-hidden">
      
        <div className="flex w-full flex-col animate-scroll-y">
          {/* The image is duplicated to ensure a seamless loop */}
          <Image
            src="/assets/vission.webp"
            alt="Mission and Vision Slider"
            width={192} // Corresponds to w-48
            height={1164} // The actual height of your image
            className="w-full"
            priority // Recommended for LCP images
          />
          <Image
            src="/assets/vission.webp"
            alt="Mission and Vision Slider"
            width={192} // Corresponds to w-48
            height={1164} // The actual height of your image
            className="w-full"
            aria-hidden="true" // Hide the decorative duplicate from screen readers
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalInfiniteSlider;