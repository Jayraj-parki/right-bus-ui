import { useDispatch, useSelector } from "react-redux";
import { setSeats, selectSeat } from "@/store/features/seats.slice";
import { useEffect } from "react";
import { getSeatLayout } from "@/api/seat.api";

export default function useSearchSeats(busId) {
  const dispatch = useDispatch();
  const seats = useSelector(s => s.seats.seats);
  useEffect(() => {
    if (busId) getSeatLayout(busId).then((data) => dispatch(setSeats(data)));
  }, [busId, dispatch]);
  return [seats, (id) => dispatch(selectSeat(id))];
}
