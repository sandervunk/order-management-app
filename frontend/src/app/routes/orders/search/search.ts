import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrderSearchCriteria } from '../../../model/order.type';
import { countries } from '../../../app.config';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.html',
  standalone: true,
  styleUrl: './search.scss',
})
export class Search {
  submitSearch = output<OrderSearchCriteria>();

  formGroup = new FormGroup({
    country: new FormControl(''),
    description: new FormControl(''),
  });

  onSubmit(): void {
    this.submitSearch.emit(this.formGroup.value);
  }

  protected readonly countries = countries;
}
