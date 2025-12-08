import React, { useEffect, useState } from 'react'
import Dashboard from '../../Components/Dashboard'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import axios from 'axios';
const State = () => {
    const APi_Url = import.meta.env.VITE_API_URL
    const addedby = localStorage.getItem('SupperAdminId')
    const [visible, setVisible] = useState(false)
    const [states, setStates] = useState([]);

    const [stateName, setStateName] = useState('');
    const [countryId, setCountryId] = useState('');

    const [countries, setCountries] = useState([])
    const fetchStates = async () => {
        try {
            const res = await axios.get(`${APi_Url}/api/state/get-all-state`)
            setStates(res.data.state);
        } catch (error) {
            console.log(error)
        }
    }
    const fetchCountry = async () => {
        try {
            const res = await axios.get(`${APi_Url}/api/country/get-all-country`)
            setCountries(res.data.country);
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit=async()=>{
        try {
            const res = await axios.post(`${APi_Url}/api/state/add-state`,{stateName,countryId,addedby})
            console.log(res);
            fetchStates()
            setVisible(false)
        } catch (error) {
            console.log(error);
            
        }
    }



    useEffect(() => {
        fetchStates()
        fetchCountry()
    }, [])
    return (
        <Dashboard>
            <div className="country-header">
                <h2>State List</h2>
                <Button label="Add State" icon="pi pi-plus" onClick={() => setVisible(true)} className="p-button-success" />
            </div>

            <div className="card">
                <DataTable
                    value={states}
                    paginator
                    rows={10}
                    emptyMessage="No countries found"
                    stripedRows
                >
                    <Column
                        header="Sr. No"
                        body={(rowData, options) => options.rowIndex + 1}
                        style={{ width: '10%' }}
                    />

                    <Column
                        field="stateName"
                        header="State Name"
                        sortable
                        style={{ width: '40%' }}
                    />
                    <Column
                        body={(row) => row.countryId?.countryName || "—"}
                        header="Country Name"
                        sortable
                        style={{ width: '20%' }}
                    />

                    <Column
                        header="Added By"
                        body={(row) => row.addedby?.name || "—"}
                        style={{ width: '40%' }}
                    />
                </DataTable>
            </div>



            <Dialog
                header="Add State"
                visible={visible}
                style={{ width: '35vw' }}
                onHide={() => setVisible(false)}
            >
                <label>State Name</label>
                <InputText value={stateName} onChange={(e) => setStateName(e.target.value)} /> <br />
                 <br /> <br />
                <label>Select Counrty</label> &emsp;
                <Dropdown
                    value={countryId}
                    onChange={(e) => setCountryId(e.value)}
                    options={countries}
                    optionLabel="countryName"
                    optionValue='_id'
                    placeholder="Select a City"
                    className="w-full md:w-14rem"
                />

                <br /> <br /> <br /> <br />

                <Button label="Add State" icon="pi pi-plus" onClick={handleSubmit} className="p-button-success" />

            </Dialog>
        </Dashboard>
    )
}

export default State