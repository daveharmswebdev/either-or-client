import { Component, OnInit } from '@angular/core';
import { ChoiceService } from '../services/choice-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ChoiceEditComponent } from './choice-edit/choice-edit.component';
import { switchMap } from 'rxjs';
import { INewChoiceRequest } from '../models/INewChoiceRequest';
import { IChoice } from '../models/IChoice';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  choices$ = this.choiceService.choices$;

  constructor(
    private choiceService: ChoiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  displayNewButtonForm() {
    const dialogRef = this.dialog.open(ChoiceEditComponent, {
      width: '500px',
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap((request: INewChoiceRequest) =>
          this.choiceService.createNewChoice(request)
        )
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  handleEdit(choice: IChoice) {
    const dialogRef = this.dialog.open(ChoiceEditComponent, {
      width: '500px',
      data: {
        choice,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap((request: IChoice) =>
          this.choiceService.editChoice({ ...choice, ...request })
        )
      )
      .subscribe((response) => console.log(response));
  }

  handleDelete(id: number) {
    this.choiceService.deleteChoice(id).subscribe(() => {});
  }
}
