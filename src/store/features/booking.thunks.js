import { createAsyncThunk } from "@reduxjs/toolkit";
import { createBooking, getBooking } from "@/api/bookings.api";

export const makeBooking = createAsyncThunk("booking/create", async (payload) => await createBooking(payload));
export const loadBooking = createAsyncThunk("booking/get", async (id) => await getBooking(id));
