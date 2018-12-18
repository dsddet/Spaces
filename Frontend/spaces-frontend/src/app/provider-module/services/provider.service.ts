import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class ProviderService {
      constructor(private http : HttpClient){}

      getListingsByProviderId(id:string):any{
          return this.http.get('http://localhost:4201/provider/listings/'+id);
      }

      addNewListing(house:object){
          return this.http.post('http://localhost:4201/provider/listings', house);
      }

      getListingById(id){
          return  this.http.get('http://localhost:4201/provider/listing/'+id);
      }

      updateListing(id, house){
          return this.http.put('http://localhost:4201/provider/put/'+id, house);
      }

      deleteListingById(id){
          return this.http.delete('http://localhost:4201/provider/delete/'+id);
      }
  }