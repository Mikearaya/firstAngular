import { Component, OnInit, Input } from '@angular/core';
import { AccountManagerService } from '../account-manager.service';
import { User } from '../user';


@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
 @Input() account: User;
 phones$;
  constructor(private accountManager: AccountManagerService) { }

  ngOnInit() {
  }

  openPhonebook(id: number) {
    this.accountManager.getPhoneBook(id).subscribe((response) => {
      this.phones$ = response;
    });
  }

}
