import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const leadSlice = createSlice ({
    name:"leads",
    initialState:{
        leads:[]
    },
    reducers:{
        setLeads:(state,action)=>{
            state.leads=action.payload;
        }
    }
})
export const {
    setLeads
} = leadSlice.actions

const API_URL= import.meta.env.VITE_API_URL;
const addedby = localStorage.getItem("SupperAdminId")


export const fetchLeads = ()=> async (dispatch)=>{
    const res = await axios.get(`${API_URL}/api/lead/get-leads/${addedby}`)
    dispatch(setLeads(res.data.leads))
    
}


export default leadSlice.reducer






