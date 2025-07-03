import { Component, EventEmitter, Output } from '@angular/core';
import { Evento } from '../../models/evento.models';
import { CommonModule } from '@angular/common';  // Importando CommonModule
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-event-create',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  template: `
  <form (ngSubmit)="adicionarEvento()">
  <div>
    <label for="nome">Nome do Evento:</label>
    <input id="nome" [(ngModel)]="novoEvento.name" name="nome" required>
  </div>
  
  <div>
    <label for="data">Data do Evento:</label>
    <input id="data" [(ngModel)]="novoEvento.date" name="data" type="date" required>
  </div>

  <div>
    <label for="local">Local do Evento:</label>
    <input id="local" [(ngModel)]="novoEvento.local" name="local" required>
  </div>

  <div>
    <label for="isOver">Evento acabou:</label>
    <input id="isOver" [(ngModel)]="novoEvento.isOver" name="isOver" required>
  </div>

  <button type="submit">Adicionar Evento</button>
</form>`,
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent {
  novoEvento: Evento = { id: 0, name: '', date: '', local: '' , isOver: false };

  @Output() eventCreated = new EventEmitter<Evento>(); 

  adicionarEvento(): void {

    const novoId = Date.now(); 
    const eventoCriado: Evento = { ...this.novoEvento, id: novoId };

    this.eventCreated.emit(eventoCriado);
    console.log('Evento Criado:', eventoCriado);

    this.novoEvento = { id: 0, name: '', date: '', local: '' , isOver: false};
  }
}