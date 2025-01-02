import {
  Directive, HostListener, Input, ElementRef, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, Output
  , EventEmitter,
  Renderer2
} from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { NelPopconfirmComponent } from './popconfirm.component';

export type PlacementType = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left'
  | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

@Directive({
    selector: '[nel-popconfirm]',
    standalone: false
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
  component?: NelPopconfirmComponent;

  constructor(
    protected hostView: ViewContainerRef,
    private elementRef: ElementRef,
    private resolver: ComponentFactoryResolver,
    private renderer: Renderer2
  ) {
    this.componentFactory = this.resolver.resolveComponentFactory(NelPopconfirmComponent);
    const componentRef = this.hostView.createComponent(this.componentFactory);
    this.component = componentRef.instance as NelPopconfirmComponent;
    this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
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

    if (this.component) {
      this.component.title = this.nelPopconfirmTitle;
      this.component.onCancel = this.nelOnCancel;
      this.component.onConfirm = this.nelOnConfirm;
      this.component.confirmButtonText = this.nelConfirmButtonText;
      this.component.cancelButtonText = this.nelCancelButtonText;
      this.component.confirmButtonType = this.nelConfirmButtonType;
      this.component.cancelButtonType = this.nelCancelButtonType;
      this.component.icon = this.nelIcon;
      this.component.iconColor = this.nelIconColor;
      this.component.hideIcon = this.nelHideIcon;
      this.component.trigger = { elementRef: this.elementRef };
      this.component.isOpen = true;
      this.component.positionStrategy = [position];
      this.component.arrowLeft = arrowLeft;
      this.component.arrowRight = arrowRight;
      this.component.arrowTop = arrowTop;
      this.component.arrowBottom = arrowBottom;
      this.component.transform = transform;
    }
  }
}
