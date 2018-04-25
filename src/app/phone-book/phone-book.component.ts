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
export class PhoneBookComponent implements OnInit, PhoneBook {

  phone: { userId: number; number: string; type: string; };
  
  phones$ ;
  constructor(private phoneManager: PhoneBookManagerService,
              private activeRoute: ActivatedRoute,
            private location: Location) { }

  ngOnInit() {
    this.openPhonebook();
    
  }
  
  openPhonebook() {
   let id =+ this.activeRoute.snapshot.paramMap.get('id');
    this.phoneManager.getPhoneBook(id).subscribe((response) => {
      this.phones$ = response;
    });
  }

}
