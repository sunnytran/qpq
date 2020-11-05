import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prompt-card',
  templateUrl: './prompt-card.component.html',
  styleUrls: ['./prompt-card.component.css'],
})
export class PromptCardComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
