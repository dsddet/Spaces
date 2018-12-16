import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  data: any;

  constructor(private http: HttpClient) {

    //http.get('http://localhost:4201/listings/notapproved').subscribe(x => console.log(x));

    //http://localhost:4201/listings/notapproved
  }

  getUserById(id: string): any {
    return this.http.get(`http://localhost:4201/admin/users/${id}`);
  }

  deleteUserByIdRole(id: string, role: string): any {
    return this.http.delete(`http://localhost:4201/admin/users/${id}/${role}`);
  }

  getListings(status: string): any {
    return this.http.get(`http://localhost:4201/admin/listings/${status}`);
  }

  setStatus(listingId: number, status: string): any {
    return this.http.get(`http://localhost:4201/admin/listings/${listingId}/${status}`);
  }

  addAdmin(admin: object): any {
    return this.http.post(`http://localhost:4201/admin/users/`,admin);
  }



}
