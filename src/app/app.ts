import { Component, signal } from '@angular/core';
import { CourseCard } from './Components/course-card/course-card';
import { COURSES } from '../environments/db.data';

@Component({
  selector: 'app-root',
  imports: [ CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Basic');

  coreCourse = COURSES[0];
  RxJsCourse = COURSES[1];
  NgRxCourse = COURSES[2];
  BeginnersCourse = COURSES[3];
}
