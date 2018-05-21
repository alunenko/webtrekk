import { Injectable } from '@angular/core';

import { Customer } from './customer';
import { CUSTOMERS } from './mock-customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomers(): Customer[] {
      return CUSTOMERS;
  }
}
