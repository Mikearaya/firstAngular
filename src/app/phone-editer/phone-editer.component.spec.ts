import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneEditerComponent } from './phone-editer.component';

describe('PhoneEditerComponent', () => {
  let component: PhoneEditerComponent;
  let fixture: ComponentFixture<PhoneEditerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneEditerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
