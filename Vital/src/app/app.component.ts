import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { ButtonModule } from 'primeng/button';
import { Evento } from './models/evento.models';
import { EventReadComponent } from './components/event-read/event-read.component';
import { EventCreateComponent } from './components/event-create/event-create.component';

@Component({
  selector: 'app-root, button-demo',
  imports: [RouterOutlet, ButtonModule, EventReadComponent, EventCreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Vital';
  eventos: Evento[] = [];  // Lista para armazenar os eventos criados

  // Função chamada quando um evento é criado no EventCreateComponent
  onEventCreated(evento: Evento): void {
    this.eventos.push(evento);  // Adiciona o evento à lista
    console.log('Evento Recebido no Pai:', evento);  // Imprime o evento no console
  }
  }


