import { Component, OnInit } from '@angular/core';

import { PromptService } from '../services/prompt.service';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css'],
})
export class PromptComponent implements OnInit {
  prompt: { id: number; isUsed: boolean; promptText: string };
  quipForm;

  constructor(
    private promptService: PromptService,
    private formBuilder: FormBuilder
  ) {
    this.quipForm = this.formBuilder.group({
      quipText: '',
    });
  }

  ngOnInit(): void {
    this.promptService
      .getFirstUnusedPrompt()
      .subscribe((res) => (this.prompt = res.prompt));
  }

  onSubmit(quipData) {
    this.quipForm.reset();
    console.log(quipData);
  }
}
