import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { PhoneBook } from './phone-book';




const API_LOCATION = 'http://localhost:3800';

@Injectable()
export class AccountManagerService {

  constructor(private httpLink: HttpClient) { }

  getAccounts() {
    return this.httpLink.get<User[]>(`${API_LOCATION}/users/`);
  }
  getPhoneBook(accountId: number) {
    return this.httpLink.get<PhoneBook[]>(`${API_LOCATION}/phonebook/`);
  }
}
