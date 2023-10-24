import { Component } from '@angular/core';
import { Room, RoomsList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  title = 'Y';
  Hotel = 'hilton hotel'
  text = 'this is text.'
  disable =false
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }
  toggle(event: any) {
    this.disable = !this.disable
  }

  roomsList: RoomsList[] = [{
    roomType: 'Deluxe room',
    amenities: 'Air conditioner, free wi-fi, tv kitchen etc.',
    price: 500,
    photos: 'https://backend.docnet.tn/upload/image/1693060693253.jpg',
    checkinTime: new Date('11-nov-2021'),
    checkoutTime: new Date(),
    roomRating: 94.343,
  },{
    roomType: 'Deluxe room',
    amenities: 'Air conditioner, free wi-fi, tv kitchen etc.',
    price: 500,
    photos: 'https://backend.docnet.tn/upload/image/1693060693253.jpg',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    roomRating: 14.34123,
  },{
    roomType: 'Deluxe room',
    amenities: 'Air conditioner, free wi-fi, tv kitchen etc.',
    price: 500,
    photos: 'https://backend.docnet.tn/upload/image/1693060693253.jpg',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    roomRating: 34.3443433,
  }]
}
