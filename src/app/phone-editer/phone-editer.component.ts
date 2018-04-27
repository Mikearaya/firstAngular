import { PhoneBook } from './../phone-book';
import { Component, OnInit, Input } from '@angular/core';
import { PhoneBook } from '../phone-book';
import { PhoneBookManagerService } from '../phone-book-manager.service';
import { ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-phone-editer',
  templateUrl: './phone-editer.component.html',
  styleUrls: ['./phone-editer.component.css']
})
export class PhoneEditerComponent implements OnInit {

  currentPhone: PhoneBook;
  accountId: number;
  action: string;
  phoneId: number;
    contactForm: FormGroup;

  constructor(
              private phoneBookManager: PhoneBookManagerService,
              private activatedRoute: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder
        ) {
          this.contactForm = this.formBuilder.group({
            contactName: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            phoneType: ['', Validators.required ]

          });
        }

  ngOnInit() {

      if (this.phoneId = + this.activatedRoute.snapshot.paramMap.get('contactId')) {
        this.action = 'view';
        this.phoneBookManager
                            .getPhone(this.phoneId)
                            .subscribe((phone: PhoneBook) => {

                              this.currentPhone = phone[0];
                              this.contactForm.reset({
                                contactName: this.currentPhone.name,
                                phoneNumber: this.currentPhone.number,
                                phoneType: this.currentPhone.type
                              });

                            } );

      } else {
        this.action = 'new';
      }

      this.accountId = + this.activatedRoute.snapshot.paramMap.get('id');

  }

  addPhone(phone: PhoneBook) {
    this.phoneBookManager.addPhoneNumber(this.accountId, phone).subscribe( _ => this.location.back());
  }
  editPhone() {
    const form = this.contactForm.value;
   const phone: PhoneBook = {
      id: this.currentPhone.id,
      name: form.contactName,
      number: form.phoneNumber,
      type: form.phoneType,
      userId: this.accountId
    };

    this.phoneBookManager.updatePhoneNumber(phone).subscribe(_ => this.location.back() );
  }
  deletePhone(phone: PhoneBook) {
    this.phoneBookManager.deletePhoneNumber(phone.id).subscribe();
  }


}
