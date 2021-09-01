import { Inject, Injectable, Optional } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DOCUMENT } from "@angular/common";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class NelIconService {
  iconMap: Map<string, string> = new Map();

  constructor(
    private http: HttpClient,
    @Optional() @Inject(DOCUMENT) protected _document: any,
  ) { }

  getIcon(type: string): Observable<string> {
    const iconSvg = this.iconMap.get(type);
    if (iconSvg) {
      return new Observable(observer => {
        observer.next(iconSvg);
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        this.http.get(`assets/inline-svg/${type}.svg`, { responseType: 'text' }).subscribe((data) => {
          observer.next(data);
          observer.complete();
        }, () => {
          observer.error(`[ng-element-ui]:the icon ${type} does not exist or is not registered.`);
          observer.complete();
        });
      });
    }
  }

  createSvgElementFromString(str: string): SVGElement {
    const div = this._document.createElement('div');
    div.innerHTML = str;
    const svg: SVGElement = div.querySelector('svg');
    if (!svg) {
      throw new Error('[ng-element-ui]:<svg> tag not found.');
    }
    return svg;
  }
}