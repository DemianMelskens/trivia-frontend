import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Question} from "../domain/question.model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Answer} from "../domain/answer.model";
import {take} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class TriviaClient {

  constructor(private http: HttpClient) {
  }

  public getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.apiUrl}/trivia/questions`).pipe(take(1));
  }

  public checkAnswer(answer: Answer): Observable<boolean> {
    return this.http.post<boolean>(`${environment.apiUrl}/trivia/checkanswer`, answer).pipe(take(1));
  }
}
