import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { API_BASE_URL } from 'src/app/shared/configs/url-config';
import { UserdataService } from 'src/app/shared/service/userdata.service';

@Component({
  selector: 'app-profile-details-container',
  templateUrl: './profile-details-container.component.html',
  styleUrls: ['./profile-details-container.component.scss']
})
export class ProfileDetailsContainerComponent {
  user: any;
  users: any[] = [];
  Title: any;
  showDiv: boolean = false;
  selectedUserIndex: number | null = null;
  constructor(
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private userDataService: UserdataService
  ) {}
  
  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
  selectUser(index: number) {
    this.selectedUserIndex = index;
  }
  toggleDiv() {
    this.showDiv = !this.showDiv;
  }
  
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
    
        this.updatePageTitle();
      }
      this.getDataFromAPI();
    });

    if (this.userDataService.user) {
      this.user = this.userDataService.user;
    } else {
      this.user = history.state.user;
      this.userDataService.user = this.user;
    }

    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }
  
  getDataFromAPI(): void {
    const url = API_BASE_URL;
    this.http.get<any>(url).subscribe(data => {
      this.users = data.users;
      console.log('Users:',this.users);

    });
  }
  
  updatePageTitle() {
    const currentRoute = this.router.routerState.root.firstChild;
    if (currentRoute) {
      this.Title = currentRoute.snapshot.data['pageTitle'] || 'Profile';
    }
  }
}