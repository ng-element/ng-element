import { Directive, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

export type ColReactive = { span: number, offset: number };

@Directive({
    selector: '[nel-col]',
    host: {
        '[class]': 'getClass()',
        '[style]': 'gutterStyle()'
    },
    standalone: false
})

export class NelColDirective {
  @Input() nelSpan = 24;
  @Input() nelOffset = 0;
  @Input() nelXs: number | ColReactive = 0;
  @Input() nelSm: number | ColReactive = 0;
  @Input() nelMd: number | ColReactive = 0;
  @Input() nelLg: number | ColReactive = 0;
  @Input() nelXl: number | ColReactive = 0;
  parentGutter = 0;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  getClass(): string {
    let classStr = 'el-col el-col-' + this.nelSpan;
    if (this.nelOffset) {
      classStr += ' el-col-offset-' + this.nelOffset;
    }
    if (this.nelXs) {
      let span = 0;
      if (typeof this.nelXs === 'number') {
        span = this.nelXs;
      } else {
        span = this.nelXs.span;
      }
      classStr += ' el-col-xs-' + span;
    }
    if (this.nelSm) {
      let span = 0;
      if (typeof this.nelSm === 'number') {
        span = this.nelSm;
      } else {
        span = this.nelSm.span;
      }
      classStr += ' el-col-sm-' + span;
    }
    if (this.nelMd) {
      let span = 0;
      if (typeof this.nelMd === 'number') {
        span = this.nelMd;
      } else {
        span = this.nelMd.span;
      }
      classStr += ' el-col-md-' + span;
    }
    if (this.nelLg) {
      let span = 0;
      if (typeof this.nelLg === 'number') {
        span = this.nelLg;
      } else {
        span = this.nelLg.span;
      }
      classStr += ' el-col-lg-' + span;
    }
    if (this.nelXl) {
      let span = 0;
      if (typeof this.nelXl === 'number') {
        span = this.nelXl;
      } else {
        span = this.nelXl.span;
      }
      classStr += ' el-col-xl-' + span;
    }
    return classStr;
  }

  gutterStyle(): SafeStyle {
    let styleStr = '';
    if (this.parentGutter) {
      styleStr += `padding-left: ${this.parentGutter / 2}px;`;
      styleStr += `padding-right: ${this.parentGutter / 2}px;`;
    }
    return this.sanitizer.bypassSecurityTrustStyle(styleStr);
  }
}
