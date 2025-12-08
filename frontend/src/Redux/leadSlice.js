import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const leadSlice = createSlice ({
    name:"leads",
    initialState:{
        lead:[],
        tag:[],
    },
    reducers:{
        setLead:(state,action)=>{
            state.lead=action.payload;
        },
        setTag:(state,action)=>{
            state.tag=action.payload;
        }
    }
})
export const {
    setLead
} = leadSlice.actions

const API_URL= import.meta.env.VITE_API_URL;
const addedby = localStorage.getItem("SupperAdminId")


export const fetchLeads = ()=> async (dispatch)=>{
    const res = await axios.get(`${API_URL}/api/lead/get-leads/${addedby}`)
    dispatch(setLead(res.data.leads))
    console.log(res);
        
}


export default leadSlice.reducer






