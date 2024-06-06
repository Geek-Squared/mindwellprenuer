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
    <div style={{
      marginTop: "50px",
    }}>
      <Calendar />
      {/* <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />

        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.date}
        />

        <label htmlFor="time">Time</label>
        <input
          id="time"
          name="time"
          type="time"
          onChange={formik.handleChange}
          value={formik.values.time}
        />

        <label htmlFor="guests">Guests</label>
        <input
          id="guests"
          name="guests"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.guests}
        />

        <label htmlFor="notes">Notes</label>
        <input
          id="notes"
          name="notes"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.notes}
        />

        <button type="submit">{isPending ? "Submitting..." : "Submit"}</button>
      </form> */}
    </div>
  );
}
