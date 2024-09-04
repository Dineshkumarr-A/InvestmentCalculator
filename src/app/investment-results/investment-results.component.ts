import { Component, computed, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  //using signal
  //result = input()

  //Using decorator
  // results = input<InvestmentOutput[]>();


  constructor(private investmentService: InvestmentService){}

  // get results(){
  //   return this.investmentService.resultData;
  // }

  results = computed(() => this.investmentService.resultData());

  //results = this.investmentService.resultData.asReadonly();
}
