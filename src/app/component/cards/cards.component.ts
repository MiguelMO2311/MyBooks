import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EuroSymbolPipe } from '../../pipes/euro-symbol.pipe';
import { RefBooksPipe } from '../../pipes/ref-books.pipe';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../../pages/books/books.component';
import { Books } from '../../models/user';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, BooksComponent, EuroSymbolPipe, RefBooksPipe, BooksComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

@Input () public book:number = Number();

@Input() public id_book: number = 0;
@Input() public id_user: number = 0;
@Input() public title: string = '';
@Input() public type: string = '';
@Input() public author: string = '';
@Input() public price: number = 0;
@Input() public photo: string = '';
@Input() public library: any;

@Output() eventDelete = new EventEmitter<number>();

public deleteCard(id_book:number) {
  
  this.eventDelete.emit(id_book);

}
}

