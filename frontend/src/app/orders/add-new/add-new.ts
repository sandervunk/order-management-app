import { Component, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { countries } from '../../app.config';
import { Api } from '../../services/api';
import { Order } from '../../model/order.type';

@Component({
  selector: 'app-add-new',
  imports: [ReactiveFormsModule],
  templateUrl: './add-new.html',
  standalone: true,
  styleUrl: './add-new.scss',
})
export class AddNew {
  api = inject(Api);

  formGroup = new FormGroup({
    orderNumber: new FormControl<number | null>(null, {
      validators: [Validators.required],
      nonNullable: true,
    }),
    paymentDescription: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    streetAddress: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    town: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    country: new FormControl('Estonia', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    amount: new FormControl<number | null>(null, {
      validators: [Validators.required],
      nonNullable: true,
    }),
    currency: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    paymentDueDate: new FormControl(new Date().toISOString().split('T')[0], {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  protected readonly countries = countries;

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.api
        .postOrder(this.formGroup.value as Omit<Order, 'id'>)
        .subscribe(() => this.closeModal());
    }
  }

  private dialogRef = inject(DialogRef, { optional: true });

  closeModal() {
    this.dialogRef?.close();
  }
}
