import { User } from './../user';
import { AccountManagerService } from './../account-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accounts$: User[];
  constructor(private dataService: AccountManagerService) { }

  ngOnInit() {
    this.dataService.getAccounts()
    .subscribe((result) =>  {
      this.accounts$ = result;
      }  );
  }

  deleteAccount(account: User) {
    this.dataService.delete(account.id).subscribe();
   this.accounts$ = this.accounts$.filter(acc => {
      return acc !== account;
    });
  }

}
