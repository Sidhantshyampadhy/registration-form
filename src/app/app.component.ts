import { Component } from '@angular/core';
import { Form } from './form';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'registration-form';
  sizes = ['5', '10', '20', '15'];
  date = 'May 25, 2021';
  defaultCheck1: boolean = true;
  registrationForm!: FormGroup;
  subscription: any;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.onChanges();
  }

  ngonDestroy() {
    this.subscription.unsubscribe();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      defaultCheck1: [false],
      firstName: ['Sidhant', Validators.required],
      lastName: ['Padhy', Validators.required],
      email: ['sidhant@gmail.com', Validators.required],
      title: ['Developer'],
      companyName: ['Technologies'],
      size: [this.sizes[0]],
      description: ['Des'],
    });
  }

  onChanges(): void {
    this.subscription = this.registrationForm
      ?.get('defaultCheck1')
      ?.valueChanges.subscribe((val) => {
        this.defaultCheck1 = false;
      });
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
