import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChoice } from '../models/IChoice';
import {INewChoiceRequest} from "../models/INewChoiceRequest";

@Injectable({
  providedIn: 'root',
})
export class ChoiceService {
  constructor(private http: HttpClient) {}

  fetchChoices(): Observable<IChoice[]> {
    return this.http.get<IChoice[]>('http://localhost:8080/api/v1/choices');
  }

  createNewChoice(request: INewChoiceRequest) {
    return this.http.post<IChoice>('http://localhost:8080/api/v1/choices', request);
  }
}
