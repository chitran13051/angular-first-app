import { CommonModule, NgForOf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NameComponent } from '../name/name.component';
import { MatCardModule } from '@angular/material/card';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NameComponent,
    MatCardModule,
    NgForOf,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm: FormGroup;
  matcher = new ErrorStateMatcher();
  waitingList: string[] = ['Victor', 'Anna', 'Nikita'];
  housingLocationId = Number(this.route.snapshot.params['id']);

  constructor(private formbuilder: FormBuilder) {
    this.housingLocation = this.housingService.getHousingLocationById(
      this.housingLocationId
    );
    this.applyForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
    });
  }

  addName(value: string) {
    this.waitingList.push(value);
  }

  submit(value: string) {
    this.housingService.submit(value);
  }
}
