import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PipoService {
  private notes: string[] = ['do', 'ré', 'mi', 'fa', 'sol', 'la', 'si'];
  private noteChantee = new BehaviorSubject<string | undefined>(undefined);
  public readonly observableNote = this.noteChantee.asObservable();

  chanterNote(): void {
    const i = Math.floor( Math.random() * this.notes.length );
    const note = this.notes[i];
    this.noteChantee.next( note );
  }

  seTaire(): void {
    this.noteChantee.next( undefined );
    this.noteChantee.complete();
  }

}