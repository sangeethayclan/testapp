
import { Accordion, AccordionTab } from 'primereact/accordion';
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './services/CustomerService';
import { Button } from 'primereact/button';

function DFMEABox2() {
    const [customers, setCustomers] = useState([]);
    const [customersEdit, setCustomersEdit] = useState([]);
    const [expandedRows, setExpandedRows] = useState([]);
    const toast = useRef(null);
    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomersMedium().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        customerService.getCustomersMediumEdit().then(data => setCustomersEdit(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <img alt={data.representative.name} src={`images/avatar/${data.representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{data.representative.name}</span>
            </React.Fragment>
        );
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.country.name} src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    }

    // const representativeBodyTemplate = (rowData) => {
    //     return (
    //         <React.Fragment>
    //             <img alt={rowData.representative.name} src={`images/avatar/${rowData.representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
    //             <span className="image-text">{rowData.representative.name}</span>
    //         </React.Fragment>
    //     )
    // }

    const onRowGroupExpand = (event) => {
        toast.current.show({ severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data.representative.name, life: 3000 });
    }

    const onRowGroupCollapse = (event) => {
        toast.current.show({ severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data.representative.name, life: 3000 });
    }



    return (
        <div>
            <Accordion >
                <AccordionTab header="Edit &bull; Update &bull; Delete DFMEA">
                    <div className="card">
                        <DataTable value={customersEdit}
                            sortMode="single" responsiveLayout="scroll">
                            <Column field="Item" header="Item/Function" headerStyle={{ width: '1em' }} body={(data, options) => options.rowIndex + 1}></Column>
                            <Column field="Requirements" header="Requirements" ></Column>
                            <Column field="PotentialMode" header="Potential Failure Mode"></Column>
                            <Column field="PotentialEffect" header="Potential Effects of Failure" ></Column>
                            <Column field="Severity" header="Severity"></Column>
                            <Column field="Classification" header="Classification" ></Column>
                            <Column field="PotentialCause" header="Potential Cause/Mechanism of Failure"></Column>
                            <Column field="Occurrence" header="Occurrence"></Column>
                            <Column field="CurrentDesignPrevention" header="Current Design Controls Prevention"></Column>
                            <Column field="CurrentDesignDetection" header="Current Design Controls Detection"></Column>
                            <Column field="Detection" header="Detection"></Column>
                            <Column field="R.P.N" header="R.P.N"></Column>
                            <Column field="Action" header="Recommended Actions"></Column>

                        </DataTable>
                    </div>
                    <div className='grid tabbutton'>
                        <Button label="Add" />
                        <Button label="Update" />
                        <Button label="Delete" />
                    </div>
                </AccordionTab>
            </Accordion>
            <Accordion >
                <AccordionTab header="DFMEA">
                    <div className="card">
                        <DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.Requirements"
                            sortMode="single" sortField="representative" sortOrder={1} responsiveLayout="scroll">
                            <Column field="Item" header="Item/Function" headerStyle={{ width: '1em' }} body={(data, options) => options.rowIndex + 1}></Column>
                            <Column field="Requirements" header="Requirements" ></Column>
                            <Column field="PotentialMode" header="Potential Failure Mode"></Column>
                            <Column field="PotentialEffect" header="Potential Effects of Failure" ></Column>
                            <Column field="Severity" header="Severity"></Column>
                            <Column field="Classification" header="Classification" ></Column>
                            <Column field="PotentialCause" header="Potential Cause/Mechanism of Failure"></Column>
                            <Column field="Occurrence" header="Occurrence"></Column>
                            <Column field="CurrentDesignPrevention" header="Current Design Controls Prevention"></Column>
                            <Column field="CurrentDesignDetection" header="Current Design Controls Detection"></Column>
                            <Column field="Detection" header="Detection"></Column>
                            <Column field="R.P.N" header="R.P.N"></Column>
                            <Column field="Action" header="Recommended Actions"></Column>

                        </DataTable>
                    </div>

                </AccordionTab>
            </Accordion>
        </div>
    )
}

export default DFMEABox2