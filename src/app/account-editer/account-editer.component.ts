import { AccountManagerService } from './../account-manager.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-account-editer',
  templateUrl: './account-editer.component.html',
  styleUrls: ['./account-editer.component.css']
})
export class AccountEditerComponent implements OnInit {

  @Input() selected: User ;

  account: { id: number; userName: string; firstName: string; lastName: string; };
  constructor(private accountManager: AccountManagerService) { }

  ngOnInit() {

  }

}
