import { AccountEditerComponent } from './account-editer/account-editer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import {AccountComponent} from './account/account.component';
import {Routes, RouterModule} from '@angular/router';
import { PhoneBookComponent } from './phone-book/phone-book.component';


const route: Routes = [
  
  {path: 'account/:id', component : AccountEditerComponent},
  {path: 'account/:id/phonebook', component : PhoneBookComponent},
  {path: '', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

