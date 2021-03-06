import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';
import {ProviderService} from './services/provider.service';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/store';

@Component({
  selector: 'provider-home',
  templateUrl: './provider.component.html',
  styleUrls:['./provider.component.css']
})
export class ProviderComponent implements OnInit{
 constructor(private service: ProviderService, private router: Router, private store: Store<AppState>){}
 houses: any;
 provider_id = "provider1@email.com"

 ngOnInit(){
  this.service.getListingsByProviderId(this.provider_id)
            .subscribe(data=>{
              this.houses = data;
              console.log(data);
              console.log(JSON.stringify(data));


            })

            this.store.dispatch({type:"ADD HOUSE",payload:this.houses});

 }
 
 
}
  
