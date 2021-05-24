import {
  Directive, ComponentFactory, ViewContainerRef, ElementRef, ComponentFactoryResolver
  , Input, Renderer2, OnDestroy, TemplateRef, OnInit, Output, EventEmitter
} from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { NelPopoverComponent } from './popover.component';

export type PlacementType = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left'
  | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
export type TriggerType = 'click' | 'focus' | 'hover' | 'manual';


@Directive({
  selector: '[nel-popover]',
})

export class NelPopoverDirective implements OnInit, OnDestroy {
  @Input() nelPopoverTitle?: string;
  @Input() nelPopoverContent?: string | TemplateRef<void>;
  @Input() nelPopoverWidth?: number;
  @Input() nelPopoverTrigger: TriggerType = 'click';
  @Input() nelPopoverPlacement: PlacementType = 'bottom';
  @Input() set nelPopoverVisible(val: boolean) {
    if (val) {
      if (this.component) {
        this.show();
      }
    } else {
      this.hide();
    }
  }
  @Output() nelPopoverVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  protected componentFactory!: ComponentFactory<NelPopoverComponent>;
  component?: NelPopoverComponent;
  protected readonly triggerDisposables: Array<() => void> = [];

  constructor(
    protected hostView: ViewContainerRef,
    private elementRef: ElementRef,
    private resolver: ComponentFactoryResolver,
    private renderer: Renderer2
  ) {
    this.componentFactory = this.resolver.resolveComponentFactory(NelPopoverComponent);
    const componentRef = this.hostView.createComponent(this.componentFactory);
    this.component = componentRef.instance as NelPopoverComponent;
    this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
  }

  ngOnDestroy(): void {
    this.removeTriggerListeners();
  }

  ngOnInit(): void {
    this.trigger();
  }

  trigger(): void {
    if (this.nelPopoverTrigger === 'click') {
      this.triggerDisposables.push(this.renderer.listen(this.elementRef.nativeElement, 'click', () => this.show()));
    } else if (this.nelPopoverTrigger === 'focus') {
      this.triggerDisposables.push(this.renderer.listen(this.elementRef.nativeElement, 'focus', () => this.show()));
      this.triggerDisposables.push(this.renderer.listen(this.elementRef.nativeElement, 'blur', () => this.hide()));
    } else if (this.nelPopoverTrigger === 'hover') {
      this.triggerDisposables.push(this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', () => this.show()));
      this.triggerDisposables.push(this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', () => this.hide()));
    }
  }

  private removeTriggerListeners(): void {
    this.triggerDisposables.forEach(dispose => dispose());
    this.triggerDisposables.length = 0;
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

    switch (this.nelPopoverPlacement) {
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
      this.component.title = this.nelPopoverTitle;
      this.component.content = this.nelPopoverContent;
      this.component.width = this.nelPopoverWidth;
      this.component.trigger = this.nelPopoverTrigger;
      this.component.visibleChange = this.nelPopoverVisibleChange;
      this.component.origin = { elementRef: this.elementRef };
      this.component.isOpen = true;
      this.component.positionStrategy = [position];
      this.component.arrowLeft = arrowLeft;
      this.component.arrowRight = arrowRight;
      this.component.arrowTop = arrowTop;
      this.component.arrowBottom = arrowBottom;
      this.component.transform = transform;
      this.nelPopoverVisibleChange.emit(true);
    }
  }

  hide(): void {
    this.component?.close();
  }
}
