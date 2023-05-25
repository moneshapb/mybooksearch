import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookComponent } from './book.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [BookComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BookComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-books-search'`, () => {
    const fixture = TestBed.createComponent(BookComponent);
    const app = fixture.componentInstance;
    expect(BookComponent.title).toEqual('angular-books-search');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BookComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-books-search app is running!');
  });
});
