import { Component, VERSION } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { PipoService } from './pipo.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  monAge = 65465;

  constructor(private pipo: PipoService) {}

  get observableNote() {
    return this.pipo.observableNote.pipe(
      filter( note => note !== undefined ),
      map( note => `je chante ${note} !!!` )
    );
  }

  chanter(): void {
    this.pipo.chanterNote();
  }

  silence(): void {
    this.pipo.seTaire();
  }

  rigoler(): void {
    console.log("je rigole...");
    this.name = "je rigole!!";
  }
}
