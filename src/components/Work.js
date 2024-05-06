import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Projet 1 */}
       <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Projet 1 */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500 w-full h-auto' src={Img1} alt='Projet 1' />
            <div className='absolute-bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Mobile Design</span>
              <a href="https://github.com/Neressoffi/devpwa" className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-500 z-50">
                <span className='text-3xl text-white'>Progressive App</span>
              </a>
            </div>
          </div>
          {/* Projet 2 */}
           <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500 w-full h-auto' src={Img2} alt='Projet 2' />
            <div className='absolute-bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Web Design</span>
            </div>
            <a href="https://github.com/Neressoffi/Crud-product" className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-500 z-50'>
              <span className='text-3xl text-white'>React App</span>
            </a>
          </div>
          {/* Projet 3 */}
           <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500 w-full h-auto' src={Img3} alt='Projet 3' />
            <div className='absolute-bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Design</span>
            </div>
            <a href="https://github.com/Neressoffi/wireframe_tp" className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-500 z-50">
              <span className='text-3xl text-white'>Tailwind CSS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
