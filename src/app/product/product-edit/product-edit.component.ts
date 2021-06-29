import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  currentid: number;
  constructor(private fb: FormBuilder, private activeRoute:ActivatedRoute, private data:DataService, private route:Router) {
   
   }
  formGroup: FormGroup;
  editProducts: object
  viewProduct: any
  ngOnInit(): void {

    

    this.buildForm();

  }

  buildForm() {

    this.currentid = this.activeRoute.snapshot.params.id;
    let currentProductID = this.data.editProductID(this.currentid);
    console.log(currentProductID);
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      model: ['', Validators.required],
      price: ['', Validators.required],
      color: ['', Validators.required],
      memory: ['', Validators.required]
    })

    this.formGroup.patchValue(currentProductID)

  }

  editProduct(){
    console.log(this.formGroup.value);
    this.data.updateProductID(this.currentid, this.formGroup.value);
    this.route.navigate(["dashboard/product/productList"]);
  }

}
