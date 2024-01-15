import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [RouterModule, DetailsComponent, MatCardModule, MatGridListModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  @Input() housingLocation!: HousingLocation;
}
