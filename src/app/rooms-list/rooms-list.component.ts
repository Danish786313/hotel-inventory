import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { RoomsList } from '../rooms/rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges {
  @Input() rooms: RoomsList [] | null = []
  @Input() title: string = ''
  @Output() selectedRoom = new EventEmitter<RoomsList>()
  selectRoom(room : any) {
    this.selectedRoom.emit(room)
  }
  
  ngOnChanges(changes: SimpleChanges): void { // previousValue: any, currentValue: any, firstChange: boolean
    console.log(changes)
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase()
    }
    // throw new Error("Methid not impelmented")
  }
}
