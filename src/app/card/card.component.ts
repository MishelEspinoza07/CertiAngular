import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-card',
  standalone: true, 
  imports: [CommonModule, SearchComponent, ItemComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  implements OnChanges{

   @Input() entry:any = ""
  
   @Input() tab:number=1

   messagesList:string[] = []
   originalList:string[]=[]
 
   ngOnChanges(changes: SimpleChanges): void {
     this.messagesList = this.entry[1].messages
     this.originalList = this.messagesList
   }
 
   public receiveSearchTerm(data:string){
     console.log("got search term")
     if (data) {
       this.messagesList = this.messagesList.filter(entry => entry.includes(data));
     } else {
       this.messagesList = [...this.originalList];
     }
   }
 }



