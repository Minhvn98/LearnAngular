import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Author } from '../authors';

@Component({
  selector: 'author-details',
  template: `
    <div>
      {{ author.firstName }} {{ author.lastName }}
      <button style="margin-left: 20px" (click)="select.emit(author)">
        Select
      </button>
      <button (click)="delete.emit(author.id)">Delete</button>
    </div>
    <br />
  `,
})
export class AuthorDetailsComponent {
  @Input() author!: Author; // dấu chấm than Definite Assignment Assertions
  //Nó khẳng định biến author chắc chắn đc gán với kiểu Author

  @Output() select = new EventEmitter<Author>();

  @Output() delete = new EventEmitter<number>();
  constructor() {}
}
