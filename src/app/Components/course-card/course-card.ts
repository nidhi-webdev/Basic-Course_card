import { Component, Input } from '@angular/core';
// import { NgIf } from '@angular/common';
import { CourseType } from '../../Models/courseModel';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course!: CourseType;

  constructor() {}

}
