import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute, private data:DataService) { }
  name: string;
  model: string;
  price: string;
  color: string;
  memory: string;
  currentid: number;
  ngOnInit(): void {

    this.currentid = this.activeRoute.snapshot.params.id;
    console.log(this.currentid);
    let viewProductID = this.data.editProductID(this.currentid);
    console.log(viewProductID);
    this.name = viewProductID.name;
    this.model = viewProductID.model;
    this.price = viewProductID.price;
    this.color = viewProductID.color;
    this.memory = viewProductID.memory;
    console.log(viewProductID);
  }

}
