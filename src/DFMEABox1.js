import React from 'react'

import { Accordion, AccordionTab } from 'primereact/accordion';

function DFMEABox1() {
    return (
        <div>
            <Accordion activeIndex={0}>
                <AccordionTab header="Potential Failure Mode and Effects Analysis (DFMEA)">

                    <div className='grid'>
                        <div className="col-12 md:col-4">
                            <div className='grid m-0' >
                                <div className="col-6 md:col-6 boxPara ">
                                    <p>System</p>
                                </div>
                                <div className="col-6 md:col-6 boxPara ">
                                    <p></p>
                                </div>
                            </div>
                            <div className='grid m-0' >
                                <div className="col-6 md:col-6 boxPara ">
                                    <p>Subsystem</p>
                                </div>
                                <div className="col-6 md:col-6 boxPara ">
                                    <p></p>
                                </div>
                            </div>
                            <div className='grid m-0' >
                                <div className="col-6 md:col-6 boxPara ">
                                    <p>Component</p>
                                </div>
                                <div className="col-6 md:col-6 boxPara ">
                                    <p>From Product Structure</p>
                                </div>
                            </div>
                            <div className='grid m-0' >
                                <div className="col-6 md:col-6 boxPara">
                                    <p>Core Team</p>
                                </div>
                                <div className="col-6 md:col-6 boxPara">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className='grid m-0' >
                                <div className="col-6 md:col-6 boxPara">
                                    <p>Project Name</p>
                                </div>
                                <div className="col-6 md:col-6 boxPara">
                                    <p></p>
                                </div>
                            </div>
                            <div className='grid m-0' >
                                <div className="col-6 md:col-6 boxPara">
                                    <p>Author</p>
                                </div>
                                <div className="col-6 md:col-6 boxPara">
                                    <p></p>
                                </div>
                            </div>
                            <div className='grid m-0' >
                                <div className="col-6 md:col-6 boxPara">
                                    <p>Path</p>
                                </div>
                                <div className="col-6 md:col-6 boxPara">
                                    <p>From Product Structure</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className='grid m-0' >
                                <div className="col-6 md:col-6 boxPara">
                                    <p>FMEA #</p>
                                </div>
                                <div className="col-6 md:col-6 boxPara">
                                    <p>1</p>
                                </div>
                            </div>
                            <div className='grid m-0' >
                                <div className="col-6 md:col-6 boxPara">
                                    <p>Revision</p>
                                </div>
                                <div className="col-6 md:col-6 boxPara">
                                    <p>30/09/2022</p>
                                </div>
                            </div>
                            <div className='grid m-0' >
                                <div className="col-6 md:col-6 boxPara">
                                    <p>Date Created</p>
                                </div>
                                <div className="col-6 md:col-6 boxPara">
                                    <p></p>
                                </div>
                            </div>
                            <div className='grid m-0' >
                                <div className="col-6 md:col-6 boxPara">
                                    <p>Date Modified</p>
                                </div>
                                <div className="col-6 md:col-6 boxPara">
                                    <p>01/10/2022</p>
                                </div>
                            </div>
                            <div className='grid m-0' >
                                <div className="col-6 md:col-6 boxPara">
                                    <p>Modified By</p>
                                </div>
                                <div className="col-6 md:col-6 boxPara">
                                    <p></p>
                                </div>
                            </div>
                        </div>

                    </div>

                </AccordionTab>
            </Accordion>
        </div>
    )
}

export default DFMEABox1