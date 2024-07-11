import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // subjectValue = new Subject();

  // constructor() {
  //   this.subjectValue.subscribe((value: any) => {
  //     console.log("Subscriber 1", value);
  //   })
  //   this.subjectValue.next("Emission 1");

  //   this.subjectValue.subscribe((value: any) => {
  //     console.log("Subscriber 2", value);
  //   })

  //   this.subjectValue.next("Emission 2");

  // }


  behaviorSubjectValue = new BehaviorSubject('');

  constructor() {
    this.behaviorSubjectValue.subscribe((value: any) => {
      console.log("Subscriber 1", value);
    })
    this.behaviorSubjectValue.next("Emission 1");

    this.behaviorSubjectValue.subscribe((value: any) => {
      console.log("Subscriber 2", value);
    })

    this.behaviorSubjectValue.next("Emission 2");

  }
}
