import { Component, input } from '@angular/core';
import { type InvestmentOutput } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  //using signal
  //result = input()

  //Using decorator
  results = input<InvestmentOutput[]>();
}
