import { Page404Component } from './page404/page404.component';
import { AccountEditerComponent } from './account-editer/account-editer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import {AccountComponent} from './account/account.component';
import {Routes, RouterModule} from '@angular/router';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { PhoneEditerComponent } from './phone-editer/phone-editer.component';


const route: Routes = [
  {path: 'account/new', component : AccountEditerComponent},
  {path: 'account/:id/phonebook', component : PhoneBookComponent},
  {path: 'phonebook/:id', component : PhoneEditerComponent},
  {path: 'account/:id/new/phonebook', component : PhoneEditerComponent},
  {path: '', component : AccountComponent},
  {path: '**', component : Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(route )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

