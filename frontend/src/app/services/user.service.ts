import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { User } from "../models/user";
import { Observable, of } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded" }),

};
const apiUrl = "http://localhost:8080/api/buyandsell/users/";

@Injectable({
  providedIn: "root",
})
export class UserService {

  currentUserId: number;

  constructor(private http: HttpClient, private router: Router) {}

  setCurrentUserId(id: number) {
    this.currentUserId = id;
  }

  getCurrentUserId(): number {
    return this.currentUserId;
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(apiUrl);
  }

  getOne(id: number): Observable<User> {
    return this.http.get<User>(apiUrl + "/" + id);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(apiUrl + "/user/" + username);
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/" + id);
  }

  addUser(user: User): Observable<any> {

    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("username", user.username);
    bodyEncoded.append("email", user.email);
    bodyEncoded.append("password", user.password);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}

