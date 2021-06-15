import { Component, ContentChildren, Input, QueryList, AfterContentInit, TemplateRef } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';
import { NelDescriptionsItemComponent } from './descriptions-item.component';

export type ItemType = {
  type: string,
  label: string | TemplateRef<void> | undefined,
  content: TemplateRef<void> | null,
  colspan: number
};

@Component({
  selector: 'nel-descriptions',
  templateUrl: './descriptions.component.html',
  host: {
    class: 'el-descriptions'
  }
})

export class NelDescriptionsComponent implements AfterContentInit {
  static ngAcceptInputType_nelBorder: BooleanInput;

  @Input() nelTitle?: string;
  @Input() @InputBoolean() nelBorder = false;
  @Input() nelExtra?: string | TemplateRef<void>;
  @Input() nelSize?: 'medium' | 'small' | 'mini' | string;
  @Input() nelColumn = 3;
  @Input() nelDirection: 'vertical' | 'horizontal' = 'horizontal';
  @ContentChildren(NelDescriptionsItemComponent, { descendants: false }) items!: QueryList<NelDescriptionsItemComponent>;
  list = [];
  itemList: Array<Array<ItemType>> = [];

  constructor() { }

  ngAfterContentInit(): void {
    if (this.nelDirection === 'horizontal') {
      const remainder = this.items.length % this.nelColumn;
      const trLength = Math.ceil(this.items.length / this.nelColumn);
      if (this.nelBorder) {
        let lastColspan = 1;
        for (let i = 1; i < this.nelColumn; i++) {
          lastColspan = (this.nelColumn - i) * 2 + 1;
        }
        const trItem: Array<Array<ItemType>> = [];
        for (let i = 0; i < trLength; i++) {
          const tdItem: Array<ItemType> = [];
          for (let j = 0; j < this.nelColumn; j++) {
            const item = this.items.get(i * this.nelColumn + j);
            if (item) {
              tdItem.push({
                type: 'label',
                label: item.nelLabel,
                content: null,
                colspan: 1
              });
              tdItem.push({
                type: 'content',
                label: undefined,
                content: item.content,
                colspan: i * this.nelColumn + j === this.items.length - 1 ? lastColspan : 1
              });
            }
          }
          trItem.push(tdItem);
        }
        this.itemList = trItem;
      } else {
        let lastColspan = 1;
        for (let i = 1; i < this.nelColumn; i++) {
          lastColspan = this.nelColumn - i + 1;
        }
        const trItem: Array<Array<ItemType>> = [];
        for (let i = 0; i < trLength; i++) {
          const tdItem: Array<ItemType> = [];
          for (let j = 0; j < this.nelColumn; j++) {
            const item = this.items.get(i * this.nelColumn + j);
            if (item) {
              tdItem.push({
                type: '',
                label: item.nelLabel,
                content: item.content,
                colspan: i * this.nelColumn + j === this.items.length - 1 ? lastColspan : 1
              });
            }
          }
          trItem.push(tdItem);
        }
        this.itemList = trItem;
      }
    } else {
      const remainder = this.items.length % this.nelColumn;
      const trLength = Math.ceil(this.items.length / this.nelColumn);
      let lastColspan = 1;
      for (let i = 1; i < this.nelColumn; i++) {
        lastColspan = this.nelColumn - i + 1;
      }
      const trItem: Array<Array<ItemType>> = [];
      for (let i = 0; i < trLength; i++) {
        const labelItem: Array<ItemType> = [];
        const contentItem: Array<ItemType> = [];
        for (let j = 0; j < this.nelColumn; j++) {
          const item = this.items.get(i * this.nelColumn + j);
          if (item) {
            labelItem.push({
              type: 'label',
              label: item.nelLabel,
              content: null,
              colspan: i * this.nelColumn + j === this.items.length - 1 ? lastColspan : 1
            });
            contentItem.push({
              type: 'content',
              label: undefined,
              content: item.content,
              colspan: i * this.nelColumn + j === this.items.length - 1 ? lastColspan : 1
            });
          }
        }
        trItem.push(labelItem);
        trItem.push(contentItem);
      }
      this.itemList = trItem;
    }
  }
}
