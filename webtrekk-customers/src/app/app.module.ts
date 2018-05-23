import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './/app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CustomerCreateNewComponent } from './customer-create-new/customer-create-new.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailComponent,
    AboutMeComponent,
    CustomerCreateNewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
