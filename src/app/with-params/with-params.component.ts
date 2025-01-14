import { Component, input } from '@angular/core';

@Component({
  selector: 'app-with-params',
  imports: [],
  templateUrl: './with-params.component.html',
  styleUrl: './with-params.component.scss',
})
export class WithParamsComponent {
  params = input.required<string>();
}
