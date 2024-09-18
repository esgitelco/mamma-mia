"use client";

import { submitReservationForm } from "@/utils/submitReservation";
// import { createClient } from "@/utils/supabase/components";
import { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    table: "",
    time: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const submitForm = async () => {
  //   const supabase = createClient();

  //   const { data, error } = await supabase
  //     .from("reservation")
  //     .insert([
  //       {
  //         name: formData.fullName,
  //         email: formData.email,
  //         phone: formData.phoneNumber,
  //         table: formData.table,
  //         comment: formData.comment,
  //       },
  //     ]);

  //     if (error) {
  //       console.error('Error submitting reservation form!', error);
  //       return;
  //   }

  //   console.log('Reservation submitted successfully!', data);
  // };

  const handleSubmit = async () => {
    // e.preventDefault();
    console.log(formData);
    await submitReservationForm(
      formData.fullName,
      formData.email,
      formData.phoneNumber,
      formData.table,
      formData.time,
      formData.comment
    );
  };

  return (
    <section className="bg-secondary p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto my-14">
      <h2 className="text-3xl font-semibold mb-6 text-center text-heading">
        Réservez votre table
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-lg font-medium text-paragraph"
          >
            Nom complet
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-2 border border-alice  text-text rounded-md shadow-sm focus:ring-accent focus:border-primary"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-paragraph"
          >
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jdoe@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-2 border border-alice  text-text rounded-md shadow-sm focus:ring-accent focus:border-primary"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-lg font-medium text-paragraph"
          >
            Numéro de téléphone
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+33-XXX-XXX-XXX"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-2 border border-alice  text-text rounded-md shadow-sm focus:ring-accent focus:border-primary"
          />
        </div>

        {/* Table Desired */}
        <div>
          <label
            htmlFor="table"
            className="block text-lg font-medium text-paragraph"
          >
            Table souhaitée
          </label>
          <select
            id="table"
            name="table"
            value={formData.table}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-2 border border-alice  text-text rounded-md shadow-sm focus:ring-accent focus:border-primary"
          >
            <option value="">Choisissez une table</option>
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3</option>
            <option value="Table 4">Table 4</option>
          </select>
        </div>

        {/* Time for Booking */}
        <div>
          <label
            htmlFor="time"
            className="block text-lg font-medium text-paragraph"
          >
            Heure de réservation
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-2 border border-alice  text-text rounded-md shadow-sm focus:ring-accent focus:border-primary"
          />
        </div>

        {/* Comment */}
        <div>
          <label
            htmlFor="comment"
            className="block text-lg font-medium text-paragraph"
          >
            Commentaire (facultatif)
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            className="mt-2 block w-full px-4 py-2 border border-alice  text-text rounded-md shadow-sm focus:ring-accent focus:border-primary"
            placeholder="Ajoutez vos préférences ou des informations supplémentaires..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Réserver
          </button>
        </div>
      </form>
    </section>
  );
};

export default ReservationForm;
