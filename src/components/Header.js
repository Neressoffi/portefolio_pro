import React from 'react';
import Logo from '../assets/logo.jpeg';

const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} alt='' /> {/*....*/}
          </a>
          {}
          <button className='btn btn-sm'>Collaborez avec moi</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
