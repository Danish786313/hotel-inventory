import { ObserversModule } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable, map } from 'rxjs'


@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {
  constructor(private router: ActivatedRoute) {

  }

  id!: number
  // id$ !: Observable<number>

  id$ = this.router.paramMap.pipe(
    map(param => param.get('roomId'))
  )
  ngOnInit(): void {
    // this.id = this.router.snapshot.params['roomId']
    // this.id$ = this.router.params.pipe(
    //   map(param => param['roomId'])
    // )
    // this.router.paramMap.subscribe((param) => { param.get('roomId')})
    // this.
    // this.router.params.subscribe((param) => {
    //   console.log(param)
    //   this.id = param['roomId']

    // })
  }
}
