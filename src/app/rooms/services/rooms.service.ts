import { Injectable, Inject } from '@angular/core';
import { RoomsList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
// import { environment  } from '../../../environments/environments'

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig ) { 
    // console.log(environment.apiEndPoint)
    console.log(this.config.apiEndPoint)
    console.log("Rooms service initialized ...")
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

  getRooms() {
    return this.roomsList
  }
}
