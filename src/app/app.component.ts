import { Component } from '@angular/core';
import { ChoiceService } from './services/choice-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  choices$ = this.choiceService.fetchChoices();

  constructor(private choiceService: ChoiceService) {}
}
