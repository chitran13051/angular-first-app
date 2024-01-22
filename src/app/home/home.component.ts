import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { LocationComponent } from '../location/location.component';
import { HousingLocation } from '../housing-location';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HousingService } from '../housing.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { MatInput, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LocationComponent,
    NgFor,
    RouterModule,
    MatGridListModule,
    ColorPickerComponent,
    MatInputModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(ColorPickerComponent)
  colorPicker: ColorPickerComponent = { color: '' };
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  primary: string = '#eee';
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  ngAfterViewInit(): void {
    console.log(this.colorPicker.color);
  }
}
