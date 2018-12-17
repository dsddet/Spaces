import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'provider-home',
  templateUrl: './provider.component.html',
  styleUrls:['./provider.component.css']
})
export class ProviderComponent implements OnInit{
 constructor(private http: HttpClient){}
 houses: any;

 ngOnInit(){
   this.http.get('http://localhost:4201/provider/listings/provider1@email.com')
            .subscribe(data=>{
              this.houses = data;
              console.log(JSON.stringify(data));
            })
 }
 
}
  
