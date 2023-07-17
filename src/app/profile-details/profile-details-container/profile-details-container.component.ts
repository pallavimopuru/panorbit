import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/shared/service/userdata.service';

@Component({
  selector: 'app-profile-details-container',
  templateUrl: './profile-details-container.component.html',
  styleUrls: ['./profile-details-container.component.scss']
})
export class ProfileDetailsContainerComponent {
  user: any;



  constructor(private router: Router, private userDataService: UserdataService) {}


  isActive(route: string): boolean {
    return this.router.url === route;
  }
  ngOnInit() {
    this.user = this.userDataService.user || history.state.user;
    this.userDataService.user = this.user;
  }

}
