import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { faSearch, faHouse, faComment, faUser, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // faSearch = faSearch;
  // faHouse = faHouse;
  // faComment = faComment;
  // faUser = faUser;
  // faCirclePlus = faCirclePlus;

  constructor(private router: Router) {

  }

  clickHome() {
    this.router.navigate(['home']);
  }

  openLoginModal() {

  }

  openChat() {
    this.router.navigate(['chat']);
  }

  uploadProduct() {
    this.router.navigate(['upload']);
  }
}
