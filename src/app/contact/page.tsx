"use client";
import { useEffect, useState } from "react";
import { useBookings } from "../customHooks/queries/booking";
import { useBookingMutation } from "../customHooks/mutations/booking";
import { useFormik } from "formik";
import Calendar from "@/components/Calendar";
export default function Page() {
  // const {
  //   data: bookingData,
  //   isError: error,
  // } = useBookings();
  // const {isPending, mutate } = useBookingMutation();
  // const [_, setBooking] = useState([]);

  // useEffect(() => {
  //   if (error) {
  //     console.error(error);
  //   } else if (bookingData) {
  //     setBooking(bookingData);
  //   }
  // }, [bookingData]);
  const isPending = false;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      notes: "",
    },
    onSubmit: (values: any) => {
      // mutate(values);
      console.log(values);
    },
  });

  return (
    <div>

    </div>
  );
}
