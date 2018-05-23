import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreateNewComponent } from './customer-create-new.component';

describe('CustomerCreateNewComponent', () => {
  let component: CustomerCreateNewComponent;
  let fixture: ComponentFixture<CustomerCreateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCreateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
