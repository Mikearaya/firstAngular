import { PhoneBook } from './../phone-book';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { PhoneBookManagerService } from '../phone-book-manager.service';



@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {

  userId: number;
  currentPhone: PhoneBook;
  phones$: PhoneBook[];
  constructor(private phoneManager: PhoneBookManagerService,
              private activeRoute: ActivatedRoute,
            private location: Location) { }

  ngOnInit() {
    this.userId = + this.activeRoute.snapshot.paramMap.get('id');
    this.reset();
    this.openPhonebook();

  }
  deletePhone(phone: PhoneBook) {
   this.phones$ =  this.phones$.filter(p  => p !== phone);
    this.phoneManager.deletePhoneNumber(phone.id).subscribe();

  }
  reset() {
    this.currentPhone = new PhoneBook(null, null, '', '', '');
  }

  openPhonebook() {
    this.phoneManager.getPhoneBook(this.userId).subscribe((response) => {
      this.phones$ = response;
    });
  }

  addPhone() {
    this.phoneManager.addPhoneNumber(this.userId, this.currentPhone).subscribe(
      (phone: PhoneBook) => {this.phones$.push(phone); }
    );
  }
  editPhone(phone: PhoneBook) {
    this.phoneManager.updatePhoneNumber(phone).subscribe( res =>
      this.reset()
     );
  }


}
