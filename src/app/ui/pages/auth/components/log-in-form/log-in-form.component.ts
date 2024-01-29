import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {
  loginForm!: FormGroup;
  showInvalidCredentialsMessage: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {};

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  };

  onSubmit() {
    if(this.loginForm.valid) {
      this.authService.logIn(this.loginForm.value)
      .subscribe((result) => {
        if(result) {
          this.loginForm.reset();
          this.router.navigate(['/admin/create-product']);
        } else {
          this.showInvalidCredentialsMessage = true;
        }
      })
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
