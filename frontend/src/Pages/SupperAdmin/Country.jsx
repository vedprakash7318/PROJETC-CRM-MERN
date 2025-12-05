import React, { useEffect, useState } from 'react'
import Dashboard from '../../Components/Dashboard'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import './CSS/Country.css';

const Country = () => {
    const Api_Url = import.meta.env.VITE_API_URL;
    const [country, setCountry] = useState([]);
    const [countryName, setCountryName] = useState('');
    const [visible, setVisible] = useState(false);
    const addedby = localStorage.getItem('SupperAdminId');

    const fetchCountry = async () => {
        const res = await axios.get(`${Api_Url}/api/country/get-all-country`);
        setCountry(res.data.country);
    };

    const handleSubmit = async () => {
        await axios.post(`${Api_Url}/api/country/add-country`, { countryName, addedby });
        fetchCountry();
        setCountryName('');
        setVisible(false);
    };

    useEffect(() => {
        fetchCountry();
    }, []);

    return (
        <Dashboard>
            <div className="country-header">
                <h2>Country List</h2>
                <Button label="Add Country" icon="pi pi-plus" onClick={() => setVisible(true)} className="p-button-success" />
            </div>

            <div className="card">
                <DataTable 
                    value={country} 
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
                        field="countryName" 
                        header="Country Name" 
                        sortable 
                        style={{ width: '40%' }} 
                    />

                    <Column 
                        header="Added By" 
                        body={(row) => row.addedby?.name || "—"} 
                        style={{ width: '40%' }} 
                    />
                </DataTable>
            </div>

            <Dialog 
                header="Add Country" 
                visible={visible} 
                style={{ width: '35vw' }} 
                onHide={() => setVisible(false)}
            >
                <div className="p-fluid">
                    <div className="field">
                        <label>Country Name</label>
                        <InputText 
                            value={countryName}
                            onChange={(e) => setCountryName(e.target.value)}
                            placeholder="Enter country name"
                        />
                    </div>

                    <div style={{ marginTop: "20px", textAlign: "right" }}>
                        <Button 
                            label="Cancel" 
                            icon="pi pi-times" 
                            className="p-button-text" 
                            onClick={() => setVisible(false)}
                        />
                        <Button 
                            label="Add" 
                            icon="pi pi-check" 
                            className="p-button-success" 
                            onClick={handleSubmit}
                            disabled={!countryName.trim()}
                        />
                    </div>
                </div>
            </Dialog>
        </Dashboard>
    );
};

export default Country;
