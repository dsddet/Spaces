import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderComponent } from './provider/provider.component';
import { AddHouseComponent } from './provider/add-house.component';
import { EditHouseComponent } from './provider/edit-house.component';

const routes: Routes = [
  {path: 'provider', component: ProviderComponent},
  {path: 'provider/addhouse', component: AddHouseComponent},
  {path: 'provider/edithouse', component: EditHouseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
