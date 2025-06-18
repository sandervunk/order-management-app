import { Component, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { countries } from '../../../app.config';
import { Api } from '../../../services/api';
import { Order } from '../../../model/order.type';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-add-new',
  imports: [ReactiveFormsModule, MatSnackBarModule, NgClass],
  templateUrl: './add-new.html',
  standalone: true,
  styleUrl: './add-new.scss',
})
export class AddNew {
  constructor(private snackBar: MatSnackBar) {}

  protected readonly countries = countries;

  private dialogRef = inject(DialogRef, { optional: true });

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

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.api.postOrder(this.formGroup.value as Omit<Order, 'id'>).subscribe({
        next: () => {
          this.snackBar.open('Order successfully added!', '', {
            verticalPosition: 'top',
            duration: 3000,
            panelClass: ['snackbar-success'],
          });
          this.closeModal();
        },
        error: (err) => {
          const field = err?.error?.field;
          const message =
            err.error.message ?? 'Adding an order failed. Please try again';

          this.snackBar.open(message, '', {
            verticalPosition: 'top',
            duration: 3000,
            panelClass: 'snackbar-error',
          });

          if (field) {
            this.formGroup.get(field)?.setErrors({ backend: message });
            this.formGroup.get(field)?.markAsTouched();
          }
        },
      });
    }
  }

  closeModal() {
    this.dialogRef?.close();
  }

  isFieldInErrorState(key: keyof Order) {
    const field = this.formGroup.get(key);

    if (!field) {
      return false;
    }

    return field.touched && field.invalid;
  }
}
