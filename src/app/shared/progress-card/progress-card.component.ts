import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.scss'],
})
export class ProgressCardComponent {
  @Input() progress: number = 0;
  @Input() message: string = '';
  @Input() chartColor: 'blue' | 'green' | 'yellow' = 'blue';

  readonly color = {
    blue: 'radial-gradient(closest-side,white 79%,transparent 80% 100%),conic-gradient(rgb(0,64,255) 75%,rgb(154 162 239) 0)',
    green:
      'radial-gradient(closest-side,white 79%,transparent 80% 100%),conic-gradient(rgb(20 187 79) 75%,rgb(184,239,154) 0)',
    yellow:
      'radial-gradient(closest-side,white 79%,transparent 80% 100%),conic-gradient(rgb(255,204,0) 75%,rgb(239,213,154) 0)',
  };
}
