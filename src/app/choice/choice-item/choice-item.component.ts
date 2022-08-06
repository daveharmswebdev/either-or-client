import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IChoice } from '../../models/IChoice';

@Component({
  selector: 'app-choice-item',
  templateUrl: './choice-item.component.html',
  styleUrls: ['./choice-item.component.scss'],
})
export class ChoiceItemComponent implements OnInit {
  @Input() choice!: IChoice;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<IChoice>();

  constructor() {}

  ngOnInit(): void {}

  emitDelete() {
    this.delete.emit(this.choice.id)
  }

  emitEdit() {
    this.edit.emit(this.choice)
  }
}
