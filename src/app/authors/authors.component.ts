import { Component } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  authors;
  authorsLenght;
  constructor(service : AuthorService){
    this.authors = service.getAuthor();
    this.authorsLenght = service.getAuthorLenght();
  }
}
