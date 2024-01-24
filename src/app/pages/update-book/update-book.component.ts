import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { Books } from '../../models/books';
import { BooksService } from '../../services/books.service';
import { CardsComponent } from '../../component/cards/cards.component';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [CommonModule, CardsComponent, BooksComponent, UpdateBookComponent], 
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {




  constructor( private readonly bookService: BooksService) {

  }
    
  ngOnInit(): void {
   
    
  }
  

public editBook(title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement,
  price: HTMLInputElement, photo: HTMLInputElement, id_book: HTMLInputElement, id_user: HTMLInputElement) {
 
    const myBook: Books = {
    photo: photo.value,
    title: title.value,
    id_book: Number(id_book.value),
    id_user: Number(id_user.value),
    type: type.value,
    author: author.value,
    price: Number(price.value),
  }


console.log(myBook);
this.bookService.edit(myBook);


}

}
