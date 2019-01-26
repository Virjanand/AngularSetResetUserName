import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "FirstName";

  resetUserName() {
    this.userName = "";
  }

  isUserNameEmpty() {
    if (this.userName == "")
      return true;
    return false;
  }
}
