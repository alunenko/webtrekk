import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CUSTOMERS } from '../mock-customers';

import { CustomerService } from '../customer.service';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {

    selectedCustomer: Customer;
    customers: Customer[];

    constructor(
        private customerService: CustomerService
    ) { }

    ngOnInit() {
        this.getCustomers();
    }

    onSelect(customer: Customer): void {
        this.selectedCustomer = customer;
    }

    getCustomers(): void {
        this.customerService.getCustomers()
            .subscribe(customers => this.customers = customers);
    }
}
