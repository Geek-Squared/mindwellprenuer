import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function fetchBookings() {
  return axios.get("http://localhost:3000/api/booking")
    .then(response => response?.data.docs);
}

export function useBookings() {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookings,
  });
}