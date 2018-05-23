import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Customer } from './customer';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CustomerService {

    private customersUrl = 'api/customers';  // URL to web api

    constructor(
        private http: HttpClient
    ) { }

    /** GET customers from the server */
    getCustomers (): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.customersUrl)
            .pipe(
                tap(customers => this.log(`fetched customers`)),
                catchError(this.handleError('getCustomers', []))
            );
    }

    /** GET customer by id */
    getCustomer(id: number): Observable<Customer> {
        const url = `${this.customersUrl}/${id}`;
        return this.http.get<Customer>(url).pipe(
            tap(_ => this.log(`fetched customer id=${id}`)),
            catchError(this.handleError<Customer>(`getCustomer id=${id}`))
        );
    }

    //////// Save methods //////////

    /** POST: add a new customer to the server */
    addCustomer (customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.customersUrl, customer, httpOptions).pipe(
            tap((customer: Customer) => this.log(`added customer w/ id=${customer.customerID}`)),
            catchError(this.handleError<Customer>('addCustomer'))
        );
    }

    /** DELETE: delete the customer from the server */
    deleteCustomer (customer: Customer | number): Observable<Customer> {
        const id = typeof customer === 'number' ? customer : customer.customerID;
        const url = `${this.customersUrl}/${id}`;

        return this.http.delete<Customer>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted customer id=${id}`)),
            catchError(this.handleError<Customer>('deleteCustomer'))
        );
    }

    /** PUT: update the customer on the server */
    updateCustomer (customer: Customer): Observable<any> {
        return this.http.put(this.customersUrl, customer, httpOptions).pipe(
            tap(_ => this.log(`updated customer id=${customer.customerID}`)),
            catchError(this.handleError<any>('updateCustomer'))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        // console.info('CustomerService: ' + message);
    }
}