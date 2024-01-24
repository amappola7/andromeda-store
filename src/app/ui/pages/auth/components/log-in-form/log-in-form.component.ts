import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {};

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  };

  onSubmit() {
    if(this.loginForm.valid) {
      this.loginForm.reset();
    } else {
      console.log('Invalid form', this.loginForm.value);
      this.loginForm.markAllAsTouched();
    }
  }
}
