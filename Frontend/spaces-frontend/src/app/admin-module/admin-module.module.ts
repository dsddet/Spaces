import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { PendingListingComponent } from './components/pending-listing/pending-listing.component';
import { ApprovedListingComponent } from './components/approved-listing/approved-listing.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouterModule } from '@angular/router';
import { ListingsService } from './services/get-approved-listings.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerModule } from '../customer/customer.module';
import { ListingDetailComponent } from './components/listing-detail/listing-detail.component';

@NgModule({
  declarations: [LoginHomeComponent, UserManagementComponent, PendingListingComponent, ApprovedListingComponent, LogoutComponent,
  ListingDetailComponent],
 // providers:[ListingsService],
  imports: [CommonModule, RouterModule.forRoot([
    { path: 'admin/providers', component: UserManagementComponent },
    {path:'admin/customers',component:UserManagementComponent},
    { path: 'admin/logout', component: LogoutComponent },
    { path: 'admin/pending', component: PendingListingComponent },
    { path: 'admin/listing', component: ApprovedListingComponent },
    {path:'admin/home',component:LoginHomeComponent}
  ]),HttpClientModule,CustomerModule],
  exports: [LoginHomeComponent, UserManagementComponent, PendingListingComponent, ApprovedListingComponent, LogoutComponent],
})
export class AdminModule { }
