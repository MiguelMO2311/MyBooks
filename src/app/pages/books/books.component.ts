import { Component, Input } from '@angular/core';
import { Books } from '../../models/user';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../../component/cards/cards.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { UpdateBookComponent } from '../update-book/update-book.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, CardsComponent, AddBookComponent, UpdateBookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {

    public myBook: Books
    constructor() {
      this.myBook = {
        id_book: 0,
        id_user: 0,
        title: 'dasfdsf',
        type: '',
        author: '',
        price: 0,
        photo: '/assets/img_book_bn.png',
      }
}
public library = [
  {
    id_book: 1,
    id_user: 1111,
    title: 'Relato de un naúfrago',
    type: 'soft',
    author: 'Gabriel Gª Már.quez',
    price: 11.35,
    photo: 'https://imagessl2.casadellibro.com/a/l/s7/62/9788490323762.webp',
  },

  {
    id_book: 2,
    id_user: 1111,
    title: 'La Perla',
    type: 'hard',
    author: 'John Steinbeck',
    price: 16.62,
    photo: 'https://imagessl8.casadellibro.com/a/l/s7/78/9788468231778.webp',
  },

  {
    id_book: 3,
    id_user: 1111,
    title: 'Viven',
    type: 'soft',
    author: 'Piers Paul Read ',
    price: 13.30,
    photo: 'https://imagessl9.casadellibro.com/a/l/s7/69/9788490702369.webp',
  },

  {
    id_book: 4,
    id_user: 1111,
    title: 'Alas de Hierro',
    type: 'hard',
    author: 'Rebecca Yarros',
    price: 22.70,
    photo: 'https://imagessl0.casadellibro.com/a/l/s7/50/9788408284550.webp',
  },

  {
    id_book: 5,
    id_user: 1111,
    title: 'El problema final',
    type: 'hard',
    author: 'Arturo Pérez Reverte',
    price: 20.80,
    photo: 'https://imagessl0.casadellibro.com/a/l/s7/60/9788420476360.webp',
  },

  {
    id_book: 6,
    id_user: 1111,
    title: 'La Armadura de la Luz (...)',
    type: 'hard',
    author: 'Ken Follett',
    price: 23.65,
    photo: 'https://imagessl0.casadellibro.com/a/l/s7/30/9788401030130.webp',
  },
]
public newBook!: Books;
public getNewBook(newBook:Books){
 this.newBook = newBook
this.library.push(newBook);

 return this.library;

}

deleteBook (id:number){
  let index = this.library.findIndex(book =>book.id_book === id);
  this.library.splice(index,1);

}
}
