import { PhoneBookManagerService } from './phone-book-manager.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AccountManagerService } from './account-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountComponent } from './account/account.component';
import { RouterModule } from '@angular/router';
import { AccountEditerComponent } from './account-editer/account-editer.component';
import { PhoneEditerComponent } from './phone-editer/phone-editer.component';
import { Page404Component } from './page404/page404.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { LogPageComponent } from './log-page/log-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    AccountComponent,
    AccountEditerComponent,
    PhoneEditerComponent,
    Page404Component,
    ContactSearchComponent,
    LogPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PhoneBookManagerService, AccountManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
