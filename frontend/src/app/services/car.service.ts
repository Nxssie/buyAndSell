import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Car } from "../models/car";
import { Observable, of } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded" }),

};
const apiUrl = "http://localhost:8080/api/buyandsell";

@Injectable({
  providedIn: "root",
})
export class CarService {

  currentCarId: number;

  constructor(private http: HttpClient, private router: Router) {}

  setCurrentCarId(id: number) {
    this.currentCarId = id;
  }

  getCurrentCarId(): number {
    return this.currentCarId;
  }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(apiUrl);
  }

  getOne(id: number): Observable<Car> {
    return this.http.get<Car>(apiUrl + "/" + id);
  }

  deleteCar(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/" + id);
  }

  getCarsByUserId(id: number): Observable<Car[]> {
    return this.http.get<Car[]>(apiUrl + "/cars/" + id);
  }

  addCar(car: Car, userId: number): Observable<any> {

    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("brand", car.brand);
    bodyEncoded.append("model", car.model);
    bodyEncoded.append("kms", car.kms.toString());
    bodyEncoded.append("year", car.year.toString());
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl + "/" + userId, body, httpOptions);
  }

  updateCar(car: Car, id: number): Observable<any> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("brand", car.brand);
    bodyEncoded.append("model", car.model);
    bodyEncoded.append("kms", car.kms.toString());
    bodyEncoded.append("year", car.year.toString());
    let body = bodyEncoded.toString();

    return this.http.put(apiUrl + "/" + id, body, httpOptions);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}

