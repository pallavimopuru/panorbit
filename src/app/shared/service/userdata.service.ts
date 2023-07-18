import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../configs/url-config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  user: any;

  constructor(private http: HttpClient) {}
  getapi() {
    const url = API_BASE_URL;
    return this.http.get(url);
  }
}
