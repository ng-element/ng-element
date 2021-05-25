import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nel-avatar',
  templateUrl: './avatar.component.html'
})

export class NelAvatarComponent {
  size: 'large' | 'medium' | 'small' | undefined | string = 'large';
  sizeNum?: number | undefined;
  src?: string;
  loading = false;
  @Input() nelIcon?: string;
  @Input() set nelSize(val: number | string) {
    if (typeof val === 'number') {
      this.sizeNum = val;
      this.size = undefined;
    } else {
      this.sizeNum = undefined;
      this.size = val;
    }
  }
  @Input() nelText?: string;
  @Input() nelShape: 'circle' | 'square' = 'circle';
  @Input() set nelSrc(val: string) {
    this.loading = true;
    const img = new Image();
    img.src = val;
    img.onload = (e) => {
      this.src = val;
      this.loading = false;
    };
    img.onerror = (e) => {
      if (e instanceof Event) {
        e.preventDefault();
        e.stopPropagation();
      }
      this.nelOnError.emit(e as Event);
      this.loading = false;
    };
  }
  @Input() nelAlt?: string;
  @Input() nelFit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | string = 'cover';
  @Output() nelOnError: EventEmitter<(Event)> = new EventEmitter<Event>();
}
