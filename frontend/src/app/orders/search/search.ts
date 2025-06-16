import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.html',
  standalone: true,
  styleUrl: './search.scss',
})
export class Search {
  @Output() onSearchSubmit = new EventEmitter<{
    country?: string | null;
    description?: string | null;
  }>();

  form = new FormGroup({
    country: new FormControl(''),
    description: new FormControl(''),
  });

  countries = ['Estonia', 'Finland', 'Latvia', 'Lithuania', 'Norway', 'Sweden'];

  onSubmit(): void {
    this.onSearchSubmit.emit(this.form.value);
  }
}
