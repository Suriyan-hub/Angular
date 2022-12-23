import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `<h1>Event Binding</h1>
    <button (click)="onClick($event)">Click</button>
    <button (click)="greeting = 'Welcome Suriya'">Greet</button>
    <h2>{{ greeting }}</h2>
    {{ type }}
    <h1>Template Reference variable</h1>
    <input #myInput type="text" />
    <button (click)="logMessage(myInput.value)">log</button>
    <h1>Two Way Binding</h1>
    <input [(ngModel)]="name" type="text" />
    {{ name }} `,

  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  public greeting = '';
  public type = '';
  public name = '';
  onClick(event: { type: string }) {
    console.log(event);
    this.greeting = 'Welcome to Angular';
    this.type = event.type;
  }
  logMessage(value: any) {
    console.log(value);
  }
}
