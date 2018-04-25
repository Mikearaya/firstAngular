import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AccountManagerService } from './account-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { AppRoutingModule } from './/app-routing.module';
import { AccountComponent } from './account/account.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AccountManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
