import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
@Component({
  selector: 'app-course',
  template: `
  <div>
    <div>
    <h2>{{title}}</h2>
    <ul>
      <li *ngFor="let course of courses">
          {{course}}
      </li>
    </ul>
    </div>
    <input [(ngModel)]="email"  (keyup.enter)="onKeyUp()" placeholder="Email "/>
  </div>
   `,
})
export class CourseComponent {
  title = "this is the title";
  email = "Gafar@gmail.com";
  onKeyUp(){
     console.log(this.email);
    
  }
  courses;
  constructor(service : CoursesService){
    this.courses =service.getCourses();
  }  
}
