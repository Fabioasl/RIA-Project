import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento.models';
import { EventoService } from '../../services/eventosService.service';

@Component({
  selector: 'app-event-update',
  imports: [],
  template: `<h2>Editar Evento</h2>

<form (ngSubmit)="salvar()">

  <label>
    Nome:
    <input [(ngModel)]="evento.name" name="name" required />
  </label>

  <label>
    Local:
    <input [(ngModel)]="evento.local" name="local" required />
  </label>

  <label>
    Data:
    <input [(ngModel)]="evento.date" name="date" type="date" required />
  </label>

  <label>
    Evento encerrado:
    <input type="checkbox" [(ngModel)]="evento.isOver" name="isOver" />
  </label>

  <button type="submit">Salvar</button>
</form>`,
  styleUrl: './event-update.component.scss'
})
export class EventUpdateComponent implements OnInit {
  
  constructor (private eventoService: EventoService) {}
    ngOnInit(): void {}

  atualizarEvento(evento: Evento) : void{
    this.eventoService.putEvento(evento).subscribe({
      next: (data) =>{
        console.log("Evento atualizado com sucesso!", data)
      },
      error: (err) =>{
        console.log("Erro ao atualizar o evento", err)
      }
    });
  }
};



