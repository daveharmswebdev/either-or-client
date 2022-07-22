import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialogRef} from "@angular/material/dialog";

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
  ) {}

  ngOnInit(): void {}

  submitChoice() {
    this.dialogRef.close(this.choiceForm.value);
  }
}
