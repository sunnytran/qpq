import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuipsResponse } from './payloads/quips-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuipService {
  constructor(private http: HttpClient) {}

  getQuipsByPromptId(id: number): Observable<QuipsResponse> {
    return this.http.get<QuipsResponse>(
      `http://localhost:5000/Prompt/?promptId=${id}`
    );
  }
}
