import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  standalone: false,
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css'
})
export class LoadingSpinnerComponent {

  @Input()
  public message: string="";
}
