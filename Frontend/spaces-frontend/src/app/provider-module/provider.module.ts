import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProviderComponent } from './provider.component';
import { AddHouseComponent } from './components/add-house/add-house.component';
import { EditHouseComponent } from './components/edit-house/edit-house.component';
import { DeleteHouseComponent} from './components/delete-house/delete-house.component';

const routes: Routes = [
  {path: 'provider', component: ProviderComponent},
  {path: 'provider/addhouse', component: AddHouseComponent},
  {path: 'provider/edithouse', component: EditHouseComponent},
  {path: 'provider/deletehouse', component: DeleteHouseComponent }
];

@NgModule({
  declarations: [
    ProviderComponent,
    AddHouseComponent,
    EditHouseComponent,
    DeleteHouseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule,ProviderComponent,AddHouseComponent,EditHouseComponent,DeleteHouseComponent]
})
export class ProviderModule { }
