import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProviderComponent } from './provider.component';
import { AddHouseComponent } from './add-house.component';
import { EditHouseComponent } from './edit-house.component';

const routes: Routes = [
  {path: 'provider', component: ProviderComponent},
  {path: 'provider/addhouse', component: AddHouseComponent},
  {path: 'provider/edithouse', component: EditHouseComponent}
];

@NgModule({
  declarations: [
    ProviderComponent,
    AddHouseComponent,
    EditHouseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule,ProviderComponent,AddHouseComponent,EditHouseComponent]
})
export class ProviderModule { }
