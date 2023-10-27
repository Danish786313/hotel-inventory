import { Component, OnInit, SkipSelf, DoCheck, ViewChild, AfterViewInit, AfterContentChecked, ViewChildren, QueryList } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterContentChecked {
  title = 'Room List';
  Hotel = 'hilton hotel'
  text = 'this is text.'
  disable =false
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }
  
  // roomService = new RoomsService()
  constructor(@SkipSelf() private roomService: RoomsService) {
    this.roomsList = this.roomService.getRooms()
  }

  selectedRoom!: RoomsList

  toggle(event: any) {
    this.disable = !this.disable
    this.title = "Danish khan"
  } 

  roomsList: RoomsList[] = []
  ngOnInit(): void {
    console.log("Header Component", this.headerComponent)
  }

  selectRoom(event: RoomsList) {
    console.log(event)
    this.selectedRoom = event
  }

  addRoom() {
    console.log("clicked")
    const room: RoomsList = {
      roomType: 'Simple room',
      amenities: 'Fan only, free wi-fi, tv kitchen etc.',
      price: 1000,
      photos: 'https://backend.docnet.tn/upload/image/1693060693253.jpg',
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date(),
      roomRating: 20,
    }
    // this.roomsList.push(room)
    this.roomsList = [...this.roomsList, room]
  }
  ngDoCheck(): void {
    console.log('ng do check is called.')
  }

  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>

  ngAfterViewInit(): void {
    console.log("Header Component after view Init", this.headerComponent)
    console.log(this.headerChildrenComponent)
    this.headerChildrenComponent.last.title = "Last title"
    // this.headerChildrenComponent.get(0).title = "First Totle"
  }
  ngAfterContentChecked(): void {
    console.log("ng view checked called.")
  }
}
