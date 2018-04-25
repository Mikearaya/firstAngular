import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';





const API_LOCATION = 'http://localhost:4500';

@Injectable()
export class AccountManagerService implements OnInit {
 
  constructor(private httpLink: HttpClient) { }
    ngOnInit(){

  }

  getAccounts() {
    return this.httpLink.get<User[]>(`${API_LOCATION}/users/`);
  }
 
}
