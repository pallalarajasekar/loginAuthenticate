import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  constructor(private fb: FormBuilder, private data: DataService, private route: Router) { }
  formGroup: FormGroup;
  newUser: object
  ngOnInit(): void {

    this.buildForm();



  }

  buildForm() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      ids: ['', Validators.required],
      age: ['', Validators.required],
      location: ['', Validators.required],
    })

  }
  createUser() {
    console.log(this.formGroup.value);
    this.data.addUser(this.formGroup.value);
    this.route.navigate(["dashboard/user/userList"]);
  }
}