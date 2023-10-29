import { Component, OnInit, SkipSelf, DoCheck, ViewChild, AfterViewInit, OnDestroy, AfterContentChecked, ViewChildren, QueryList } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { HttpEventType } from '@angular/common/http'

import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterContentChecked, OnDestroy {
  title = 'Room List';
  Hotel = 'hilton hotel'
  text = 'this is text.'
  disable = false
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }

  subscription!: Subscription

  error$  = new Subject<String>
  rooms$ = this.roomService.getRooms$.pipe(
    catchError((err) => {
      // console.log(err)
      this.error$.next(err.message)
      return of([])
    })
  )

  getError$ = this.error$.asObservable()
  // roomService = new RoomsService()
  constructor(@SkipSelf() private roomService: RoomsService) {
    console.log("observable", this.roomService.getRooms())
    this.subscription = this.roomService.getRooms$.subscribe(rooms => {
      console.log("we are here", rooms)
      this.roomsList = rooms
    })
    // this.roomsList = this.roomService.getRooms()
  }


  roomsCount$ = this.roomService.getRooms$.pipe(
    map((rooms) => rooms.length)
  )

  stream = new Observable<string>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.next('user4');
    observer.complete()
    // observer.error('error')
  })

  selectedRoom!: RoomsList

  toggle(event: any) {
    this.disable = !this.disable
    this.title = "Danish khan"
  }

  roomsList: RoomsList[] = []
  totalBytes = 0
  ngOnInit(): void {
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    })
    this.stream.subscribe((data) => { console.log(data) })

    console.log("Header Component", this.headerComponent)


    this.roomService.getPhotos().subscribe(event => {
      console.log(event)
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request sent')
          break
        }
        case HttpEventType.ResponseHeader: {
          console.log('response header has been recieved.')
          break
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded
          break
        }
        case HttpEventType.Response: {
          console.log(event.body)
          break
        }
      }
    })

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
    // this.roomsList = [...this.roomsList, room]
    this.roomService.addRoom(room).subscribe(data => {
      console.log("Hackerkernel :: ", data)
      this.roomsList = data
    })
  }
  ngDoCheck(): void {
    console.log('ng do check is called.')
  }

  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent

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
  editRoom() {
    const room: RoomsList = {
      roomType: 'Simple room',
      amenities: 'Fan only, free wi-fi, tv kitchen etc.',
      price: 1000,
      photos: 'https://backend.docnet.tn/upload/image/1693060693253.jpg',
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date(),
      roomRating: 20,
    }
    this.roomService.editRooms(room).subscribe(data => {
      this.roomsList = data
    })
  }

  deleteRoom() {
    this.roomService.delete('3').subscribe(data => {
      this.roomsList = data
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
