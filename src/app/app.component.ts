import { Component } from '@angular/core';
import { Room, RoomsList } from './rooms/rooms';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  role = 'admin'
}