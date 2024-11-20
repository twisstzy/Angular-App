import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
@Component({
  selector: 'app-course',
  template: `
    <h2>{{title}}</h2>
    <ul>
      <li *ngFor="let course of courses">
          {{course}}
      </li>
    </ul>
    `,
  styleUrl: './course.component.css',
})
export class CourseComponent {
  title = "this is the title";
  courses;
  constructor(service : CoursesService){
    this.courses =service.getCourses();
  }  
}
