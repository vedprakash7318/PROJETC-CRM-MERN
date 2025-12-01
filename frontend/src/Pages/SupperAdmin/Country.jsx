import React, { useEffect, useState } from 'react'
import Dashboard from '../../Components/Dashboard'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './CSS/Country.css'
import axios from 'axios';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

        

const Country = () => {
    const Api_Url=import.meta.env.VITE_API_URL
    const [country,setCountry]=useState('')
    const [countryName,setcountryName]=useState('')
    const [visible, setVisible] = useState(false);
    const addedby = localStorage.getItem('SupperAdminId')

    const fetchCountry=async()=>{
        const res= await axios.get(`${Api_Url}/api/country/get-all-country`)
        setCountry(res.data.country)
        console.log(res.data.country);
        ;
    }

    const handleSubmit=async()=>{
        const res= await axios.post(`${Api_Url}/api/country/add-country`,{countryName,addedby})
        fetchCountry()
        setVisible(false)
    }    
    useEffect(()=>{
        fetchCountry()
    },[])
    return (
        <Dashboard>
            <div className="country-header">
                <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            </div>
        <div className="card">
           <DataTable value={country}>
                <Column field="code" header="Sr. No" sortable style={{ width: '25%' }}></Column>
                <Column field="countryName" header="Country Name" style={{ width: '25%' }}></Column>
                <Column field="addedby.name" header="Added By"  style={{ width: '25%' }}></Column>
            </DataTable>
            </div>
            

            <Dialog header="Add Country" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                    <input type="text" name='country' value={countryName} onChange={(e)=>setcountryName(e.target.value)} />
                    <button onClick={handleSubmit}>Add</button>
            </Dialog>
    
        
        </Dashboard>
    )
}

export default Country