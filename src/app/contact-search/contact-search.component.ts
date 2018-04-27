import { PhoneBookManagerService } from './../phone-book-manager.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { PhoneBook } from '../phone-book';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})
export class ContactSearchComponent implements OnInit {
  @Input() accountId: number;

  contacts$: Observable<PhoneBook[]>;
   searchedName = new Subject<string>();

  constructor(private phoneBookService: PhoneBookManagerService) { }

  ngOnInit() {

    this.contacts$ = this.searchedName.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((text: string) => this.phoneBookService.searchPhone(this.accountId, text) ),
    );

  }

  search(text: string): void {
    this.searchedName.next(text);
  }

}
