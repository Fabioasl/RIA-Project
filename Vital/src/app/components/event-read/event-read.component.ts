import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../../models/evento.models';
import { EventoService } from '../../services/eventosService.service';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-read',
  standalone: true, 
  imports: [CommonModule, FormsModule, RouterModule],  
  template: `
     <div class="event-list-container"> 
      <h2>Lista de Eventos</h2>
      <ul>
        <li *ngFor="let evento of eventos" class="evento-item">
          <div class="evento-info">
            <span class="nome">{{ evento.eventName }}</span>
            <span class="data">{{ evento.eventDate | date:'dd/MM/yyyy' }}</span>
            <span class="local">{{ evento.eventLocal }}</span>
            <span class="local">{{ evento.eventIsOver ? 'Finalizado' : 'Ativo' }}</span>
          </div>
          <div class="evento-acoes">
            <button *ngIf="evento.id !== undefined" (click)="irParaGerenciarEvento(evento.id!)" type="button">
              Atualizar
            </button>
            <button *ngIf="evento.id !== undefined" (click)="deletarEvento(evento.id!)" type="button" class="btn-delete">
              Deletar
            </button>
          </div>
        </li>
      </ul>

      <h2 class="criar-evento">
        <a (click)="irParaCriarEvento()">Deseja criar um evento?</a>
      </h2>
    </div>
    <router-outlet></router-outlet>
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

    a {
      cursor: pointer;
      text-decoration: underline;
      color: #feda75;
      transition: color 0.3s ease;
    }
    a:hover {
      color: #fff176;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li.evento-item {
      background-color: #6c7c6b;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ffffff;
      gap: 1rem;
    }

    .evento-info {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      flex: 1;
      min-width: 0;
    }

    .evento-info span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 600;
    }

    .evento-info .nome {
      font-size: 1.2rem;
    }

    .evento-info .data, .evento-info .local {
      font-size: 0.9rem;
      opacity: 0.85;
    }

    .evento-acoes {
      display: flex;
      gap: 0.5rem;
      flex-shrink: 0;
    }

    button {
      background-color: #ffffff;
      color: #7d8c7a;
      border: none;
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #f0f0f0;
    }

    button.btn-delete {
      background-color: #d9534f;
      color: white;
    }

    button.btn-delete:hover {
      background-color: #c9302c;
    }

    h2.criar-evento {
      margin-top: 2rem;
    }
  `],
})
export class EventReadComponent implements OnInit {
  @Input() eventos: Evento[] = [];
  @Input() evento?: Evento;

  constructor(
    private eventoService: EventoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarEventos();
  }

  carregarEventos(): void {
    this.eventoService.getEventos().subscribe({
      next: (data) => {
        this.eventos = data;
      },
      error: (err: any) => {
        console.error('Erro ao carregar eventos', err);
      }
    });
  }

  irParaCriarEvento(): void {
    this.router.navigate(['criar-evento']);
  }
  irParaGerenciarEvento(id: number): void{
    this.router.navigate(['atualizar-evento', id]);
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
