
export class CustomerService {


    getCustomersMedium() {
        return fetch('JSONdata/customers-medium.json').then(res => res.json())
            .then(d => d.data);
    }
    getCustomersMediumEdit() {
        return fetch('JSONdata/customers-mediumEdit.json').then(res => res.json())
            .then(d => d.data);
    }
    getCustomers(params) {
        const queryParams = params ? Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&') : '';
        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then(res => res.json())
    }
}
