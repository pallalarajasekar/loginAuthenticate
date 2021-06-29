import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute, private data:DataService) { }
  name: string;
  ids: string;
  age: string;
  location: string;
  currentid: number
  ngOnInit(): void {

    this.currentid = this.activeRoute.snapshot.params.id;
    let viewuser = this.data.editUserID(this.currentid);
    this.name = viewuser.name;
    this.ids = viewuser.ids;
    this.age = viewuser.age;
    this.location = viewuser.location;
    console.log(viewuser);
  }

}


