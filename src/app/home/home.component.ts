import { Component } from '@angular/core';
import { LocationComponent } from '../location/location.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HousingLocation } from '../housing-location';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LocationComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  housingLocationList: HousingLocation[] = [
    {
      id: 9999,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
    {
      id: 9992,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 100,
      wifi: true,
      laundry: false,
    },
  ];
}
