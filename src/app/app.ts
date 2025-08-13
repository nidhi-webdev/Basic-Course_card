import { Component, signal } from '@angular/core';
import { CourseCard } from './Components/course-card/course-card';
import { COURSES } from '../environments/db.data';
import { CourseType } from './Models/courseModel';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [ CourseCard, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Basic');

   coreCourse = COURSES;

  handleCardClick(data: CourseType) {
   console.log("hi From parent:", data)
  }

  // for Pipe
  date = new Date();
}
