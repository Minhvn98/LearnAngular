import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-process-bar',
  templateUrl: './process-bar.component.html',
  styleUrls: ['./process-bar.component.css'],
})
export class ProcessBarComponent implements OnInit {
  _process: number = 0;
  @Input() backgroundColor = '#ccc';
  @Input() processColor = 'tomato';
  @Input() set process(val: number) {
    this._process = val;
  }
  get process(): number {
    return this._process;
  }

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log(this.process);
  }
}
