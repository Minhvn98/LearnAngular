import { Component } from '@angular/core';

import { authors, Author } from '../authors';
import { AuthorDetailsComponent } from './author-details.component';
@Component({
  selector: 'author-list',
  template: `
    <h2>Đây là list authors</h2>
    <div *ngFor="let author of authors">
      <author-details
        [author]="author"
        (select)="onSelected($event)"
        (delete)="onDelete($event)"
      >
      </author-details>
    </div>
    <br />
    <hr />
    <div [style.fontStyle]="'italic'">
      Current Select Author: {{ currentAuthor.firstName }}
      {{ currentAuthor.lastName }}
    </div>
  `,
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];

  onSelected(authorSelected: Author) {
    this.currentAuthor = authorSelected;
  }

  onDelete(authorSelectedId: number) {
    this.authors = this.authors.filter(
      (author) => author.id !== authorSelectedId
    );
    this.currentAuthor = authors[0];
  }
}
