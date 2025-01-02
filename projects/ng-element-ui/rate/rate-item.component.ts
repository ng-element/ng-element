import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'nel-rate-item',
    templateUrl: './rate-item.component.html',
    standalone: false
})

export class NelRateItemComponent implements OnChanges {
  // 鼠标当前move的下标
  @Input() currentValue = -1;
  // 当前选择的评分
  @Input() value: number | null = null;
  @Input() data = 0;
  @Input() colors!: Array<string> | Object;
  @Output() onHover: EventEmitter<number> = new EventEmitter<number>();
  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();
  color!: Array<{ key: number, value: string }>;

  handleMouseover(): void {
    this.onHover.emit(this.data);
  }

  handleMouseleave(): void {
    this.onHover.emit(-1);
  }

  handleClick(): void {
    this.onClick.emit(this.data);
  }

  getOn(): boolean {
    return this.data <= this.currentValue
      || (this.currentValue === -1 && this.value !== null && this.data <= this.value);
  }

  getHover(): boolean {
    return this.data <= this.currentValue;
  }

  getColor(): string {
    const value = this.currentValue !== -1 ? this.currentValue : this.value ? this.value : -1;
    let color = 'rgb(198, 209, 222)';
    const colorItem = this.color.find(item => value <= item.key);
    if (colorItem) {
      color = colorItem.value;
    }
    return this.getOn() ? color : 'rgb(198, 209, 222)';
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { colors } = changes;
    if (colors) {
      let colorList = [];
      if (colors instanceof Array) {
        colorList = [
          { key: 2, value: '#F7BA2A' },
          { key: 4, value: '#F7BA2A' },
          { key: 5, value: '#F7BA2A' },
        ];
      } else {
        for (const key in colors.currentValue) {
          colorList.push({
            key: Number(key),
            value: colors.currentValue[key] as string
          });
        }
      }
      colorList.sort((a: any, b: any) => {
        return a.key - b.key
      });
      this.color = colorList;
    }
  }
}
