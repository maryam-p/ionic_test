import { Component, ElementRef, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('pieCanvas') private pieCanvas: ElementRef;
  pieChart: any;
  loan_percentage: number ;
  emergency_loan_percentage: number ;
  capital_percentage: number;
  fund_name: string;
  duration_money_sleep: number ;
  fund_fee: number ;
  amount_portion: number ;

  constructor(private storage: Storage) {}



  ngAfterViewInit() {
  
    this.storage.get('fund').then((data) => {
      console.log(data['loan_percentage'])
      this.loan_percentage = data['loan_percentage'];
      this.emergency_loan_percentage = data['emergency_loan_percentage'];
      this.capital_percentage = data['capital_percentage'];
      this.fund_name= data['fund_name'];
      this.duration_money_sleep= data['duration_money_sleep'];
      this.fund_fee= data['fund_fee'];
      this.amount_portion= data['amount_portion'];
      this.pieChartMethod();
    })
   

  }



  pieChartMethod() {

    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['درصد وام', 'درصد وام اضطراری', 'درصد سرمایه گذاری'],
        datasets: [{
          label: '# of Votes',
          data: [this.loan_percentage, this.emergency_loan_percentage, this.capital_percentage],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',

          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',

          ]
        }]
      }
    });
  }


}
