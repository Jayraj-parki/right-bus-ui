import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBuses, getBusById } from "@/api/buses.api";

export const fetchBuses = createAsyncThunk("buses/fetchAll", async () => await getBuses());
export const fetchBusById = createAsyncThunk("buses/fetchById", async (id) => await getBusById(id));
