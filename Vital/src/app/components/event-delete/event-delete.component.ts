import { Component,Input, Output, EventEmitter} from '@angular/core';
import { Evento } from '../../models/evento.models';

@Component({
  selector: 'app-event-delete',
  imports: [],
  templateUrl: './event-delete.component.html',
  styleUrl: './event-delete.component.scss'
})
export class EventDeleteComponent {
  @Input() evento: Evento | null = null; 
  @Output() eventDeleted = new EventEmitter<number>(); 

  excluirEvento(): void {
    if (this.evento) {
      this.eventDeleted.emit(this.evento.id);
    }
  }
}
