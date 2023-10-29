import { Injectable, Inject } from '@angular/core';
import { RoomsList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
// import { environment  } from '../../../environments/environments'
import { HttpClient, HttpRequest, HttpHeaders } from  '@angular/common/http'
import { shareReplay, } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  // header = new HttpHeaders({ 'token' : '12312i313212hjk3h'})
  getRooms$ = this.http.get<RoomsList[]>('/api/rooms', {
    // headers: this.header
  }).pipe(
    shareReplay(1)
  )


  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) { 
    // console.log(environment.apiEndPoint)
    console.log(this.config.apiEndPoint)
    console.log("Rooms service initialized ...")
  }

  roomsList: RoomsList[] = []

  getRooms() {
    // return this.roomsList
    // const header = new HttpHeaders({ 'token' : '12312i313212hjk3h'})
    return this.http.get<RoomsList[]>('http://localhost:3000/api/get-rooms', {
      // headers: header
    })
  }

  addRoom(room: RoomsList) {
    return this.http.post<RoomsList[]>('http://localhost:3000/api/add-room', room)
  }

  editRooms(room: RoomsList) {
    return this.http.put<RoomsList[]>('http://localhost:3000/api/edit-room', room)
  }

  delete(id: string) {
    return this.http.delete<RoomsList[]>(`http://localhost:3000/api/delete-room/${id}`)
  }
  
  getPhotos() {
    const request = new HttpRequest(
    'GET', 
    `https://jsonplaceholder.typicode.com/photos`, 
    {
      reportProgress: true
    })
    return this.http.request(request)
  }
}
