import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksComponent } from './books.component';
import { CardsComponent } from '../../component/cards/cards.component';
import { EuroPipe } from '../../pipes/euro.pipe';
import { RefBooksPipe } from '../../pipes/ref-books.pipe';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: []
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
