import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNew } from './add-new';

describe('AddNew', () => {
  let component: AddNew;
  let fixture: ComponentFixture<AddNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
