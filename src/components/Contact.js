import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez accéder aux données du formulaire via l'état formData
    console.log(formData);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
  };

  return (
    <motion.section 
      className='section py-16 lg:section bg-gray-900' // Ajout de la classe bg-gray-900 pour un fond sombre
      id='contact'
      variants={fadeIn} // Appliquer l'animation fadeIn au composant entier
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <div className="container mx-auto">
        <div>
          <h2 className='text-3xl font-semibold text-accent mb-6'>
            Me-Contactez
          </h2>
          <p className='text-lg text-gold mb-10'>
            Pour toute question ou demande de renseignements, n'hésitez pas à me contacter en utilisant le formulaire ci-dessous.
          </p>
        </div>
        <div>
          {isSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Merci pour votre message !</strong>
              <span className="block sm:inline"> Nous avons bien reçu votre message.</span>
              <button
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
                onClick={handleClose}
              >
                <svg className="fill-current h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <title>Close</title>
                  <path fillRule="evenodd" d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 111.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nom</label>
                  <input type="text" name="name" id="name" autoComplete="name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Adresse e-mail</label>
                  <input type="email" name="email" id="email" autoComplete="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                  <textarea id="message" name="message" rows="4" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange}></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <button type="submit" className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
