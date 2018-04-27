import { Observable } from 'rxjs/Observable';
import { PhoneBook } from './phone-book';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

const API_LOCATION = 'http://localhost:4500';

@Injectable()
export class PhoneBookManagerService implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  }
  getPhone(id: number): Observable<PhoneBook> {
    return this.httpClient.get<PhoneBook>(`${API_LOCATION}/phonebook?id=${id}`);
  }
  getPhoneBook(accountId: number) {
    return this.httpClient.get<PhoneBook[]>(`${API_LOCATION}/phonebook?userId=${accountId}`);
  }
  addPhoneNumber(accountId: number, phone: PhoneBook) {
    phone.userId = accountId;
    return this.httpClient.post<PhoneBook>(`${API_LOCATION}/phonebook/`, phone);
  }
  updatePhoneNumber(phone: PhoneBook) {
   return this.httpClient.put<PhoneBook>(`${API_LOCATION}/phonebook/${phone.id}`, phone);
  }

  deletePhoneNumber(phoneId: number) {
    return this.httpClient.delete<PhoneBook>(`${API_LOCATION}/phonebook/${phoneId}`);
  }

  searchPhone(id: number, name: any) {
    return this.httpClient.get<PhoneBook[]>(`${API_LOCATION}/phonebook?name_like=${name}&userId=${id}`);
  }

}
