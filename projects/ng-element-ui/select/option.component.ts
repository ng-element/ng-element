import { Component, Input } from '@angular/core';

@Component({
  selector: 'nel-option',
  templateUrl: './option.component.html'
})

export class NelOptionComponent {
  @Input() label!: string;
  @Input() value!: any;
}
