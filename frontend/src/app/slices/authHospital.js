import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

const hospitalAuthSlice = createSlice({
    name: "hospitalAuth",
    initialState,
    reducers: {
        setHospital: (state, action) =>{
           
         return ({ ...state, ...action.payload });
        },
        clearHospital: () => initialState
    }
})

export const { setHospital, clearHospital} = hospitalAuthSlice.actions;
export default hospitalAuthSlice.reducer