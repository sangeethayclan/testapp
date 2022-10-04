export class TreeService {

    getTreeTableNodes() {
        return fetch('JSONdata/treetablenodes.json').then(res => res.json())
            .then(d => d.root);
    }

    getTreeNodes() {
        return fetch('JSONdata/treenodes.json').then(res => res.json())
            .then(d => d.root);
    }



}
