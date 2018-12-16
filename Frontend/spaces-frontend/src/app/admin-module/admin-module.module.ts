import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { PendingListingComponent } from './components/pending-listing/pending-listing.component';
import { ApprovedListingComponent } from './components/approved-listing/approved-listing.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouterModule } from '@angular/router';
import { ListingsService } from './services/get-approved-listings.service';

@NgModule({
  declarations: [LoginHomeComponent, UserManagementComponent, PendingListingComponent, ApprovedListingComponent, LogoutComponent],
  providers:[ListingsService],
  imports: [CommonModule, RouterModule.forRoot([
    { path: 'providers', component: UserManagementComponent },
    {path:'customers',component:UserManagementComponent},
    { path: 'logout', component: LogoutComponent },
    { path: 'pending', component: PendingListingComponent },
    {path:'listings',component:ApprovedListingComponent}
  ])],
  exports: [LoginHomeComponent, UserManagementComponent, PendingListingComponent, ApprovedListingComponent, LogoutComponent],
})
export class AdminModule { }
