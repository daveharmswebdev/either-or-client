import { IChoice } from './IChoice';

export interface IQuestion {
  id: number;
  title: string;
  questionText: string;
  createdDate: Date;
  choices: IChoice[];
}
