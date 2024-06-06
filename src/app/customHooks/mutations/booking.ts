import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function postBooking(booking: any) {
  return axios.post("http://localhost:3000/api/booking", booking);
}


export function useBookingMutation() {
  return useMutation({
    mutationFn: postBooking,
  });
}
