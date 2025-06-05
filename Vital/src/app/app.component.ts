import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root, button-demo',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Vital';
  }

export class ButtonDemo {
  isbuttondisabled = false;
  buttonClickedMessage = '';
  handleClick(){
    this.buttonClickedMessage = "botão clicado."
  }

}
