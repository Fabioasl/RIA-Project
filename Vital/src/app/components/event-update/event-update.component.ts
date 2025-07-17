import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../../models/evento.models';
import { EventoService } from '../../services/eventosService.service';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-event-update',
  imports: [FormsModule],
  template: `
    <h2>Editar Evento</h2>

    <form (ngSubmit)="salvar()">
      <div>
        <label for="eventName">Nome:</label>
        <input
          id="eventName"
          name="eventName"
          [(ngModel)]="evento.eventName"
          required
        />
      </div>

      <div>
        <label for="eventLocal">Local:</label>
        <input
          id="eventLocal"
          name="eventLocal"
          [(ngModel)]="evento.eventLocal"
          required
        />
      </div>

      <div>
        <label for="eventDate">Data:</label>
        <input
          id="eventDate"
          name="eventDate"
          type="date"
          [(ngModel)]="evento.eventDate"
          required
        />
      </div>

      <div>
        <label>
          Evento encerrado:
          <input
            type="checkbox"
            [(ngModel)]="evento.eventIsOver"
            name="eventIsOver"
          />
        </label>
      </div>

      <button type="submit">Salvar</button>
    </form>
  `,
  styles: [`
    :host {
      display: block;
      max-width: 400px;
      margin: 2rem auto;
      background-color: #7d8c7a;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      color: white;
      font-family: 'Segoe UI', sans-serif;
    }

    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #ffffff;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    div {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: 600;
      font-size: 0.95rem;
      margin-bottom: 0.3rem;
      color: #ffffff;
    }

    input[type="text"],
    input[type="date"] {
      padding: 0.6rem 0.75rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 1rem;
      background-color: #ffffff;
      color: #333;
      box-sizing: border-box;
      transition: border-color 0.2s ease-in-out, box-shadow 0.2s;
    }

    input[type="text"]:focus,
    input[type="date"]:focus {
      border-color: #5f7262;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
      outline: none;
    }

    input[type="checkbox"] {
      transform: scale(1.2);
      accent-color: #ffffff;
      cursor: pointer;
      margin-left: 0.5rem;
    }

    button {
      background-color: #ffffff;
      color: #7d8c7a;
      border: none;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 1.5rem;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #f0f0f0;
    }
  `]
})
export class EventUpdateComponent implements OnInit {
  @Output() eventoAtualizado = new EventEmitter<void>();
  evento: Evento = {
    eventName: '',
    eventLocal: '',
    eventDate: '',
    eventIsOver: false,
  };

  constructor(
    private eventoService: EventoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventoService.getEvento(+id).subscribe({
        next: (data) => (this.evento = data),
        error: (err) => console.error('Erro ao carregar evento:', err),
      });
    }
  }

  salvar(): void {
    if (!this.evento.id) {
      console.error('ID do evento não está disponível.');
      return;
    }

    this.eventoService.putEvento(this.evento).subscribe({
      next: () => {
        console.log('Evento atualizado com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao atualizar o evento:', err);
      },
    });
  }
}
