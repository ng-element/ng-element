import { Component, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { OverlayRef } from '@angular/cdk/overlay';
import { loadingMotion } from 'ng-element-ui/core/animation';
import { LoadingRef } from './loading-ref';

@Component({
  selector: 'nel-loading-fullscreen',
  templateUrl: './loading-fullscreen.component.html',
  animations: [loadingMotion]
})

export class NelLoadingFullscreenComponent implements OnInit {
  text?: string;
  spinner?: string;
  background?: string;
  state = 'start';
  overlay!: OverlayRef;

  constructor(
    private loadingRef: LoadingRef
  ) { }

  ngOnInit(): void {
    this.overlay = this.loadingRef.overlayRef;
    if (this.loadingRef.options) {
      if (this.loadingRef.options.text) {
        this.text = this.loadingRef.options.text;
      }
      if (this.loadingRef.options.spinner) {
        this.spinner = this.loadingRef.options.spinner;
      }
      if (this.loadingRef.options.background) {
        this.background = this.loadingRef.options.background;
      }
    }
  }

  onAnimationDone(event: AnimationEvent): void {
    if (event.toState === 'done') {
      this.overlay.dispose();
    }
  }
}
