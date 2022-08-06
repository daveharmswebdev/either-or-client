import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IQuestion } from '../models/IQuestion';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private _baseUrl = environment.baseUrl + 'questions';

  private _questions = new BehaviorSubject<IQuestion[]>([]);
  questions$ = this._questions.asObservable();

  constructor(private http: HttpClient) {}

  fetchQuestions(): void {
    this.http
      .get<IQuestion[]>(this._baseUrl)
      .subscribe((questions) => this._questions.next(questions));
  }
}
