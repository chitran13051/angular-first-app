import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
@Component({
  selector: 'app-location',
  standalone: true,
  imports: [RouterModule, DetailsComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  @Input() housingLocation!: HousingLocation;
}
