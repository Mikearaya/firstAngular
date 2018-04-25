import { PhoneBook } from './phone-book';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

const API_LOCATION = 'http://localhost:4500';

@Injectable()
export class PhoneBookManagerService implements OnInit, PhoneBook{

  phone: { userId: number; number: string; type: string; };
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  }
  getPhoneBook(accountId: number) {
    return this.httpClient.get<PhoneBook[]>(`${API_LOCATION}/phonebook?userId=${accountId}`);
  }

}
