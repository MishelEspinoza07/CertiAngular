import { Component, OnInit } from '@angular/core';
import { City, CityService } from '../../services/city.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.scss'
})
export class CityListComponent implements OnInit {
  newCity = '';
  filterText = '';
  filteredCities: City[] = [];
  constructor(private cityService: CityService) {}
  ngOnInit(): void {
    this.cityService.cities$.subscribe(cities => {
      this.filteredCities = cities;
    });
  }
  addCity() {
    try {
      this.cityService.addCity(this.newCity);
      this.newCity = '';
    } catch (error) {
      const errorMessage = (error as Error).message;
      alert(errorMessage);
    }
  }
  deleteCity(name: string) {
    this.cityService.deleteCity(name);
  }
  filterCities() {
    this.cityService.filterCities(this.filterText).subscribe(filtered => {
      this.filteredCities = filtered;
    });
  }
}
