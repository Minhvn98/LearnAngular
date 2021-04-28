import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorDetailsComponent } from './authors/author-details.component';
import { AuthorListComponent } from './authors/author-list.component';
import { ProcessBarComponent } from './process-bar/process-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessBarComponent,
    AuthorDetailsComponent,
    AuthorListComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
