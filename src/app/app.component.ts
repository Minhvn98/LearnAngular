import { Component, ViewChild } from '@angular/core';
import { ToggleComponent } from './toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HelloWorld';
  isChecked = true;

  @ViewChild('toggleComp') toggleComp!: ToggleComponent;

  ngAfterViewInit() {
    console.log(this.toggleComp);
  }
}
