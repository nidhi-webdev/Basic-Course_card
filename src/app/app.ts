import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCard } from './Components/course-card/course-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Basic');
}
