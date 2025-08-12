import Image from "next/image";

const VerticalInfiniteSlider = ({title}) => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="relative h-full  overflow-hidden">
        <div className="flex w-full flex-col items-center gap-8 animate-scroll-y">
          {/* The image is duplicated to ensure a seamless loop */}
          <div className="flex flex-col items-center justify-between gap-6  px-8">
            <Image
              src="/assets/vission.svg"
              alt="Mission and Vision Slider"
              width={60} // Corresponds to w-48
              height={60} // The actual height of your image
              className="w-32 h-32"
              priority // Recommended for LCP images
            />
            <p className=" text-7xl font-extrabold -rotate-90 my-28  text-white/80 tracking-wider">
              {title}
            </p>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 px-8 ">
            <Image
              src="/assets/vission.svg"
              alt="Mission and Vision Slider"
              width={60} // Corresponds to w-48
              height={60} // The actual height of your image
              className="w-32 h-32"
              priority // Recommended for LCP images
            />
            <p className=" text-7xl font-extrabold -rotate-90 my-28  text-white/80 tracking-wider">
              {title}
            </p>
          </div>{" "}
          <div className="flex flex-col items-center justify-between gap-6 px-8 ">
            <Image
              src="/assets/vission.svg"
              alt="Mission and Vision Slider"
              width={60} // Corresponds to w-48
              height={60} // The actual height of your image
              className="w-32 h-32"
              priority // Recommended for LCP images
            />
            <p className=" text-7xl font-extrabold -rotate-90 my-28  text-white/80 tracking-wider">
              {title}
            </p>
          </div>{" "}
          <div className="flex flex-col items-center justify-between gap-6 px-8 ">
            <Image
              src="/assets/vission.svg"
              alt="Mission and Vision Slider"
              width={60} // Corresponds to w-48
              height={60} // The actual height of your image
              className="w-32 h-32"
              priority // Recommended for LCP images
            />
            <p className=" text-7xl font-extrabold -rotate-90 my-28  text-white/80 tracking-wider">
              {title}
            </p>
          </div>{" "}
          <div className="flex flex-col items-center justify-between gap-6 px-8 ">
            <Image
              src="/assets/vission.svg"
              alt="Mission and Vision Slider"
              width={60} // Corresponds to w-48
              height={60} // The actual height of your image
              className="w-32 h-32"
              priority // Recommended for LCP images
            />
            <p className=" text-7xl font-extrabold -rotate-90 my-28  text-white/80 tracking-wider">
              {title}
            </p>
          </div>{" "}
          <div className="flex flex-col items-center justify-between gap-6 px-8 ">
            <Image
              src="/assets/vission.svg"
              alt="Mission and Vision Slider"
              width={60} // Corresponds to w-48
              height={60} // The actual height of your image
              className="w-32 h-32"
              priority // Recommended for LCP images
            />
            <p className=" text-7xl font-extrabold -rotate-90 my-28  text-white/80 tracking-wider">
              {title}
            </p>
          </div>{" "}
          
       
       
        </div>
      </div>
    </div>
  );
};

export default VerticalInfiniteSlider;
