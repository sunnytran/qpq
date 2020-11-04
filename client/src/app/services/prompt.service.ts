import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PromptsResponse } from './payloads/prompts-response';
import { PromptResponse } from './payloads/prompt-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromptService {
  constructor(private http: HttpClient) {}

  getPrompts(): Observable<PromptsResponse> {
    return this.http.get<PromptsResponse>('http://localhost:5000/Prompt');
  }

  getFirstUnusedPrompt(): Observable<PromptResponse> {
    return this.http.get<PromptResponse>(
      'http://localhost:5000/Prompt/byFirstUnused?isGettingFirstUnused=true'
    );
  }
}
