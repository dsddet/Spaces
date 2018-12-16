import { Injectable } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  data: any;

  constructor(private http: HttpClient) {

    http.get('http://localhost:4201/listings/notapproved').subscribe(x => console.log(x));

    //http://localhost:4201/listings/notapproved
  }

  getPendingListings():any {
    return this.http.get('http://localhost:4201/listings/notapproved'); 
  }

}
