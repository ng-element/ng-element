import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import 'prismjs';
import 'prismjs/components/prism-typescript';
import './angular-marked';

declare var Prism: any;

@Pipe({ name: 'highlightAuto' })
export class HighLightPipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  transform(value: string): SafeHtml {
    // const relevanceHandle: any = hljs.highlightAuto(value, ['shell', 'typescript', 'xml', 'css']);
    // return this.sanitizer.bypassSecurityTrustHtml(relevanceHandle.value);
    const relevanceHandle = Prism.highlight(value, Prism.languages.angular, 'angular');
    return this.sanitizer.bypassSecurityTrustHtml(relevanceHandle);
  }
}
