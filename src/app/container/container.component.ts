import { Component, AfterContentInit, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [RoomsService]
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(EmployeeComponent, {static: true}) employee!: EmployeeComponent
  ngAfterContentInit(): void {
   console.log("Employee", this.employee)  
   this.employee.empName = "Rick"
  }
  constructor(@Host() private roomService: RoomsService) {

  }
}
