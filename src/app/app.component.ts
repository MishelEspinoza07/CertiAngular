import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { data } from '../data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ItemComponent, SearchComponent, ListComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Corrected 'styleUrl' to 'styleUrls'
})
export class AppComponent implements OnInit {
  title = 'Examen';
  list: any[] = [];
  originalList: any[] = [];
  objectCard: any = '';
  tab: number = 1;

  ngOnInit(): void {
    this.initializeLists();
  }

  private initializeLists(): void {
    this.list = Object.entries(data);
    this.originalList = [...this.list]; // Use spread operator for clarity
    this.objectCard = this.list[0];
  }

  public receiveData(data: any): void {
    console.log("Received person");

    if (data.operation) {
      console.log("Delete operation");
      this.list = this.list.filter(entry => entry[0] !== data.key);
    } else {
      this.objectCard = this.list.find(entry => entry[0] === data.key) || this.objectCard; 
    }
  }

  public receiveSearchTerm(searchTerm: string): void {
    console.log("Got search term");

    if (searchTerm) {
      this.filterListBySearchTerm(searchTerm.toLowerCase());
    } else {
      this.resetList(); // Reset the list if the search term is empty
    }
  }

  private filterListBySearchTerm(searchTerm: string): void {
    this.list = this.originalList.filter(entry => {
      const fullName = `${entry[1].name} ${entry[1].lastName}`.toLowerCase(); 
      return fullName.includes(searchTerm); 
    });
  }

  private resetList(): void {
    this.list = [...this.originalList]; 
  }
}
