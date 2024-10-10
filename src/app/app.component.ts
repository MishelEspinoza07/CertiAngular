import { ListComponent } from './list/list.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { data } from './card/data';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ItemComponent, SearchComponent, ListComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  title = 'nuevo_proyecto_angular';
  list:any[] = []
  originalList: any[] = [];
  objectCard:any = ''
  
  ngOnInit(): void {
    this.list=Object.entries(data);
    this.originalList = this.list;
    this.objectCard = this.list[0];
  }

  public receiveData(data:any){
    console.log("received person")
    if(data.operation){
      console.log("delete")
      this.list = this.list.filter(entry => entry[0] !== data.key);
    } else{
      this.objectCard = this.list.filter(entry => entry[0]===data.key)[0]
    }
  }

  public receiveSearchTerm(data:string){
    console.log("got search term")
    if (data) {
      this.list = this.list.filter(entry => {
        const fullName = `${entry[1].name} ${entry[1].lastName}`.toLowerCase();  // Concatenate name and lastName
        return fullName.includes(data.toLowerCase());  // Case-insensitive search
      });
    } else {
      this.list = [...this.originalList];  // Reset the list if the search term is empty
    }
  }
}
