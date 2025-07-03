import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../../models/evento.models';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-event-read',
  template: `
    <h2>Lista de Eventos</h2>
    <ul>
      <li *ngFor="let evento of eventos">
        <strong>{{ evento.name }}</strong> - {{ evento.date }} - {{ evento.local }} - {{ evento.isOver }}
        <button (click)="excluirEvento(evento.id)">Excluir</button>
      </li>
    </ul>
  `,
  styleUrls: ['./event-read.component.scss'],
  imports: [CommonModule] 
})
export class EventReadComponent  {
  @Input() eventos: Evento[] = []

  excluirEvento(id: number): void {
    this.eventos = this.eventos.filter(evento => evento.id !== id);
  }
}

