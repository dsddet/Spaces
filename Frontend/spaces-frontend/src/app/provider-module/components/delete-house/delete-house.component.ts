import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ProviderService} from '../../services/provider.service';
import { ObjectUnsubscribedError } from 'rxjs';
import { getInjectorIndex } from '@angular/core/src/render3/di';

@Component({
  selector: 'delete-house',
  templateUrl: 'delete-house.component.html'
    ,
  styles: ['#address{margin-left: 40pt ;}'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteHouseComponent implements OnInit {
  houseId:string;
  constructor(private service: ProviderService, private router:Router) { }

  ngOnInit() {
      
  }
  logInput(){
    console.log(this.houseId);
  }

  deleteHouse(){
    this.service.deleteListingById(this.houseId)
      .subscribe(res => {
          this.router.navigate(['/provider/deletehouse']);
        }, (err) => {
          console.log(err);
        }
      );
   }
  
}
