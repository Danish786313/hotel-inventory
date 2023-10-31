import { Component } from '@angular/core';
import { RoomsList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent {
  constructor(private roomService: RoomsService) {}
  room : RoomsList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    roomRating: 0
  }

  message : string = ''
  addRooms(roomsForm: NgForm) {
    this.roomService.addRoom(this.room).subscribe((data) => {
      console.log(data)
      this.message = "Room added successfully."
      // roomsForm.reset()
      roomsForm.resetForm({
        roomType: 'Danish khan khan',
        amenities: '',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        photos: '',
        price: 0,
        roomRating: 0
      })
    })
  }
}
