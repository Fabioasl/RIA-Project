import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Evento } from '../../models/evento.models';
import { EventoService } from '../../services/eventosService.service';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-event-create',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  template:`
    <form (ngSubmit)="criarEvento()" class="form-container">
      <h2 class="form-title">Criar Novo Evento</h2>

      <label>
        <i class="pi pi-pencil"> Nome do Evento:</i>
        <input [(ngModel)]="novoEvento.name" name="name" type="text" required />
      </label>

      <label>
        <i class="pi pi-calendar"> Data do Evento: </i>
        <input [(ngModel)]="novoEvento.date" name="date" type="date" required />
      </label>

      <label>
        <i class="pi pi-map-marker"> Local do Evento: </i>
        <input [(ngModel)]="novoEvento.local" name="local" type="text" required />
      </label>

      <label class="checkbox-label">
        Evento já aconteceu?
        <input type="checkbox" [(ngModel)]="novoEvento.isOver" name="isOver" />
      </label>

      <button type="submit">Adicionar Evento</button>
    </form>
  `,
    styles: [`
  .form-container {
    background-color: #7d8c7a;
    padding: 2rem;
    border-radius: 12px;
    max-width: 400px;
    margin: 2rem auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    color: white;
    font-family: 'Segoe UI', sans-serif;
  }

  .form-title {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #ffffff;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 0.95rem;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    color: #ffffff;
    margin-top: 1rem;
  }

  input[type="text"],
  input[type="date"] {
    width: 100%;
    padding: 0.6rem 0.75rem;
    margin-top: 0.3rem;
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

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    font-size: 0.95rem;
  }

  input[type="checkbox"] {
    transform: scale(1.2);
    accent-color: #ffffff;
    cursor: pointer;
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
    width: 100%;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #f0f0f0;
  }
`]
})
export class EventCreateComponent{
  
  constructor(private eventoService : EventoService) {}
    novoEvento: Evento = {
    name: '',
    local: '',
    date: '',
    isOver: false,
  };
  criarEvento(): void{
    this.eventoService.postEvento(this.novoEvento).subscribe({
      next: (data: Evento) =>{
        console.log("Evento criado com sucesso!", data);
      },
      error : (err: any) =>{
        console.log("Algo deu errado ao criar eventos", err);
      }
    });
  }
}