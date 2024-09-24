import React from "react";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { Vortex } from "./components/ui/vortex";

const HomePage = () => {
  return (
    <div className='dark:bg-black bg-black min-h-screen overflow-x-hidden'>
      <Vortex
        backgroundColor='black'
        className='flex items-center flex-col justify-center px-2 md:px-10 w-full h-full mt-0 md:mt-56'
      >
        <h2 className='text-white text-2xl md:text-6xl font-bold text-center'>
          The hell is this?
        </h2>
        <p className='text-white text-sm md:text-2xl max-w-xl mt-6 text-center'>
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
          <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]'>
            Order now
          </button>
          <button className='px-4 py-2  text-white '>Watch trailer</button>
        </div>
      </Vortex>
      <ContainerScroll titleComponent='Welcome to Vite'>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <h1 className='text-4xl font-bold'>Vite</h1>
          <p className='text-lg text-center'>
            A simple and fast React framework
          </p>
        </div>
      </ContainerScroll>
    </div>
  );
};

export default HomePage;
