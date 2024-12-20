import { createSlice } from "@reduxjs/toolkit";

// state is === Value hai
// action === (Payload) Jo user send kar rha hai, jo frontend sai aa rha hai
// payload means jo user data send kar rha hai
const initialState = { value: 10};
export const showSlice = createSlice({
    // Three things we needed to implement
    // name 
    // initialState
    // reduser means actions ACTION
    name : "showData",
    initialState ,
    reducers : {
        // addData : ()=>{

        // },
        showData : (state)=>{
            state.value = state.value;
        }
    }
})

export const {addData, showData} = showSlice.actions;  //ACTION export ho raha hai mainly

export default showSlice.reducer;