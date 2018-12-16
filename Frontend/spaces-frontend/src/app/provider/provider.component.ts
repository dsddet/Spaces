import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'provider-home',
  templateUrl: './provider.component.html',
  //template: `{{houses}}`,
  styleUrls:['./provider.component.css']
})
export class ProviderComponent implements OnInit{
 //houses= ['house1','house2','house3','house4','house5','house6','house7'];
 constructor(private http: HttpClient){}
 houses: any;

 ngOnInit(){
   this.http.get('http://localhost:4201/provider/listings/provider1@email.com')
            .subscribe(data=>{
              this.houses = data;
              console.log(data);
            })
 }
 
}
  
