import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IChoice } from '../models/IChoice';
import { INewChoiceRequest } from '../models/INewChoiceRequest';

@Injectable({
  providedIn: 'root',
})
export class ChoiceService {
  private _baseUrl = environment.baseUrl + 'choices';

  private _choices = new BehaviorSubject<IChoice[]>([]);
  choices$ = this._choices.asObservable();

  constructor(private http: HttpClient) {}

  fetchChoices(): void {
    this.http
      .get<IChoice[]>(this._baseUrl)
      .subscribe((choices) => this._choices.next(choices));
  }

  createNewChoice(request: INewChoiceRequest) {
    return this.http
      .post<IChoice>(this._baseUrl, request)
      .pipe(tap(() => this.fetchChoices()));
  }

  deleteChoice(id: number) {
    return this.http
      .delete(this._baseUrl + '/' + id)
      .pipe(tap(() => this.fetchChoices()));
  }

  editChoice(request: IChoice): any {
    return this.http
      .put(this._baseUrl + '/' + request.id, request)
      .pipe(tap(() => this.fetchChoices()));
  }
}
