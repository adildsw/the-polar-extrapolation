import { trigger, state, style, transition, animate} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
    state('in', style({
      opacity: 1,
      'pointer-events': 'auto'
    })),
    state('out', style({
      opacity: 0.0,
      'pointer-events': 'none'
    })),
    transition('in => out', animate('500ms ease-in-out')),
    transition('out => in', animate('500ms ease-in-out'))
  ]);

  export const dimmerFadeInOut = trigger('dimmerFadeInOut', [
    state('in', style({
      opacity: 0.6,
      'pointer-events': 'auto'
    })),
    state('out', style({
      opacity: 0.0,
      'pointer-events': 'none'
    })),
    transition('in => out', animate('500ms ease-in-out')),
    transition('out => in', animate('500ms ease-in-out'))
  ]);