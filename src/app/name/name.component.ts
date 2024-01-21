import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './name.component.html',
  styleUrl: './name.component.scss',
})
export class NameComponent {
  @Output() addName1: EventEmitter<string> = new EventEmitter();

  submitInput(value: string) {
    this.addName1.emit(value);
  }
}
