import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { ButtonModule } from 'primeng/button';
import { Evento } from './models/evento.models';
import { EventReadComponent } from './components/event-read/event-read.component';
import { EventCreateComponent } from './components/event-create/event-create.component';


@Component({
  selector: 'app-root, button-demo',
  imports: [RouterOutlet, ButtonModule,],
  templateUrl: './app.component.html',
  styles: [`:host {
  display: block;
  font-family: 'Segoe UI', sans-serif;
  background-color: #ffffff;
  min-height: 100vh;
}

.navbar {
  background-color: #7d8c7a;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

li a:hover {
  color: #feda75;
}

main {
  padding: 2rem 1rem;
}

@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  ul {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  }
    .footer {
  background-color: #7d8c7a;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 0.95rem;
  margin-top: 2rem;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
`],
})
export class AppComponent {
  title = 'Vital';
  eventos: Evento[] = [];  

  onEventCreated(evento: Evento): void {
    this.eventos.push(evento); 
    console.log('Evento Recebido no Pai:', evento);  
  }
  onEventDelete(id: number): void {
    this.eventos = this.eventos.filter(evento => evento.id !== id);
  }
  }


