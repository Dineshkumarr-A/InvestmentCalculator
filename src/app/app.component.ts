import { Component, Input, Output } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentOutput, type InvestmentInput } from './investment-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {

  @Input({required: true}) userInput: any;
  @Output() resultData?: InvestmentOutput[];

  onCalculateInvestmentResults(data: InvestmentInput) {
    const annualData = [];
    const { initialInvestment, annualInvestment, duration, expectedReturn } =
      data;
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultData = annualData;
    console.log(annualData);
  }
}
