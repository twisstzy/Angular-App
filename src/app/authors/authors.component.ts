import { Component } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
})
export class AuthorsComponent {
  authors;
  constructor(service : AuthorService){
    this.authors = service.getAuthor();
  }
  onSave(){
    console.log("click")
  }
}
