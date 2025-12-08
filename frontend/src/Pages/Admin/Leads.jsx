import React, { useEffect } from 'react'
import Dashboard from '../../Components/Dashboard'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeads } from '../../Redux/leadSlice';

const Leads = () => {
    const dispatch = useDispatch();
    const lead = useSelector((state) => state.leads.leads);

    useEffect(()=>{
        dispatch(fetchLeads())
    },[])
   
    return (
        <Dashboard>
            <div className="card">
                <DataTable   
                    value={lead}
                    paginator
                    rows={10}
                    emptyMessage="No leads found"
                    stripedRows
                >
                    <Column 
                        header="Sr. No"  
                        body={(rowData, options) => options.rowIndex + 1}
                    />

                    <Column field="phoneNumber" header="Phone Number" sortable />

                    <Column field="sources" header="Sources" sortable />

                    <Column field="priority" header="Priority" sortable />

                    <Column field="assignedTo" header="Assigned To" sortable />
        
                    <Column 
                        header="Added By"
                        body={(row) => row.addedBy?.name || "—"} 
                    />
                </DataTable>
            </div>
        </Dashboard>
    )
}

export default Leads;
