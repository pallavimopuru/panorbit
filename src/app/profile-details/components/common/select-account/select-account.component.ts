import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { API_BASE_URL } from 'src/app/shared/configs/url-config';
import { NavigationEnd, RouteReuseStrategy, Router } from '@angular/router';
@Component({
  selector: 'app-select-account',
  templateUrl: './select-account.component.html',
  styleUrls: ['./select-account.component.scss']
})
export class SelectAccountComponent {
  Title="Select an account";
  users: any[] = [];



  // Inject the Router in the constructor
  constructor(private route: Router,private http:HttpClient,private routeReuseStrategy: RouteReuseStrategy) {}

  ngOnInit(): void {
    this.getDataFromAPI();
  }
// Navigate to the profile page with the selected user's data
navigateToProfile(user: any) {
  sessionStorage.setItem('user',JSON.stringify(user));
  this.route.navigate(['/profile'], { state: { user: user } });
  this.route.events.subscribe((event: any) => {
    if (event instanceof NavigationEnd) {
      this.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      };
    }
  });
}

  getDataFromAPI(): void {
    const url = API_BASE_URL;
    this.http.get<any>(url).subscribe(data => {
      this.users = data.users;
      console.log('Users:',this.users);

    });
  }
}
