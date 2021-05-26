import { ComponentPortal } from '@angular/cdk/portal';
import { ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { Directive, ElementRef, Input, TemplateRef, HostListener, OnInit, ComponentRef } from '@angular/core';
import { NelTooltipComponent } from './tooltip.component';

export type PlacementType = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left'
  | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
export type EffectType = 'dark' | 'light';

@Directive({
  selector: '[nel-tooltip]',
})

export class NelTooltipDirective implements OnInit {
  @Input() nelContent?: string | TemplateRef<void>;
  @Input() nelPlacement: PlacementType = 'bottom';
  @Input() nelEffect: EffectType = 'dark';
  @Input() set nelDisabled(value: boolean) {
    this.disabled = value;
    if (value) {
      this.hide();
    }
  }
  private overlayRef?: OverlayRef;
  disabled = false;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    // if (this.nelPlacement === 'bottom') {
    //   this.show();
    // }
  }

  @HostListener('mouseenter', ['$event.target'])
  onMouseenter(): void {
    if (!this.disabled) {
      this.show();
    }
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseleave(): void {
    this.hide();
  }

  show(): void {
    const position: ConnectedPosition = {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
      offsetX: 0,
      offsetY: 0
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
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([position]);
    this.overlayRef = this.overlay.create({ positionStrategy });
    if (this.overlayRef) {
      const tooltipRef: ComponentRef<NelTooltipComponent>
        = this.overlayRef.attach(new ComponentPortal(NelTooltipComponent));
      if (this.nelContent) {
        tooltipRef.instance.content = this.nelContent;
        tooltipRef.instance.effect = this.nelEffect;
        tooltipRef.instance.arrowLeft = arrowLeft;
        tooltipRef.instance.arrowRight = arrowRight;
        tooltipRef.instance.arrowTop = arrowTop;
        tooltipRef.instance.arrowBottom = arrowBottom;
        tooltipRef.instance.transform = transform;
      }
    }
  }

  hide(): void {
    this.overlayRef?.detach();
  }
}
