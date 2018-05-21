import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CUSTOMERS } from '../mock-customers';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {

    customers = CUSTOMERS;
    selectedCustomer: Customer;

    constructor() { }

    ngOnInit() {
    }

    onSelect(customer: Customer): void {
        this.selectedCustomer = customer;
    }
}