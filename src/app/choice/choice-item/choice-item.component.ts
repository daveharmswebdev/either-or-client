import { Component, Input, OnInit } from '@angular/core';
import { IChoice } from '../../models/IChoice';

@Component({
  selector: 'app-choice-item',
  templateUrl: './choice-item.component.html',
  styleUrls: ['./choice-item.component.scss'],
})
export class ChoiceItemComponent implements OnInit {
  @Input() choice!: IChoice;

  constructor() {}

  ngOnInit(): void {}
}
