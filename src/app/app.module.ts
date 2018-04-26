import { PhoneBookManagerService } from './phone-book-manager.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AccountManagerService } from './account-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountComponent } from './account/account.component';
import { RouterModule } from '@angular/router';
import { AccountEditerComponent } from './account-editer/account-editer.component';
import { PhoneEditerComponent } from './phone-editer/phone-editer.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    AccountComponent,
    AccountEditerComponent,
    PhoneEditerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PhoneBookManagerService, AccountManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
