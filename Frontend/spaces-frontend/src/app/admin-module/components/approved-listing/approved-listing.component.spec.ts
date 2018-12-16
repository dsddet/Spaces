import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedListingComponent } from './approved-listing.component';

describe('ApprovedListingComponent', () => {
  let component: ApprovedListingComponent;
  let fixture: ComponentFixture<ApprovedListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
