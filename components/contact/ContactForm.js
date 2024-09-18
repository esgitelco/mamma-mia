"use client"

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-secondary p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-heading text-center">Nous contacter</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-lg font-medium text-text">
            Nom complet
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-2 border border-alice  text-text rounded-md shadow-sm focus:ring-accent focus:border-primary"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-text">
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-2 border border-alice  text-text rounded-md shadow-sm focus:ring-accent focus:border-primary"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNumber" className="block text-lg font-medium text-text">
            Numéro de téléphone
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-2 border border-alice  text-text rounded-md shadow-sm focus:ring-accent focus:border-primary"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-text">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
            className="mt-2 block w-full px-4 py-2 border border-alice  text-text rounded-md shadow-sm focus:ring-accent focus:border-primary"
            placeholder="Écrivez votre message ici..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
