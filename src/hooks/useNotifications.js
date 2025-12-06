import { useDispatch, useSelector } from "react-redux";
import { addNotification } from "@/store/features/notifications.slice";
export default function useNotifications() {
  const dispatch = useDispatch();
  const notifications = useSelector(s => s.notifications.list);
  const notify = (notif) => dispatch(addNotification(notif));
  return { notifications, notify };
}
