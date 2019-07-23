import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterDetailPage } from './roster-detail.page';

describe('RosterDetailPage', () => {
  let component: RosterDetailPage;
  let fixture: ComponentFixture<RosterDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
