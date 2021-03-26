import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>
    Hello {{name}}! Age = {{age}}
    <button (click)="chatouille.emit()">
      cliquez ici !
      </button>
  </h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @Input() age: number;
  @Output() chatouille = new EventEmitter<void>();
}
