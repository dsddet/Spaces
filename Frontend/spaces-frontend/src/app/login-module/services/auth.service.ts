import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}


  getUser(id){
    return this.http.get('http://localhost:4201/users/'+id);
  }
}
