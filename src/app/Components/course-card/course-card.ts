import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseType } from '../../Models/courseModel';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input({
    required: true
  }) course!: CourseType;

  @Output()
  CardClicked = new EventEmitter<CourseType>();

  constructor() {}

  onCourseView() {
    this.CardClicked.emit(this.course);
    console.log("Clicked From Cards")
  }

}
