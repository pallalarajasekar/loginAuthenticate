import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  
  product: Array<Object> = [];
  deleteId: number;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    
    this.product = this.data.returnProduct();

  }
  deleteProduct(id:number){
    this.deleteId = id;
  }
  removeProductID(){
    this.data.deleteByProductId(this.deleteId);
    this.product = this.data.returnProduct();
  }

}