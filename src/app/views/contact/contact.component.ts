import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Campo de correo con validación
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      comment: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form Data:', this.formGroup.value);
      alert('Form submitted successfully!');
      this.formGroup.reset();
    } else {
      alert('Please complete all fields correctly.');
    }
  }
}
