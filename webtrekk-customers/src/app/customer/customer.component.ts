import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {
    customers: Customer[];

    constructor(
        private customerService: CustomerService
    ) { }

    ngOnInit() {
        this.getCustomers();
    }

    getCustomers(): void {
        this.customerService.getCustomers()
            .subscribe(customers => this.customers = customers);
    }

    delete(customer: Customer): void {
        this.customers = this.customers.filter(c => c !== customer);
        this.customerService.deleteCustomer(customer).subscribe();
    }
}
