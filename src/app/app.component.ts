import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ejercicio-1';

  buttonText: string = 'Show ninja div';
  showElement: boolean = false;

  displayElement(): void {
    this.showElement = !this.showElement;
    this.showElement ? this.buttonText='Hide ninja div' : this.buttonText='Show ninja div';
    console.log(this.showElement);
  }
}


