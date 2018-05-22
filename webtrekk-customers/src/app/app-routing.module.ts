import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent }      from './customer/customer.component';
import { CustomerDetailComponent }  from './customer-detail/customer-detail.component';
import { AboutMeComponent }  from './about-me/about-me.component';

const routes: Routes = [
    { path: '', redirectTo: '/customer-list', pathMatch: 'full' },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'customer-list', component: CustomerComponent },
    { path: 'customer/:id', component: CustomerDetailComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
