import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {

  customer = {
      "customerID": 1,
      "name": {
          "first": "Peter",
          "last": "Smith"
      },
      "birthday": "1996-10-12",
      "gender": "m",
      "lastContact": "2017-06-01T23:28:56.782Z",
      "customerLifetimeValue": 191.12
  };

  constructor() { }

  ngOnInit() {
  }

}
