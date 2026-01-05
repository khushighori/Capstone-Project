import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData, addData, updateData, deleteData } from "./api";

export const getRegistrations = createAsyncThunk(
  "registrations/get",
  fetchData
);

export const createRegistration = createAsyncThunk(
  "registrations/add",
  addData
);

export const editRegistration = createAsyncThunk(
  "registrations/update",
  updateData
);

export const removeRegistration = createAsyncThunk(
  "registrations/delete",
  async (id) => {
    await deleteData(id);
    return id;
  }
);

const registrationSlice = createSlice({
  name: "registrations",
  initialState: {
    list: [],
    loading: false,
    search: "",
    sessionFilter: "All",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSessionFilter: (state, action) => {
      state.sessionFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRegistrations.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(createRegistration.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(editRegistration.fulfilled, (state, action) => {
        const i = state.list.findIndex(r => r.id === action.payload.id);
        state.list[i] = action.payload;
      })
      .addCase(removeRegistration.fulfilled, (state, action) => {
        state.list = state.list.filter(r => r.id !== action.payload);
      });
  },
});

export const { setSearch, setSessionFilter } = registrationSlice.actions;
export default registrationSlice.reducer;