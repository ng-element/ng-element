import {
  Directive, HostListener, Input, ElementRef, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, Output
  , EventEmitter
} from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { NelPopconfirmComponent } from './popconfirm.component';

export type PlacementType = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left'
  | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

@Directive({
  selector: '[nel-popconfirm]'
})

export class NelPopconfirmDirective {
  @Input() nelPopconfirmTitle?: string;
  @Input() nelPlacement: PlacementType = 'bottom';
  @Input() nelConfirmButtonText = '确认';
  @Input() nelCancelButtonText = '取消';
  @Input() nelConfirmButtonType = 'primary';
  @Input() nelCancelButtonType = 'text';
  @Input() nelIcon = 'question';
  @Input() nelIconColor = '#f90';
  @Input() nelHideIcon = false;
  @Output() nelOnCancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() nelOnConfirm: EventEmitter<void> = new EventEmitter<void>();
  protected componentFactory!: ComponentFactory<NelPopconfirmComponent>;

  constructor(
    protected hostView: ViewContainerRef,
    private elementRef: ElementRef,
    private resolver: ComponentFactoryResolver
  ) {
    this.componentFactory = this.resolver.resolveComponentFactory(NelPopconfirmComponent);
  }

  @HostListener('click', ['$event.target'])
  onClick(): void {
    this.show();
  }

  show(): void {
    const position: ConnectionPositionPair = {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
      offsetX: 0,
      offsetY: 0,
    };
    let arrowLeft = '';
    let arrowRight = '';
    let arrowTop = '';
    let arrowBottom = '';
    let transform = '';

    switch (this.nelPlacement) {
      case 'top-start':
        position.originX = 'start';
        position.originY = 'top';
        position.overlayX = 'start';
        position.overlayY = 'bottom';
        position.offsetY = -10;
        arrowLeft = '0';
        transform = 'translate(30px, 5px)';
        break;
      case 'top':
        position.originX = 'center';
        position.originY = 'top';
        position.overlayX = 'center';
        position.overlayY = 'bottom';
        position.offsetY = -10;
        arrowLeft = '50%';
        transform = 'translate(-50%, 5px)';
        break;
      case 'top-end':
        position.originX = 'end';
        position.originY = 'top';
        position.overlayX = 'end';
        position.overlayY = 'bottom';
        position.offsetY = -10;
        arrowLeft = '50%';
        transform = 'translate(30px, 5px)';
        break;
      case 'bottom-start':
        position.originX = 'start';
        position.originY = 'bottom';
        position.overlayX = 'start';
        position.overlayY = 'top';
        position.offsetY = 10;
        arrowLeft = '0';
        arrowTop = '-10px';
        transform = 'translate(30px, 5px)';
        break;
      case 'bottom':
        position.originX = 'center';
        position.originY = 'bottom';
        position.overlayX = 'center';
        position.overlayY = 'top';
        position.offsetY = 10;
        arrowLeft = '50%';
        arrowTop = '-10px';
        transform = 'translate(-50%, 5px)';
        break;
      case 'bottom-end':
        position.originX = 'end';
        position.originY = 'bottom';
        position.overlayX = 'end';
        position.overlayY = 'top';
        position.offsetY = 10;
        arrowLeft = '50%';
        arrowTop = '-10px';
        transform = 'translate(30px, 5px)';
        break;
      case 'left-start':
        position.originX = 'start';
        position.originY = 'top';
        position.overlayX = 'end';
        position.overlayY = 'top';
        position.offsetX = -10;
        arrowRight = '0';
        arrowTop = '0';
        transform = 'translate(5px, 15px)';
        break;
      case 'left':
        position.originX = 'start';
        position.originY = 'center';
        position.overlayX = 'end';
        position.overlayY = 'center';
        position.offsetX = -10;
        arrowRight = '0';
        arrowTop = '50%';
        transform = 'translate(5px, -50%)';
        break;
      case 'left-end':
        position.originX = 'start';
        position.originY = 'bottom';
        position.overlayX = 'end';
        position.overlayY = 'bottom';
        position.offsetX = -10;
        arrowRight = '0';
        arrowBottom = '0';
        transform = 'translate(5px, -15px)';
        break;
      case 'right-start':
        position.originX = 'end';
        position.originY = 'top';
        position.overlayX = 'start';
        position.overlayY = 'top';
        position.offsetX = 10;
        arrowLeft = '0';
        arrowTop = '0';
        transform = 'translate(-5px, 15px)';
        break;
      case 'right':
        position.originX = 'end';
        position.originY = 'center';
        position.overlayX = 'start';
        position.overlayY = 'center';
        position.offsetX = 10;
        arrowLeft = '0';
        arrowTop = '50%';
        transform = 'translate(-5px, -50%)';
        break;
      case 'right-end':
        position.originX = 'end';
        position.originY = 'bottom';
        position.overlayX = 'start';
        position.overlayY = 'bottom';
        position.offsetX = 10;
        arrowLeft = '0';
        arrowBottom = '0';
        transform = 'translate(-5px, -15px)';
        break;
    }

    const popconfirmRef = this.hostView.createComponent(this.componentFactory);
    if (popconfirmRef) {
      popconfirmRef.instance.title = this.nelPopconfirmTitle;
      popconfirmRef.instance.onCancel = this.nelOnCancel;
      popconfirmRef.instance.onConfirm = this.nelOnConfirm;
      popconfirmRef.instance.confirmButtonText = this.nelConfirmButtonText;
      popconfirmRef.instance.cancelButtonText = this.nelCancelButtonText;
      popconfirmRef.instance.confirmButtonType = this.nelConfirmButtonType;
      popconfirmRef.instance.cancelButtonType = this.nelCancelButtonType;
      popconfirmRef.instance.icon = this.nelIcon;
      popconfirmRef.instance.iconColor = this.nelIconColor;
      popconfirmRef.instance.hideIcon = this.nelHideIcon;
      popconfirmRef.instance.trigger = { elementRef: this.elementRef };
      popconfirmRef.instance.isOpen = true;
      popconfirmRef.instance.positionStrategy = [position];
      popconfirmRef.instance.arrowLeft = arrowLeft;
      popconfirmRef.instance.arrowRight = arrowRight;
      popconfirmRef.instance.arrowTop = arrowTop;
      popconfirmRef.instance.arrowBottom = arrowBottom;
      popconfirmRef.instance.transform = transform;
    }
  }
}
