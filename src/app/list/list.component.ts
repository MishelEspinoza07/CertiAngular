import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'list',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() list:any[] = []
  @Output() sendData = new EventEmitter()
  public sendPersonToParent(data:any){
    console.log("Sending person...")
    this.sendData.emit(data)
  }
}