import { Component, OnInit, Input } from '@angular/core';
import { PhoneBook } from '../phone-book';
import { PhoneBookManagerService } from '../phone-book-manager.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-phone-editer',
  templateUrl: './phone-editer.component.html',
  styleUrls: ['./phone-editer.component.css']
})
export class PhoneEditerComponent implements OnInit {

  @Input() currentPhone: PhoneBook;
  accountId: number;
  constructor(
              private phoneBookManager: PhoneBookManagerService,
              private activatedRoute: ActivatedRoute
        ) { }

  ngOnInit() {
    this.accountId = + this.activatedRoute.snapshot.paramMap.get('id');
    /* to reuse the component for viewing another
    this.currentPhone = this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.phoneBookManager.getPhoneBook(params.get('id')));
      */
  }
  addPhone() {
    this.phoneBookManager.addPhoneNumber(this.accountId, this.currentPhone).subscribe();
  }
  editPhone(phone: PhoneBook) {
    this.phoneBookManager.updatePhoneNumber(phone).subscribe( );
  }
  deletePhone(phone: PhoneBook) {
    this.phoneBookManager.deletePhoneNumber(phone.id).subscribe();
  }

}
