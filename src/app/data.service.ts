import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productList: Array<any> = [];
  userList: Array<any> = [];
  constructor() { }

  addProduct(data){
    data.id = this.productList.length + 1;
    this.productList.push(data);
    console.log(this.productList);
  }

  addUser(data){
    data.id = this.userList.length + 1;
    this.userList.push(data);
    console.log(this.userList);
  }

  returnProduct(){
    return this.productList;
  }

  returnUser(){
    console.log(this.userList);
    return this.userList;
  }

  editProductID(id:number){
    console.log(id);
    console.log(this.productList.find(p => p.id == id));
    return this.productList.find(p => p.id == id);
  }

  editUserID(id:number){
    console.log(id);
    return this.userList.find(u => u.id == id);
  }

  updateProductID(updateId: number, data:any){
    let index = this.productList.findIndex(p => p.id == updateId);
    data.id = updateId;
    this.productList[index] = data;
  }

  updateUserID(updateUserId: number, data:any){
    let index = this.userList.findIndex(u => u.id == updateUserId);
    data.id = updateUserId;
    this.userList[index] = data;
  }

  deleteByProductId(id:number){
    this.productList = this.productList.filter((p) => p.id !== id);
    console.log(this.productList);
  }

  deleteByUserId(id:number){
    this.userList = this.userList.filter((u) => u.id !== id);
    console.log(this.userList);
  }

}
