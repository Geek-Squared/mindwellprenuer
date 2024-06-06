"use client";

import { useFormik } from "formik";
import Calendar from "@/components/Calendar";
export default function Page() {
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
      <Calendar />
    </div>
  );
}
