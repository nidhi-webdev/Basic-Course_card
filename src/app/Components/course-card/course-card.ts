import { ChangeDetectionStrategy, Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CourseType } from '../../Models/courseModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-card',
  imports: [FormsModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCard {

  @Input({
    required: true
  }) 
  course!: CourseType;

  @Input({
    required: true
  })
  index: number | undefined;

  @Output()
  CardClicked = new EventEmitter<CourseType>();

  constructor() {}

  onCourseView() {
    this.CardClicked.emit(this.course);
    console.log("Clicked From Cards")
  }

  // change Detection 
  Onchange(newValue: string) {
   this.course.description = newValue;
  }

  

  // using Change Detection.onpush
  childData: string = '';

  @Output() 
  dataEmitter = new EventEmitter<string>();

  senddata() {
   this.dataEmitter.emit(this.childData);
  }

}
