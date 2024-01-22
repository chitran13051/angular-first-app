import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './name.component.html',
  styleUrl: './name.component.scss',
})
export class NameComponent {
  @Output() addName: EventEmitter<string> = new EventEmitter();

  submitInput(value: string) {
    this.addName.emit(value);
  }
}
