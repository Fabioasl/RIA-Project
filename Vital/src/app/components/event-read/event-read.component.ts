import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Evento } from '../../models/evento.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-read',
  standalone: true,
  template: `
    <div class="event-list-container">
      <h2>Lista de Eventos</h2>
      <ul>
        <li *ngFor="let evento of eventos">
          <div class="evento-info">
            <i class="pi pi-pencil"> Nome do Evento:<span><strong> {{ evento.name }}</strong></span></i>
            <div *ngIf="detalhesVisiveis[evento.id]" class="evento-info">
            <i class="pi pi-calendar"> Data do Evento: <span> {{ evento.date }}</span> </i>
            <i class="pi pi-map-marker"> Local do Evento:<span> {{ evento.local }}</span></i>
            <span> Status: {{ evento.isOver ? 'Finalizado' : 'Ativo' }}</span>
            </div>
          </div>
          <button (click)="excluirEvento(evento.id)">Excluir</button>
          <button (click)="detalharEvento(evento.id)">{{ detalhesVisiveis[evento.id] ? 'Fechar' : 'Detalhar' }}</button>
          
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .event-list-container {
      background-color: #7d8c7a;
      padding: 2rem;
      border-radius: 12px;
      max-width: 600px;
      margin: 2rem auto;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      color: white;
      font-family: 'Segoe UI', sans-serif;
    }

    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #ffffff;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      background-color: #6c7c6b;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ffffff;
    }

    .evento-info {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    button {
      background-color: #ffffff;
      color: #7d8c7a;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    button:hover {
      background-color: #f0f0f0;
    }
    .pi {
      margin-right: 5px; /* Espaço entre ícone e texto */
}
  `],
  imports: [CommonModule]
})
export class EventReadComponent {
  @Input() eventos: Evento[] = [];
  @Input() eventoSelecionado: Evento | null = null;
  @Input() detalhesVisiveis: { [key: number]: boolean } = {};


  excluirEvento(id: number): void {
    this.eventos = this.eventos.filter(evento => evento.id !== id);
  }
  detalharEvento(id: number): void {
    this.detalhesVisiveis[id] = !this.detalhesVisiveis[id];
    if (!this.eventoSelecionado?.id) {
      this.eventoSelecionado = this.eventos.find(evento => evento.id === id) || null;
    }

  }
}

