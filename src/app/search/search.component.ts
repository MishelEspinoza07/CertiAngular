import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnChanges{
  
  searchTerm:string=""
  @Output() sendData = new EventEmitter()
  ngOnChanges(changes: SimpleChanges): void {
    this.searchTerm="";
  }
  public sendSearchTerm(){
    this.sendData.emit(this.searchTerm)
  }
}