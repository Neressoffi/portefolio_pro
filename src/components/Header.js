import React from 'react';
import Logo from '../assets/logo.jpeg';
import CV from '../assets/cv.pdf';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = CV;
  link.download = 'mon_cv.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href='#'>
            <div className='' style={{ borderRadius: '9999px' }}>
              <img src={Logo} alt='' style={{ borderRadius: '9999px' }} />
            </div>
          </a>
          <button className='btn btn-sm' onClick={downloadCV}>Télécharger mon CV</button>
          <div className="flex text-[20px] gap-x-6">
           
            <a href="https://github.com/Neressoffi" style={styles.iconLink}>
              <FaGithub />
            </a>
           
            <a href="https://www.linkedin.com/in/ariel-ngoualem/" style={styles.iconLink}>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const styles = {
  iconLink: {
    color: '#4a5568', 
    backgroundColor: '#f0f4f8', 
    padding: '10px', 
    borderRadius: '50%', 
    transition: 'background-color 0.3s ease, color 0.3s ease', 
  },
};

