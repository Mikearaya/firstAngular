import { AccountManagerService } from './../account-manager.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { PhoneBookManagerService } from '../phone-book-manager.service';
import { PhoneBook } from '../phone-book';
import {Location } from '@angular/common';

@Component({
  selector: 'app-account-editer',
  templateUrl: './account-editer.component.html',
  styleUrls: ['./account-editer.component.css']
})
export class AccountEditerComponent implements OnInit {

  @Input() selected: User ;


  user = new User(null, '', '', '');
  constructor(private accountManager: AccountManagerService,
              private phoneBookManager: PhoneBookManagerService,
              private location: Location ) { }

  ngOnInit() {
      if (this.selected) {
        this.user = this.selected;
      }
  }
  createAccount() {
    this.accountManager.create(this.user).subscribe(
      (newAccount: User) => this.location.back()
    );
  }
  updateAccount() {
    this.accountManager.update(this.user).subscribe(
      (upadated: User) => this.location.back()
    );
  }

  deleteAccount() {
    this.accountManager.delete(this.user.id).subscribe((res: User) => this.location.back()
    );
  }


}
