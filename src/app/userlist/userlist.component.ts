import { Component, OnInit } from '@angular/core';
interface User {
  id : number,
  email : string,
  first_name : string,
  last_name :  string,
  avatar : string
}
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  userList:User[] = [];
  constructor() { }

  ngOnInit(): void {
    this.userList = [
      {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    }]
  }

}
