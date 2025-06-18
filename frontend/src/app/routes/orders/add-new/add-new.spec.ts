import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNew } from './add-new';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('AddNew', () => {
  let component: AddNew;
  let fixture: ComponentFixture<AddNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNew],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
