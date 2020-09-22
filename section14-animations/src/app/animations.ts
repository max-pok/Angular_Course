import { animate, keyframes, state, style, transition, trigger, animation, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimation = animation(
  animate('1s ease-out', keyframes([
    style({
      offset: .2,
      opacity: 1,
      transform: 'translateX(20px)'
    }),
    style({
      offset: 1,
      opacity: 0,
      transform: 'translateX(-100%)'
    })
  ]))
);

export let fadeInAnimation = animation([
  style({ opacity: 0 }),
  animate('{{ duration  }} {{ easing }}')
], {
  params: {
    duration: '2s',
    easing: 'ease-out'
}});

export let fade = trigger('fade', [
  transition(':enter', useAnimation(fadeInAnimation)),
  
  transition(':leave', [
    animate(2000, style({ opacity: 0 }))
  ])
]);

export let slide = trigger('slide', [
  state('void', style({ transform: 'translateX(-100%)' })),

  transition(':leave', useAnimation(bounceOutLeftAnimation))
]);
