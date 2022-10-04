import React from 'react'
import TreeTableLeft from './TreeTableLeft'
import "./TreeTable.css"
import { Row } from 'react-bootstrap'
import { Tab } from 'bootstrap'
import { TabView, TabPanel } from 'primereact/tabview';
import TreeTableDFMEARight from './TreeTableDFMEARight'
function TreeTableNew() {
    return (<div className='grid m-0' >
        <div className="col-12 md:col-2">
            <TreeTableLeft></TreeTableLeft>
        </div>
        <div className="col-12 md:col-10">
            {/* <TreeTableDFMEARight></TreeTableDFMEARight> */}
            <TabView>
                <TabPanel header="Requirement Analysis">

                </TabPanel>
                <TabPanel header="DFMEA">
                    <TreeTableDFMEARight></TreeTableDFMEARight>
                </TabPanel>
                <TabPanel header="DVP">

                </TabPanel>
                <TabPanel header="PFMEA">

                </TabPanel>
                <TabPanel header="Control Plan">

                </TabPanel>
            </TabView>
        </div>
    </div>
    )
}

export default TreeTableNew