import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() object:any = ''
  @Input() object_key:any = ''
  @Input() type:number = 0

  @Output() sendData = new EventEmitter()
  
  public sendPersonToParent(val:number){
    console.log("Sending person...")
    this.sendData.emit({key: this.object_key, operation: val})
  }
}
