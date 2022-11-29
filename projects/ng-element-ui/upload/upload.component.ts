import { Component, forwardRef, Input, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'nel-upload',
  templateUrl: './upload.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NelUploadComponent),
      multi: true
    }
  ]
})

export class NelUploadComponent implements ControlValueAccessor {
  @Input() tip?: TemplateRef<void>;
  fileList: Array<any> = [];
  change = (val: any) => { }

  remove(index: number): void {
    this.fileList.splice(index, 1);
    this.change(this.fileList);
  }

  writeValue(obj: any): void {
    this.fileList = obj;
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void { }
}
