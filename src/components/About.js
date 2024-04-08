import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image from '../assets/avatar.jpg'; 

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Contenu gauche */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* Contenu droit */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <div className="p-6">
              <h2 className='h2 text-accent'>À propos de moi</h2>
              <h3 className='h3 mb-4'>Développeur Web et Mobile en Apprentissage</h3>
              <p className='md-6'>
                Je suis actuellement en apprentissage dans le domaine du développement web et mobile. Passionné par la création d'applications et de sites web, j'apprends activement les compétences nécessaires pour réussir dans ce domaine passionnant et en constante évolution.
              </p>
              <div className='mb-4'>
                <div className='font-primary text-sm tracking-[2px]'>
                  <h4 className='font-bold text-lg'>Expériences Professionnelles :</h4>
                  <ul className='list-disc pl-8'>
                    <li>
                      <strong>Webmaster Intégrateur Web (stage)</strong><br />
                      Entreprise : DEKRA INDUSTRIAL Paris/La Boursidière<br />
                      
                    </li>
                    <br />
                    <li>
                      <strong>Développeur Web (stage)</strong><br />
                      Entreprise : CCESI AGENCE DE NANTES<br />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* */}
      <style>
        {`
          .bg-about {
            border-radius: 20px; 
            overflow: hidden;
          }
        `}
      </style>
    </section>
  );
};

export default About;
