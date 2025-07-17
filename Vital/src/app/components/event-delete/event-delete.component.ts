import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento.models';
import { EventoService } from '../../services/eventosService.service';
import { CommonModule } from '@angular/common';  
@Component({

  selector: 'app-event-delete',
  standalone: true,
  imports: [CommonModule], 
  template: `
  <div class="delete-container">
    <h2 class="delete-title">Excluir Eventos</h2>
    <ul *ngIf="eventos.length > 0; else semEventos" class="event-list">
      <li *ngFor="let evento of eventos" class="event-item">
        {{ evento.eventName }} - {{ evento.eventLocal }}
        <button class="delete-button" (click)="deletarEvento(evento.id)">Deletar</button>
      </li>
    </ul>
    <ng-template #semEventos>
      <p class="no-events">Nenhum evento encontrado.</p>
    </ng-template>
  </div>
  `,
  styles: [`
    .delete-container {
      background-color: #7d8c7a;
      padding: 2rem;
      border-radius: 12px;
      max-width: 450px;
      margin: 2rem auto;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      color: white;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .delete-title {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #ffffff;
      font-size: 1.8rem;
      font-weight: 700;
    }

    .event-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .event-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.7rem 1rem;
      border-bottom: 1px solid #a3b09a;
      font-size: 1rem;
    }

    .event-item:last-child {
      border-bottom: none;
    }

    .delete-button {
      background-color: #ffffff;
      color: #7d8c7a;
      border: none;
      padding: 0.4rem 1rem;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .delete-button:hover {
      background-color: #f0f0f0;
    }

    .no-events {
      text-align: center;
      margin-top: 1rem;
      font-style: italic;
      color: #d8dcd6;
    }
  `]
})
export class EventDeleteComponent implements OnInit {
  eventos: Evento[] = [];

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.carregarEventos();
  }

  carregarEventos(): void {
    this.eventoService.getEventos().subscribe({
      next: (data) => {
        this.eventos = data;
      },
      error: (err) => {
        console.error('Erro ao carregar eventos', err);
      }
    });
  }

  deletarEvento(id: number | undefined): void {
    if (!id) {
      console.error('ID do evento inválido.');
      return;
    }
    this.eventoService.deleteEvento(id).subscribe({
      next: () => {
        console.log('Evento deletado com sucesso!');
        this.carregarEventos();
      },
      error: (err) => {
        console.error('Erro ao deletar evento', err);
      }
    });
  }
}
