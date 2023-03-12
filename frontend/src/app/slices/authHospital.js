import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  token: null,
};

const hospitalAuthSlice = createSlice({
    name: "hospitalAuth",
    initialState,
    reducers: {
        setHospital: (state, action) =>{
            console.log(state);
            console.log(action);
         return ({ ...state, ...action.payload });
        },
        clearHospital: () => initialState
    }
})

export const { setHospital, clearHospital} = hospitalAuthSlice.actions;
export default hospitalAuthSlice.reducer