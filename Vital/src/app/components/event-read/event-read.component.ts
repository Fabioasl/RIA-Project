import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Evento } from '../../models/evento.models';
import { EventoService } from '../../services/eventosService.service';
import { CommonModule } from '@angular/common';  // Importando CommonModule
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-event-read',
  standalone: true, 
  imports: [CommonModule, FormsModule],  
  template:`
  <div class="event-list-container"> 
    <h2>Lista de Eventos</h2>
      <ul>
        <li *ngFor="let evento of eventos">
          {{ evento.name }} - {{ evento.date }} - {{ evento.local }}
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
})
export class EventReadComponent implements OnInit{
  @Input() eventos: Evento[] = [];
  @Input()  evento?: Evento;
  
  constructor(private eventoService : EventoService) {}
  ngOnInit(): void {
      
  }
  carregarEventos(): void{
    this.eventoService.getEventos().subscribe({
      next: (data) => {
        this.eventos = data;
      },
      error : (err  : any) => {
        console.error('Erro ao carregar eventos', err);
      }
    });
  }

  /* implementar futuramente quando tiver rotas 
  carregarEvento(): void{
    const id = 
    this.eventoService.getEvento().subscribe({
      next: data =>{
        this.evento = data;
      }
    })
  }
  */
}