import { Component } from '@angular/core';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-classmate',
  styleUrl: './classmate.component.scss',
  templateUrl: './classmate.component.html'
})
export class ClassmateComponent {

  newScore: number[] = []
  constructor(private _examService: ExamService){
    this._examService.getScoresAsObservable().subscribe(score => {
      console.log('SCORES: ', score)
      this.newScore = score
    })
  }

}
