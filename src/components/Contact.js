import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='section py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <motion.div variants={fadeIn}>
          <div>
            <h2 className='text-3xl font-semibold text-accent mb-6'>
              Me-Contactez
            </h2>
            <p className='text-lg text-gray-600 mb-10'>
              Pour toute question ou demande de renseignements, n'hésitez pas à nous contacter en utilisant le formulaire ci-dessous.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeIn}>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nom</label>
                <input type="text" name="name" id="name" autoComplete="name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Adresse e-mail</label>
                <input type="email" name="email" id="email" autoComplete="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button type="submit" className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
