

export class AuthorService {
  private author = ["bahram","Moji","Reza"];
  getAuthor(){
    return this.author
  }
  getAuthorLenght(){
    return this.author.length;
  }  
}
