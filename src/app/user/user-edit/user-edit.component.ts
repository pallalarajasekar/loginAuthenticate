import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  constructor(private fb: FormBuilder, private activeRoute:ActivatedRoute, private data:DataService, private route:Router) { }
  formGroup: FormGroup;
  currentid: number;
  ngOnInit(): void {


    this.buildForm();
  }

  buildForm() {

    this.currentid = this.activeRoute.snapshot.params.id;
    let currentProductID = this.data.editUserID(this.currentid);
    console.log(currentProductID);

    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      ids: ['', Validators.required],
      age: ['', Validators.required],
      location: ['', Validators.required],
    })

    this.formGroup.patchValue(currentProductID)

  }
  editUser() {
    console.log(this.formGroup.value);
    this.data.updateUserID(this.currentid, this.formGroup.value);
    this.route.navigate(["dashboard/user/userList"]);
  }
}