"use client";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function NotificationList({ notifications }) {
  if (!notifications?.length) {
    return (
      <div className="bg-light text-center text-muted py-4 rounded-3">
        <NotificationsActiveIcon className="mb-2" />
        <div>No notifications yet! All is on schedule.</div>
      </div>
    );
  }
  return (
    <div className="notification-list mt-3">
      {notifications.map((n, i) => (
        <div className="alert alert-info d-flex align-items-center gap-2 mb-2" key={i}>
          <NotificationsActiveIcon fontSize="small" />
          <span><strong>{n.title}</strong> – {n.message}</span>
        </div>
      ))}
    </div>
  );
}
