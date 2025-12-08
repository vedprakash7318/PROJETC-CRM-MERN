import React, { useEffect, useState } from 'react'
import Dashboard from '../../Components/Dashboard'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeads } from '../../Redux/leadSlice';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import axios from 'axios';
import { MultiSelect } from 'primereact/multiselect';
const Leads = () => {
    const API_URL = import.meta.env.VITE_API_URL
    const addedby = localStorage.getItem('SupperAdminId')
    // all states
    const [visible, setVisible] = useState(false);
    const [number, setNumber] = useState('')
    const [priority, setPriority] = useState('')
    const [source, setSource] = useState('')
    const [tag, setTag] = useState([])

    //  set all dropdowns

    const [priorities, setPriorities] = useState([])
    const [sources, setSources] = useState([])
    const [tags, setTags] = useState([])

     //    redux fetch
    const dispatch = useDispatch();
    const lead = useSelector((state) => state.leads.lead);

    useEffect(() => {
        if (lead?.length === 0) {
            dispatch(fetchLeads())
        }
    }, [dispatch])
    useEffect(() => {
        fetchDropdowns()
    }, [])


    const fetchDropdowns = async () => {
        const [preRes, srcRes, tagRes] = await Promise.all([
            axios.get(`${API_URL}/api/priority/get-all-priority/${addedby}`),
            axios.get(`${API_URL}/api/source/get-all-source/${addedby}`),
            axios.get(`${API_URL}/api/tag/get-all-tag/${addedby}`)

        ])

        const priorityData = (preRes.data.priorities || []).map((p) => ({
            _id: p._id,
            priorityName: p.priorityName
        }))
        const sourcesData = (srcRes.data.sources || []).map((s) => ({
            _id: s._id,
            sourceName: s.sourceName
        }))
        const tagData = (tagRes.data.tag || []).map((t) => ({
            _id: t._id,
            tagName: t.tagName
        }))
        setPriorities(priorityData)
        setSources(sourcesData)
        setTags(tagData)


    }
    const handleLeads=async()=>{
        try {
            const res = await axios.post(`${API_URL}/api/lead/add-lead`,
                {
                    phoneNumber:number,
                    priority:priority,
                    sources:source,
                    tag:tag,
                    addedBy:addedby
                })
            setVisible(false)
            dispatch(fetchLeads())

        } catch (error) {
            console.log(error);
            
        }        
    }



   
    return (
        <Dashboard>

            <Button label="Add Lead" icon="pi pi-external-link" onClick={() => setVisible(true)} />
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
                        body={(row) => row.addedBy || "—"}
                    />
                </DataTable>
            </div>



            <Dialog header="Add Lead" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>

                <label>Phone Number</label>
                <InputText value={number} onChange={(e) => setNumber(e.target.value)} /> <br />
                <br /> <br />
                <label>Select Priority</label> &emsp;
                <Dropdown
                    value={priority}
                    onChange={(e) => setPriority(e.value)}
                    options={priorities}
                    optionLabel="priorityName"
                    optionValue='_id'
                    placeholder="Select a priority"
                    className="w-full md:w-14rem"
                />
                 <br /> <br /> <br />
                <label>Select Sources</label> &emsp;
                <Dropdown
                    value={source}
                    onChange={(e) => setSource(e.value)}
                    options={sources}
                    optionLabel="sourceName"
                    optionValue='_id'
                    placeholder="Select a source"
                    className="w-full md:w-14rem"
                />
                <br /> <br /> <br />
                <label>Select Tags</label> &emsp;
                <MultiSelect
                    value={tag}
                    onChange={(e) => setTag(e.value)}
                    options={tags}
                    optionLabel="tagName"
                    optionValue='_id'
                    placeholder="Select Cities"
                    className="w-full md:w-20rem"    
                />
                 <Button label="Add Leads" icon="pi pi-plus" onClick={handleLeads} className="p-button-success" />

            </Dialog>
        </Dashboard>
    )
}

export default Leads;
