import { Component, OnInit } from '@angular/core';
import { QuipService } from '../services/quip.service';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css'],
})
export class WinnersComponent implements OnInit {
  quips: { id: number; promptId: number; quipText: string; score: number }[];

  constructor(private quipService: QuipService) {}

  ngOnInit(): void {}
}
