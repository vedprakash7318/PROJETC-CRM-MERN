import React, { useEffect, useState } from 'react'
import Dashboard from '../../Components/Dashboard'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import axios from 'axios';

const City = () => {
    const APi_Url = import.meta.env.VITE_API_URL;
    const addedby = localStorage.getItem('SupperAdminId');

    const [visible, setVisible] = useState(false);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);

    const [cityName, setCityName] = useState('');
    const [stateId, setStateId] = useState('');

    // Fetch all cities
    const fetchCities = async () => {
        try {
            const res = await axios.get(`${APi_Url}/api/city/get-all-city`);
            setCities(res.data.city);
            console.log(res);
            
        } catch (error) {
            console.log(error);
        }
    };

    // Fetch all states
    const fetchStates = async () => {
        try {
            const res = await axios.get(`${APi_Url}/api/state/get-all-state`);
            setStates(res.data.state);
            
            
        } catch (error) {
            console.log(error);
        }
    };

    // Add city
    const handleSubmit = async () => {
        try {
            const res = await axios.post(`${APi_Url}/api/city/add-city`, {
                cityName,
                stateId,
                addedby
            });

            console.log(res);
            fetchCities();
            setVisible(false);
            setCityName('');
            setStateId('');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCities();
        fetchStates();
    }, []);

    return (
        <Dashboard>
            <div className="country-header">
                <h2>City List</h2>
                <Button label="Add City" icon="pi pi-plus" 
                        onClick={() => setVisible(true)} className="p-button-success" />
            </div>

            <div className="card">
                <DataTable value={cities} paginator rows={10} emptyMessage="No cities found" stripedRows>
                    <Column header="Sr. No" body={(rowData, options) => options.rowIndex + 1} style={{ width: '10%' }} />

                    <Column field="cityName" header="City Name" sortable style={{ width: '40%' }} />

                    <Column
                        header="State Name"
                        body={(row) => row.stateId?.stateName || "—"}
                        sortable
                        style={{ width: '20%' }}
                    />

                    <Column
                        header="Added By"
                        body={(row) => row.addedby?.name || "—"}
                        style={{ width: '20%' }}
                    />
                </DataTable>
            </div>

            <Dialog header="Add City" visible={visible} style={{ width: '35vw' }} onHide={() => setVisible(false)}>
                <label>City Name</label>
                <InputText value={cityName} onChange={(e) => setCityName(e.target.value)} />

                <br/><br/>

                <label>Select State</label>
                <Dropdown
                    value={stateId}
                    onChange={(e) => setStateId(e.value)}
                    options={states}
                    optionLabel="stateName"
                    optionValue="_id"
                    placeholder="Select a State"
                    className="w-full md:w-14rem"
                />

                <br/><br/><br/>

                <Button label="Add City" icon="pi pi-plus" onClick={handleSubmit} className="p-button-success" />
            </Dialog>
        </Dashboard>
    );
};

export default City;
