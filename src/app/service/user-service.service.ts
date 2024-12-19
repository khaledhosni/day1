import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../data/model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  BASE_URL: string='https://618ebc2e50e24d0017ce141f.mockapi.io/';

  constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<User[]>{

    let headers=new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+getToken()
 
    });

    return this.httpClient.get<User[]>(this.BASE_URL+'Users',{headers});

  }
}
function getToken() {
}

