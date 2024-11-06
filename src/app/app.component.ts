import { Component } from '@angular/core';
import { CityListComponent } from './components/city-list/city-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CityListComponent, FormsModule],  // Añadido HttpClientModule y FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Examen Final';
}