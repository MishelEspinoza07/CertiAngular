import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'] 
})
export class ItemComponent {
  @Input() object: any = '';
  @Input() objectKey: any = '';  
  @Input() type: number = 0;

  @Output() sendData = new EventEmitter<{ key: any; operation: number }>();

  public sendPersonToParent(operation: number): void {
    console.log("Sending person...");
    this.sendData.emit({ key: this.objectKey, operation }); 
  }
}
