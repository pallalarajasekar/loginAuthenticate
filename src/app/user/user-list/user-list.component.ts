import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user = []
  deleteId: number;
  constructor(private data:DataService) { }
  newUserList: any;
  editUserList: any;
  objIndex;
  ngOnInit(): void {

    this.user = this.data.returnUser();
    console.log(this.user);
  }

  deleteUser(id:number){
    this.deleteId = id;
  }
  removeUserID(){
    this.data.deleteByUserId(this.deleteId);
    this.user = this.data.returnUser();
  }

}
