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
      console.log(result);
      this.accounts$ = result;
      }  );
  }

}
