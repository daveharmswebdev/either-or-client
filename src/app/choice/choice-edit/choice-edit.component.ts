import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IChoice } from 'src/app/models/IChoice';

@Component({
  selector: 'app-choice-edit',
  templateUrl: './choice-edit.component.html',
  styleUrls: ['./choice-edit.component.scss'],
})
export class ChoiceEditComponent implements OnInit {
  choiceForm = this.fb.group({
    name: '',
    description: '',
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ChoiceEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { choice: IChoice }
  ) {}

  ngOnInit(): void {
    this.choiceForm.patchValue({
      name: this.data?.choice.name,
      description: this.data?.choice.description,
    });
  }

  submitChoice() {
    this.dialogRef.close(this.choiceForm.value);
  }
}
