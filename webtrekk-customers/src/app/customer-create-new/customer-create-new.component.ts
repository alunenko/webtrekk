import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Customer} from "../customer";
import {CustomerService} from "../customer.service";

@Component({
    selector: 'app-customer-create-new',
    templateUrl: './customer-create-new.component.html',
    styleUrls: ['./customer-create-new.component.less']
})
export class CustomerCreateNewComponent implements OnInit {
    customers: Customer[] = [];

    constructor(
        private customerService: CustomerService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    jsModal(): void {
        let message = "The new customer was successfully added! " +
            "Do you want create another one[CANCEL] or want to go to the customer list[OK]?";

        if (confirm(message)) {
            this.router.navigateByUrl('/customer-list');
        }
    }

    add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }

        let newCustomer = {
            customerID: +new Date(),
            name: {
                first: 'f',
                last: 'unset'
            },
            birthday: 'unset',
            gender: 'unset',
            lastContact: 'unset',
            customerLifetimeValue: 0
        };

        newCustomer.name.first = name;

        this.customerService.addCustomer(newCustomer as Customer)
            .subscribe(customer => {
                    this.customers.push(customer);
                    this.jsModal();
                }
            );
    }
}
