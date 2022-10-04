import React from 'react'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import "primeflex/primeflex.css"
import "./TreeTable.css"


import { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { TreeService } from './services/TreeService';
import TreeTableDFMEARight from './TreeTableDFMEARight';
function TreeTableLeft() {
    const [nodes, setNodes] = useState([]);
    const treeservice = new TreeService();
    useEffect(() => {
        treeservice.getTreeTableNodes().then(data => setNodes(data));

        console.log("data", nodes)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onEditorValueChange = (options, value) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, options.node.key);
        editedNode.data[options.field] = value;

        setNodes(newNodes);
    }

    const findNodeByKey = (nodes, key) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;
            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    }

    const inputTextEditor = (options) => {
        return (
            <InputText type="text" value={options.rowData[options.field]}
                onChange={(e) => onEditorValueChange(options, e.target.value)} />
        );
    }

    const sizeEditor = (options) => {
        return inputTextEditor(options);
    }

    const typeEditor = (options) => {
        return inputTextEditor(options);
    }

    const requiredValidator = (e) => {
        let props = e.columnProps;
        let value = props.node.data[props.field];

        return value && value.length > 0;
    }


    return (
        <div>

            <div className="tableLeft">
                <TreeTable value={nodes}>
                    <Column field="name" header="Product Structure" expander style={{ height: '3.5em' }}></Column>

                </TreeTable>


            </div>


        </div>
    )
}

export default TreeTableLeft