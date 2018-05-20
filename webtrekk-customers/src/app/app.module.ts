import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
<<<<<<< HEAD
=======
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
>>>>>>> d32bf2b... Edit the customer

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
