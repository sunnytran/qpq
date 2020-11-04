import { Component, OnInit } from '@angular/core';
import { PromptService } from '../services/prompt.service';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css'],
})
export class PromptComponent implements OnInit {
  prompt: { id: number; isUsed: boolean; promptText: string };

  constructor(private service: PromptService) {}

  loadPrompt() {
    // this.service.getPrompts().subscribe((res) => (this.prompts = res.prompts));
    this.service
      .getFirstUnusedPrompt()
      .subscribe((res) => (this.prompt = res.prompt));
  }

  ngOnInit(): void {
    this.loadPrompt();
  }
}
