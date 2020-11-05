import { Component, OnInit } from '@angular/core';

import { PromptService } from '../services/prompt.service';
import { QuipService } from '../services/quip.service';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css'],
})
export class WinnersComponent implements OnInit {
  quipForm;
  prompts: { id: number; isUsed: boolean; promptText: string }[];
  quips: {
    id: number;
    promptId: number;
    quipText: string;
    score: number;
  }[];

  constructor(
    private promptService: PromptService,
    private quipService: QuipService
  ) {}

  async ngOnInit() {
    await this.getPrompts();
    await this.getQuips();
  }

  async getPrompts() {
    this.promptService.getPrompts().subscribe((res) => {
      this.prompts = res.prompts;
      return true;
    });
  }

  async getQuips() {
    this.quipService.getQuips().subscribe((res) => {
      this.quips = res.quips;
      return true;
    });
  }

  getQuipsByPromptId(id: number) {
    return this.quips.filter((i) => i.promptId == id);
  }
}
