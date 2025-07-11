import { Component,Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Evento } from '../../models/evento.models';
import { EventoService } from '../../services/eventosService.service';

@Component({
  selector: 'app-event-delete',
  imports: [],
  templateUrl: './event-delete.component.html',
  styleUrl: './event-delete.component.scss'
})
export class EventDeleteComponent implements OnInit {
  eventos: Evento[] = [];
  constructor (private eventoService: EventoService) {}
    ngOnInit(): void {}

  deletarEvento(id: number): void{
    this.eventoService.deleteEvento(id).subscribe({
      next: () => {
        console.log('Evento deletado com sucesso!');
        this.carregarEventos();
      },
      error : (err) => {
        console.error('Erro ao carregar eventos', err);
      }
    })
  }

  carregarEventos(): void{
    this.eventoService.getEventos().subscribe({
      next: (data) => {
        this.eventos = data;
      },
      error : (err) => {
        console.error('Erro ao carregar eventos', err);
      }
    });
  }

}
