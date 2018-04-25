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
  selected = new PhoneBook(null, null, '', '');
  phones$: PhoneBook[];
  constructor(private phoneManager: PhoneBookManagerService,
              private activeRoute: ActivatedRoute,
            private location: Location) { }

  ngOnInit() {
    this.openPhonebook();
    

  }
  editPhone(phone: PhoneBook) {
    this.phoneManager.updatePhoneNumber(phone).subscribe( );
  }
  addPhone(phone: PhoneBook) {
    phone.id = this.phones$.length + 1;
    this.phoneManager.addPhoneNumber(this.userId, phone).subscribe(
      (response: PhoneBook) => console.log(response)
    );
  }
  deletePhone(phone: PhoneBook) {
    this.phoneManager.deletePhoneNumber(phone.id).subscribe();
  }
  openPhonebook() {
   this.userId =+ this.activeRoute.snapshot.paramMap.get('id');
    this.phoneManager.getPhoneBook(this.userId).subscribe((response) => {
      this.phones$ = response;
    });
  }

}
