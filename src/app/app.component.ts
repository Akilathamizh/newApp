import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userDetails = {userId:1,userName:'New User'}
  title = 'newApp';
  // users= ['userr 1','user 2'];
  // title = 'newApp';
}
