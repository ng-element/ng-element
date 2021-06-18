import {
  Component, ContentChildren, QueryList, AfterContentInit, ViewChildren, ElementRef, AfterViewInit, Input,
  OnChanges, SimpleChanges, Output, EventEmitter, ViewContainerRef, ComponentFactory, ComponentFactoryResolver,
  Injector, TemplateRef, ViewChild
} from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';
import { NelTabPaneComponent } from './tab-pane.component';

@Component({
  selector: 'nel-tabs',
  templateUrl: './tabs.component.html'
})

export class NelTabsComponent implements AfterContentInit, AfterViewInit, OnChanges {
  static ngAcceptInputType_nelEditable: BooleanInput;

  _tabItems: any[] = [];
  activeBar = {
    width: '',
    height: '',
    transform: ''
  };
  scrollable = false;
  @Input() nelSelectedIndex = 0;
  @Input() nelType?: 'card' | 'border-card';
  @Input() nelTabPosition: 'top' | 'right' | 'left' | 'bottom' | string = 'top';
  @Input() @InputBoolean() nelEditable = false;
  @ContentChildren(NelTabPaneComponent, { descendants: false }) items!: QueryList<NelTabPaneComponent>;
  @ViewChildren('tabItem') tabItems!: QueryList<ElementRef<any>>;
  @ViewChild('navScroll', { static: false }) navScroll!: ElementRef<any>;
  @Output() nelSelectedIndexChange = new EventEmitter<number>();
  @Output() nelOnEdit = new EventEmitter<{ index: number, action: string }>();

  constructor() { }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.changeTabPane();
    }, 0);
  }

  ngAfterViewInit(): void {
    if (!this.nelType) {
      this._tabItems = [];
      this.tabItems.forEach((item) => {
        const _item = {
          width: item.nativeElement.offsetWidth,
          height: item.nativeElement.offsetHeight,
        };
        this._tabItems.push(_item);
      });
    }
    // 判断是否显示滚动条
    console.log(this.navScroll.nativeElement.wrapWidth);
    console.log(this.navScroll.nativeElement.scrollWidth);
    this.changeTab(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { nelTabPosition } = changes;
    if ((nelTabPosition && !nelTabPosition.firstChange)) {
      setTimeout(() => {
        this.ngAfterViewInit();
      }, 0);
    }
  }

  changeTabPane(): void {
    this.items.forEach(item => {
      item.active = false;
    });
    const activeItem = this.items.get(this.nelSelectedIndex);
    if (activeItem) {
      activeItem.active = true;
    }
  }

  selecteTab(val: number): void {
    this.nelSelectedIndex = val;
    this.nelSelectedIndexChange.emit(val);
    this.changeTab(false);
    this.changeTabPane();
  }

  changeTab(init: boolean): void {
    if (!this.nelType) {
      let key = 'width';
      if (this.nelTabPosition === 'right' || this.nelTabPosition === 'left') {
        key = 'height';
      }
      let width = 0;
      let height = 0;
      let transform = 0;
      if (key === 'width') {
        this._tabItems.forEach((item, index) => {
          if (index < this.nelSelectedIndex) {
            transform += item[key];
          } else if (index === this.nelSelectedIndex) {
            width = item[key];
          }
        });
        if (this.nelSelectedIndex === this.tabItems.length - 1) {
          transform += 20;
          width -= 20;
        } else if (this.nelSelectedIndex > 0) {
          transform += 20;
          width -= 40;
        } else {
          width -= 20;
        }
      } else {
        this._tabItems.forEach((item, index) => {
          if (index < this.nelSelectedIndex) {
            transform += item[key];
          } else if (index === this.nelSelectedIndex) {
            height = item[key];
          }
        });
      }
      if (init) {
        setTimeout(() => {
          this.activeBar = {
            width: key === 'width' ? width + 'px' : '',
            height: key === 'height' ? height + 'px' : '',
            transform: key === 'width' ? `translateX(${transform}px)` : `translateY(${transform}px)`
          };
        }, 0);
      } else {
        this.activeBar = {
          width: key === 'width' ? width + 'px' : '',
          height: key === 'height' ? height + 'px' : '',
          transform: key === 'width' ? `translateX(${transform}px)` : `translateY(${transform}px)`
        };
      }
    }
  }

  edit(): void {
    this.nelOnEdit.emit({ index: -1, action: 'add' });
  }

  remove(event: MouseEvent, _index: number): void {
    event.stopPropagation();
    this.nelOnEdit.emit({ index: _index, action: 'remove' });
  }
}
