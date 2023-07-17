import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, RouteReuseStrategy, Router } from '@angular/router';
import { API_BASE_URL } from 'src/app/shared/configs/url-config';
import { UserdataService } from 'src/app/shared/service/userdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private router: Router, private userDataService: UserdataService) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  ngOnInit() {
    if (this.userDataService.user) {
      this.user = this.userDataService.user;
    } else {
      this.user = history.state.user;
      this.userDataService.user = this.user;
    }
  }
  navigateToProfile(user: any) {
    this.userDataService.user = user;

  }
}
