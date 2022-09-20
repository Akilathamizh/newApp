import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  twoway:any;
isdisabled:boolean=true;
isActive:boolean=true;
// planets=['earth','mars'];
// fruits=[{fruitId:1,fruitName:'apple'},{fruitId:2,fruitName:'Orange'}]
planets = [{planetId:1,planetName:'earth'},{planetId:2,planetName:'mars'},{planetId:3,planetName:'saturn'}]

  constructor() { }

  ngOnInit(): void {
  }
  onbtn(){
    this.isdisabled=true;
    this.twoway='';

  }
  oninput(event:any){
    this.isdisabled=false;
    console.log(event)
  }

}
