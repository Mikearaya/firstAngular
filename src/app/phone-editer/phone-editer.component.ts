import { Component, OnInit, Input } from '@angular/core';
import { PhoneBook } from '../phone-book';
import { PhoneBookManagerService } from '../phone-book-manager.service';
import { ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common';

@Component({
  selector: 'app-phone-editer',
  templateUrl: './phone-editer.component.html',
  styleUrls: ['./phone-editer.component.css']
})
export class PhoneEditerComponent implements OnInit {

  currentPhone = new PhoneBook(null, null, '', '', '');
  accountId: number;
  action: string;
  phoneId: number;

  constructor(
              private phoneBookManager: PhoneBookManagerService,
              private activatedRoute: ActivatedRoute,
              private location: Location
        ) { }

  ngOnInit() {

      if (this.phoneId = + this.activatedRoute.snapshot.paramMap.get('contactId')) {
        this.action = 'view';
        this.phoneBookManager
                            .getPhone(this.phoneId)
                            .subscribe((phone: PhoneBook) =>  this.currentPhone = phone[0] );

      } else {
        this.action = 'new';
      }

      this.accountId = + this.activatedRoute.snapshot.paramMap.get('id');

  }

  addPhone(phone: PhoneBook) {
    this.phoneBookManager.addPhoneNumber(this.accountId, phone).subscribe( _ => this.location.back());
  }
  editPhone(phone: PhoneBook) {
    this.phoneBookManager.updatePhoneNumber(phone).subscribe(_ => this.location.back() );
  }
  deletePhone(phone: PhoneBook) {
    this.phoneBookManager.deletePhoneNumber(phone.id).subscribe();
  }


}
