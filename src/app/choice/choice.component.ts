import { Component, Input, OnInit } from '@angular/core';
import { IChoice } from '../models/IChoice';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  @Input() choice!: IChoice;

  constructor() {}

  ngOnInit(): void {}
}
