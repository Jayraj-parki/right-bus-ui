import { combineReducers } from "@reduxjs/toolkit";
import search from "./features/search.slice";
import booking from "./features/booking.slice";
import seats from "./features/seats.slice";
import operator from "./features/operator.slice";
import payment from "./features/payment.slice";
import offers from "./features/offers.slice";
import notifications from "./features/notifications.slice";
import profile from "./features/profile.slice";
import ui from "./features/ui/ui.slice";

export default combineReducers({
  search,
  seats,
  booking,
  payment,
  notifications,
  operator,
  offers,
  profile,
  ui
});
