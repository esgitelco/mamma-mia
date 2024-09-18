"use server";

import { createClient } from "./supabase/components";
import { redirect } from "next/navigation";

export const submitReservationForm = async (
  name,
  email,
  phone,
  tableid,
  timeforreservation,
  comment
) => {
  const supabase = createClient();

  console.log(
    "Reservation data: ",
    name,
    email,
    phone,
    tableid,
    timeforreservation,
    comment
  );

  const { data, error } = await supabase
    .from("reservation")
    .insert([{ name, email, phone, tableid, timeforreservation, comment }]);

  if (error) {
    console.error("Error submitting reservation form!", error);
    return "failed";
  }

  console.log("Reservation submitted successfully!", data);
  return "success";
};
