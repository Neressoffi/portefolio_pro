import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// Importation  les d'images
import HTML5Icon from '../assets/html5-icon.png';
import CSS3Icon from '../assets/css3-icon.png';
import JavaScriptIcon from '../assets/javascript-icon.png';

const skills = [
  {
    name: 'HTML5',
    description: 'Connaissances balises sémantiques et des principes de structuration des pages web.',
    icon: HTML5Icon,
    link: 'En savoir plus',
  },
  {
    name: 'CSS3',
    description: 'Compétences  en stylisation et mise en forme de pages web avec CSS et les préprocesseurs comme Sass ou Less.',
    icon: CSS3Icon,
    link: 'En savoir plus',
  },
  {
    name: 'JavaScript',
    description: 'Connaissances en concepts fondamentaux de JavaScript ainsi que des frameworks modernes comme React, Angular ou Vue.js.',
    icon: JavaScriptIcon,
    link: 'En savoir plus',
  },
  // Ajoutez d'images
];

const Skills = () => {
  return (
    <motion.section 
      className='section'
      id='Skills'
      variants={fadeIn('left', 0.5)} 
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
    >
      <style>{`
        .skill-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .skill-icon:hover {
          transform: scale(1.1);
        }
      `}</style>
      
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1'>
            <h2 className='h2 text-accent mb-6'>Compétences</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Je possède une variété de compétences en développement web et d'applications mobiles.
            </h3>
            <button className='btn btn-sm'>Voir mes projets</button>
          </div>
          <div className='flex-1'>
            {skills.map((skill, index) => {
              const { name, description, icon, link } = skill;
              return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <div className="flex items-center mb-4">
                      <div className="mr-4"><img src={icon} alt={name} className="skill-icon" /></div>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold'>{name}</h4>
                    </div>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className='text-gradient text-sm'>{link}</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
