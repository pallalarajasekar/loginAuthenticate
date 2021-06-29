import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private data: DataService, private route: Router) { }
  formGroup: FormGroup;
  newProduct: object
  ngOnInit(): void {

    this.buildForm();



  }

  buildForm() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      model: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(6)]],
      color: ['', [Validators.required]],
      memory: ['', [Validators.required]]
    })

  }
  createProduct() {
    console.log(this.formGroup.value);
    this.data.addProduct(this.formGroup.value);
    this.route.navigate(["/dashboard/product/productList"]);
  }
}