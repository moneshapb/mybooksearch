import { Component } from '@angular/core';
import { BookDetail } from './book/book-detail.model';

@Component({
  selector: 'book-root',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  results!: BookDetail[];
  loading!: boolean;
  message = '';
  static title: any;

  updateResults(results: BookDetail[]): void {
    this.results = results;
    if (this.results.length === 0) {
      this.message = 'Not found...';
    } else {
      this.message = 'Top 10 results:';
    }
  }
}
