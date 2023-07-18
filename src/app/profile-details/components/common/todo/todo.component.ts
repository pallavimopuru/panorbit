import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { API_BASE_URL } from 'src/app/shared/configs/url-config';
import { UserdataService } from 'src/app/shared/service/userdata.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  Title='Todo'


  user: any;
  users: any[] = [];

constructor(    private router: Router,
  private http: HttpClient,
  private activatedRoute: ActivatedRoute,
  private userDataService: UserdataService){}
ngOnInit() {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
  
  
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
}

