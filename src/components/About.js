import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
 return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Contenu */}
          <motion.div
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.3}}
           className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
            {/* Contenu */}
            <motion.div
             variants={fadeIn('left',0.5)}
             initial='hidden'
             whileInView={'show'}
             viewport={{  once: false, amount:0.3}}
              className='flex-1'></motion.div>
              <h2 className='h2 text-accent'>À propos de moi</h2>
              <h3 className='h3 mb-4'>
                Je suis développeur web junior en apprentissage</h3>
            </div>
            <p className='md-6'>
            actuellement en apprentissage. Je suis passionné par la création de sites web et j'apprends activement les compétences nécessaires pour réussir dans ce domaine excitant et en constante évolution.
            </p>
            <div>
              <div className='test-[40px] front-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={13} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Années d'expériences <br />
                Expérience
              </div>
            </div>
          </div>
          <div>
            {/* Contenu */}
            <div className='test-[40px] front-tertiary text-gradient mb-2'>
              {inView ? <CountUp start={0} end={13} duration={3} /> : null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Années d'expériences <br />
              Expérience
            </div>
          </div>
        
    
    </section>
  );
};

export default About;
