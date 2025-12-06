import { useSelector, useDispatch } from "react-redux";
import { setMode, setStatus } from "@/store/features/payment.slice";
export default function usePayment() {
  const dispatch = useDispatch();
  const { mode, status } = useSelector(s => s.payment);
  return {
    mode, status,
    setMode: (m) => dispatch(setMode(m)),
    setStatus: (s) => dispatch(setStatus(s))
  };
}
