import { Component, inject } from '@angular/core';
import { LocationComponent } from '../location/location.component';
import { HousingLocation } from '../housing-location';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LocationComponent, NgFor, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
