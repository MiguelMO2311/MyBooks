import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { Books } from '../../models/user';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [CommonModule, BooksComponent],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  public myBook: Books
  constructor() {
    this.myBook = {
      id_book: Number(0),
      id_user: Number(0),
      title: 'dasfdsf',
      type: '',
      author: '',
      price: Number(0),
      photo: '/assets/img_book_bn.png',
    }
  }
  public changeDataBook( inputPhoto: HTMLInputElement, inputTitle:HTMLInputElement, inputType:HTMLInputElement,inputAuthor:HTMLInputElement, inputPrice:HTMLInputElement ){
   
    // this.myBook.id_book = Number(input_id_book.value);
    // this.myBook.id_user = Number(inputUser.value);
    this.myBook.photo = inputPhoto.value;
    this.myBook.title = inputTitle.value;
    this.myBook.type = inputType.value;
    this.myBook.author = inputAuthor.value;
    this.myBook.price = Number(inputPrice.value);
console.log(this.myBook);

  }
  }

