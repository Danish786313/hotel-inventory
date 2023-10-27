import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localStorage.token'

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  role = 'admin'
  @ViewChild('name', {static: true}) name!: ElementRef;
  @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef
  ngOnInit(): void {
    this.loggerService?.Log('App Component ngOnInit ()   .....')
    console.log("Name = =", this.name)
    this.name.nativeElement.innerText = "5 start hotel"
    this.localstorage.setItem('name', 'Danish khan khan')
  }
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent)
    componentRef.instance.Hotel = 'Taj hotel'
  }
  constructor(
    @Optional() private loggerService: LoggerService, 
    @Inject(localStorageToken) private localstorage: any
  ) { }
}