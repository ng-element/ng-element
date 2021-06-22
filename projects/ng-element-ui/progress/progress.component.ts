import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';

export type NelProgressFormatter = ((percentage: number) => string | null) | TemplateRef<{ $implicit: number }>;
export type NelProgressType = ((percentage: number) => string | null);
const defaultFormatter: NelProgressType = (p: number): string => `${p}%`;

@Component({
  selector: 'nel-progress',
  templateUrl: './progress.component.html'
})

export class NelProgressComponent implements OnInit {
  @Input() nelPercentage = 0;
  @Input() nelFormat?: NelProgressFormatter;
  @Input() nelStatus?: 'success' | 'exception' | 'warning';
  @Input() nelStrokeWidth = 6;
  @Input() nelTextInside = false;
  @Input() nelColor?: string | NelProgressType | Array<string | { color: string, percentage: number }>;
  @Input() nelType: 'line' | 'circle' | 'dashboard' = 'line';
  @Input() nelWidth = 126;
  @Input() nelStrokeLinecap = 'round';
  @Input() nelIndeterminate = false;
  @Input() nelDuration = 3;

  get formatter(): NelProgressFormatter {
    return this.nelFormat || defaultFormatter;
  }

  get formatterText(): NelProgressType {
    const isTemplateRef = this.nelFormat instanceof TemplateRef;
    if (isTemplateRef) {
      return defaultFormatter;
    } else {
      return this.nelFormat as NelProgressType || defaultFormatter;
    }
  }

  get relativeStrokeWidth(): string {
    return (this.nelStrokeWidth / this.nelWidth * 100).toFixed(1);
  }

  get radius(): number {
    if (this.nelType === 'circle' || this.nelType === 'dashboard') {
      return parseInt(`${50 - parseFloat(this.relativeStrokeWidth) / 2}`, 10);
    } else {
      return 0;
    }
  }

  get trackPath(): string {
    const r = this.radius;
    const isDashboard = this.nelType === 'dashboard';
    return `
        M 50 50
        m 0 ${isDashboard ? '' : '-'}${r}
        a ${r} ${r} 0 1 1 0 ${isDashboard ? '-' : ''}${r * 2}
        a ${r} ${r} 0 1 1 0 ${isDashboard ? '' : '-'}${r * 2}
        `;
  }

  get perimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  get rate(): number {
    return this.nelType === 'dashboard' ? 0.75 : 1;
  }

  get strokeDashoffset(): string {
    const offset = -1 * this.perimeter * (1 - this.rate) / 2;
    return `${offset}px`;
  }

  get trailPathStyle(): any {
    return {
      strokeDasharray: `${(this.perimeter * this.rate)}px, ${this.perimeter}px`,
      strokeDashoffset: this.strokeDashoffset,
    };
  }

  get circlePathStyle(): any {
    return {
      strokeDasharray: `${this.perimeter * this.rate * (this.nelPercentage / 100)}px, ${this.perimeter}px`,
      strokeDashoffset: this.strokeDashoffset,
      transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease',
    };
  }

  get stroke(): string | null {
    let ret;
    if (this.nelColor) {
      ret = this.getCurrentColor();
    } else {
      switch (this.nelStatus) {
        case 'success':
          ret = '#13ce66';
          break;
        case 'exception':
          ret = '#ff4949';
          break;
        case 'warning':
          ret = '#e6a23c';
          break;
        default:
          ret = '#20a0ff';
      }
    }
    return ret;
  }

  ngOnInit(): void {
    if (this.nelType === 'circle') {

    }
  }

  getCurrentColor(): string | null {
    if (this.nelColor) {
      if (this.nelColor === 'string') {
        return this.nelColor;
      } else if (this.nelColor instanceof Function) {
        return this.nelColor(this.nelPercentage);
      } else if (this.nelColor instanceof Array) {
        const span = 100 / this.nelColor.length;
        const seriesColors = this.nelColor.map((seriesColor, index) => {
          if (typeof seriesColor === 'string') {
            return {
              color: seriesColor,
              percentage: (index + 1) * span,
            };
          }
          return seriesColor;
        });
        const colorArray = seriesColors.sort((a, b) => a.percentage - b.percentage);
        for (const colorItem of colorArray) {
          if (colorItem.percentage > this.nelPercentage) {
            return colorItem.color;
          }
        }
        return colorArray[colorArray.length - 1]?.color;
      }
    }
    return null;
  }
}
