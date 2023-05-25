import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { BookDetail } from '../book/book-detail.model';

const BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  constructor(private http: HttpClient) { }

  search(query: string): Observable<BookDetail[]> {
    const params: string = `q=${query}`;

    const queryUrl = `${BOOK_API_URL}?${params}`;

    return this.http.get<any>(queryUrl).pipe(map(response => {
      return response['items'].map((item: { volumeInfo: { title: any; infoLink: any; imageLinks: { thumbnail: any; } | undefined; }; }) => {
        return new BookDetail({          
          title: item.volumeInfo.title,
          infoLink: item.volumeInfo.infoLink,
          imageLinks: item.volumeInfo.imageLinks != undefined? item.volumeInfo.imageLinks.thumbnail: ""
        });
      });
    }));
  }
}