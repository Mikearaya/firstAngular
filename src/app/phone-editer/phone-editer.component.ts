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

  @Input() contacts: PhoneBook[];
    isUpdate: boolean;
    currentPhone: PhoneBook;
    accountId: number;
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
        this.phoneBookManager
                            .getPhone(this.phoneId)
                            .subscribe((phone: PhoneBook) => this.setFormModel(phone[0]));
          this.isUpdate = true;
      } else {
        this.isUpdate = false;
        this.setFormModel(new PhoneBook(null, null, '', '', ''));
      }

      this.accountId = + this.activatedRoute.snapshot.paramMap.get('id');

  }
    saveChanges() {
      if (this.isUpdate) {
        this.updatePhone();
      } else {
        this.addPhone();
      }

    }
  setFormModel(phone: PhoneBook) {
    this.currentPhone = phone;

    this.contactForm.reset({
        contactName: phone.name,
        phoneNumber: phone.number,
        phoneType: phone.type
    });
  }

      prepareDataModel(): PhoneBook {

          const form = this.contactForm.value;
          const phone: PhoneBook = {
                id: this.currentPhone.id,
                name: form.contactName,
                number: form.phoneNumber,
                type: form.phoneType,
                userId: this.accountId
               };
          return phone;
      }

    addPhone() {
      const phone = this.prepareDataModel();
      this.phoneBookManager.addPhoneNumber(this.accountId, phone)
                                            .subscribe( (p: PhoneBook) => {
                                              this.contacts.push(p);
                                            });
    }

    updatePhone() {
      const phone = this.prepareDataModel();
      this.phoneBookManager.updatePhoneNumber(phone).subscribe(_ => this.location.back() );
    }
    deletePhone(phone: PhoneBook) {
      this.phoneBookManager.deletePhoneNumber(phone.id).subscribe();
    }


}
