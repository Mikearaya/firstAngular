import { Component, OnInit } from '@angular/core';
import { AccountManagerService } from './account-manager.service';
import {User} from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Phone List';
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
