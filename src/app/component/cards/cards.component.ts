import { Component } from '@angular/core';
import { Books, User } from '../../models/user';
import { EuroSymbolPipe } from '../../pipes/euro-symbol.pipe';
import { RefBooksPipe } from '../../pipes/ref-books.pipe';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../../pages/books/books.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule,BooksComponent, EuroSymbolPipe, RefBooksPipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

}
