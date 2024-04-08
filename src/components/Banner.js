import React from 'react';
import Image from '../assets/avatar.jpg';
import { FaGithub, FaYoutube, FaDribbble, FaLinkedin } from 'react-icons/fa'; 
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              Ariel<span> Ngoualem</span> {/* Ajoutez un espace après "Ngoualem" */}
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[48px]'>
              <span className='mr-4'>Je suis un</span>
              <div className="text-accent">
                <TypeAnimation
                  sequence={[
                    'Développeur',
                    2000,
                    'Désigner',
                    2000,
                    'Intégrateur'
                  ]}
                  speed={50}
                  wrapper='span'
                  repeat={Infinity}
                />
              </div>
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              animate='show'
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Bienvenue sur mon portfolio ! Je suis ravi de vous accueillir en tant que développeur web mobile en apprentissage. Chaque ligne de code représente un pas de plus dans ma quête d'excellence et d'innovation. Je suis passionné par la création d'applications mobiles intuitives et performantes, et je suis déterminé à explorer les dernières technologies pour offrir des expériences utilisateur exceptionnelles.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              animate='show'
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
             
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial='hidden'
            animate='show'
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] relative'>
            <div style={{ borderRadius: '25%', overflow: 'hidden' }} className='bg-white w-full h-full'>
              <img src={Image} alt='' className='w-full h-full object-cover' />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
