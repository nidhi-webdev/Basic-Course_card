import { AfterViewInit, Component, ElementRef, QueryList, signal, ViewChildren } from '@angular/core';
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
export class App implements AfterViewInit{
  
  protected readonly title = signal('Basic');

  @ViewChildren('myhtml', {read: ElementRef})
  htmlElement!: QueryList<ElementRef>

  ngAfterViewInit(): void {
    this.htmlElement.forEach( elementHtml => {
      elementHtml.nativeElement.style.backgroundColor = 'red';
    })
  }

   coreCourse = COURSES;

  handleCardClick(data: CourseType) {
   console.log("hi From parent:", data)
  }

  // for Pipe
  date = new Date();
}
