import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChoiceComponent } from './choice/choice.component';

// material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChoiceItemComponent } from './choice/choice-item/choice-item.component';
import { ChoiceEditComponent } from './choice/choice-edit/choice-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {FlexModule} from "@angular/flex-layout";
import { QuestionsComponent } from './questions/questions.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';

const materialImports = [
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    ChoiceComponent,
    ChoiceItemComponent,
    ChoiceEditComponent,
    QuestionsComponent,
    QuestionEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...materialImports,
    ReactiveFormsModule,
    FormsModule,
    FlexModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    QuestionEditComponent
  ],
})
export class AppModule {}
