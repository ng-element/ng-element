import { Injectable, Renderer2 } from '@angular/core';
import { NgClassInterface } from './ng-class';

@Injectable({
  providedIn: 'root'
})
export class NelUpdateHostClassService {
  private classMap = {};
  private renderer!: Renderer2;

  updateHostClass(el: HTMLElement, classMap: object): void {
    this.removeClass(el, this.classMap, this.renderer);
    this.classMap = { ...classMap };
    this.addClass(el, this.classMap, this.renderer);
  }

  private removeClass(el: HTMLElement, classMap: object, renderer: Renderer2): void {
    for (const i in classMap) {
      if (classMap.hasOwnProperty(i)) {
        renderer.removeClass(el, i);
      }
    }
  }

  private addClass(el: HTMLElement, classMap: NgClassInterface, rendreer: Renderer2): void {
    for (const i in classMap) {
      if (classMap.hasOwnProperty(i)) {
        if (classMap[i]) {
          this.renderer.addClass(el, i);
        }
      }
    }
  }
}
