import { animate, animateChild, AnimationTriggerMetadata, group, query, state, style, transition, trigger } from '@angular/animations';

export const drawerMotion: AnimationTriggerMetadata = trigger('drawerMotion', [
  transition(':enter', [
    style({ opacity: 0, overflow: 'hidden' }),
    group([
      query('@drawerDialogMotion', [animateChild()]),
      animate(300, style({ opacity: 1 }))
    ])
  ]),
  transition(':leave', [
    style({ overflow: 'hidden' }),
    group([
      query('@drawerDialogMotion', [animateChild()]),
      animate(300, style({ opacity: 0 }))
    ])
  ])
]);

export const drawerDialogMotion: AnimationTriggerMetadata = trigger('drawerDialogMotion', [
  transition('void => rtl', [
    style({ transform: 'translate(100%, 0px)' }),
    animate(300, style({ transform: 'translate(0px, 0px)' }))
  ]),
  transition('rtl => void', [
    style({ transform: 'translate(0px, 0px)' }),
    animate(300, style({ transform: 'translate(100%, 0px)' }))
  ]),
  transition('void => ltr', [
    style({ transform: 'translate(-100%, 0px)' }),
    animate(300, style({ transform: 'translate(0px, 0px)' }))
  ]),
  transition('ltr => void', [
    style({ transform: 'translate(0px, 0px)' }),
    animate(300, style({ transform: 'translate(-100%, 0px)' }))
  ]),
  transition('void => ttb', [
    style({ transform: 'translate(0px, -100%)' }),
    animate(300, style({ transform: 'translate(0px, 0px)' }))
  ]),
  transition('ttb => void', [
    style({ transform: 'translate(0px, 0px)' }),
    animate(300, style({ transform: 'translate(0px, -100%)' }))
  ]),
  transition('void => btt', [
    style({ transform: 'translate(0px, 100%)' }),
    animate(300, style({ transform: 'translate(0px, 0px)' }))
  ]),
  transition('btt => void', [
    style({ transform: 'translate(0px, 0px)' }),
    animate(300, style({ transform: 'translate(0px, 100%)' }))
  ])
]);
