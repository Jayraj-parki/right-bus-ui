import { useDispatch } from "react-redux";
import { setToast } from "@/store/features/ui/ui.slice";

export default function useToast() {
  const dispatch = useDispatch();
  return (message) => dispatch(setToast({ message }));
}
