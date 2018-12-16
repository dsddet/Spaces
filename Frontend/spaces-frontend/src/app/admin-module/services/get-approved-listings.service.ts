import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ListingsService {
  data: any[];

  constructor() { 
  
    this.data = [{ "_id": { "$numberInt": "1" }, "Name": "Utopia1", "Address": { "Street": "Utopia Street", "City": "Fairfield", "State": "IA", "Zip": "52557" }, "Details": { "Bedrooms": "2", "Bathrooms": "2", "Size": "1000", "Price": "500", "Amenities": "Very nice" }, "Status": "Pending", "Provider": "provider1@email.com", "DateCreated": "01/10/2010", "DateModified": "03/10/2012", "ReservedBy": "customer1@gmail.com" },
{ "_id": "2", "Name": "Utopia2", "Address": { "Street": "Utopia Street", "City": "Fairfield", "State": "IA", "Zip": "52557" }, "Details": { "Bedrooms": "2", "Bathrooms": "2", "Size": "1000", "Price": "500", "Amenities": "Very nice" }, "Status": "Pending", "Provider": "provider1@email.com", "DateCreated": "01/10/2010", "DateModified": "03/10/2012", "ReservedBy": "customer1@gmail.com" },
{ "_id": "3", "Name": "Utopia1", "Address": { "Street": "Utopia Street", "City": "Fairfield", "State": "IA", "Zip": "52557" }, "Details": { "Bedrooms": "2", "Bathrooms": "2", "Size": "1000", "Price": "500", "Amenities": "Very nice" }, "Status": "Pending", "Provider": "provider2@email.com", "DateCreated": "01/10/2010", "DateModified": "03/10/2012", "ReservedBy": "customer2@gmail.com" }]
  }

  getPendingListings() {
    return this.data;
  }

}
