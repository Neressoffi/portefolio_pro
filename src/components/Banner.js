import React from 'react';
import Image from '../assets/avatar.jpg';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={{ show: { opacity: 1 } }}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              Ariel<span> Ngoualem </span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={{ show: { opacity: 1 } }}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[48px]'>
              <span className='mr-4'>Je suis un</span>
              <TypeAnimation
                sequence={['Développeur', 200, 'Désigner', 200, 'Intégrateur']}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vero! Adipisci, ipsam nihil aspernatur maiores reiciendis earum esse facere recusandae deserunt saepe, quis impedit suscipit aliquid autem rem repudiandae neque!
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contacter moi</button>
              <a href='' className='text-gradient btn-link'>Mon portefolio</a>
            </div>
            <div className='flex text-[20px] gap-x-6 max-w-max  lg:mx-0'>
              <a href="#" className="text-gray-800">
                <FaYoutube />
              </a>
              <a href="#" className="text-gray-800">
                <FaGithub />
              </a>
              <a href="#" className="text-gray-800">
                <FaDribbble />
              </a>
            </div>
            <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
              <img src={Image} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
