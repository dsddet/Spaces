import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'provider-home',
  templateUrl: './provider.component.html',
  styleUrls:['./provider.component.css']
})
export class ProviderComponent implements OnInit{
 constructor(private http: HttpClient, private router: Router){}
 houses: any;
 provider_id = "provider1@email.com"

 ngOnInit(){
   this.http.get('http://localhost:4201/provider/listings/'+this.provider_id)
            .subscribe(data=>{
              this.houses = data;
              console.log(JSON.stringify(data));
            })
 }

 deleteHouse(){
  this.http.delete('http://localhost:4201/provider/delete/'+this.houses[0]._id)
    .subscribe(res => {
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      }
    );
 }
 
}
  
