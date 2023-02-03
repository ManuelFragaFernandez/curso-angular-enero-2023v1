import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public items: MenuItem[] = [];
  public form!: FormGroup;

  public psw: string = '';
  public email: string = '';

  public formulario: boolean = true;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.form.value);
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onRegistrarse() {}
}
