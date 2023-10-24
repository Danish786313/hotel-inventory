import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

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
    console.log("Name = =", this.name)
    this.name.nativeElement.innerText = "5 start hotel"
  }
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent)
    componentRef.instance.Hotel = 'Taj hotel'
  }
}