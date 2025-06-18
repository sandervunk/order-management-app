import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Results } from './results';
import { RouterModule } from '@angular/router';

describe('Results', () => {
  let component: Results;
  let fixture: ComponentFixture<Results>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Results, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Results);
    fixture.componentRef.setInput('orderItems', []);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
