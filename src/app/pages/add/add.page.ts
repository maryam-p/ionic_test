import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {



  loan_percentage: number = 0;
  emergency_loan_percentage: number = 0;
  capital_percentage: number = 0;
  fund_name: string = "صندوق 1";
  duration_money_sleep: number = 1;
  fund_fee: number = 1000;
  amount_portion: number = 1000;
  //temp:number;

  onRangeChangeHandler(a: number) {


    if (this.loan_percentage + this.emergency_loan_percentage + this.capital_percentage > 100) {

      switch (a) {
        case 1:
          this.loan_percentage = this.loan_percentage - 1
          break;
        case 2:
          this.emergency_loan_percentage = this.emergency_loan_percentage - 1
          break;
        case 3:
          this.capital_percentage = this.capital_percentage - 1
          break;
      }

    }
  }


  constructor(private router: Router, private storage: Storage,public toastCtrl: ToastController) { }

  ngOnInit() { }

  // setData() {
  //   this.storage.set('myData', 'hello');
  // }
  // getData() {
  //   this.storage.get('users').then((data) => {
  //     console.log(data)
  //   })
  // }
  onSubmit() {
   
    if (this.loan_percentage + this.emergency_loan_percentage + this.capital_percentage < 100) {

      this.toastCtrl.create({
        message: 'مجموع درصد وام، درصد وام اضطراری و درصد سرمایه باید برابر 100% باشد.',
        duration: 1800
      }).then((toastRes) => {
        console.log(toastRes);
        toastRes.present();
      });
    }
     else if(this.fund_name.length<3 || this.fund_name.length>35){
      this.toastCtrl.create({
        message: 'نام صندوق باید حداقل 3 و حداکثر 35 حرف باشد',
        duration: 1800
      }).then((toastRes) => {
        console.log(toastRes);
        toastRes.present();
      });
    }
    else if(this.duration_money_sleep<1 || this.duration_money_sleep>12){
      this.toastCtrl.create({
        message: 'مدت زمان خواب پول باید 1 تا 12 ماه باشد',
        duration: 1800
      }).then((toastRes) => {
        console.log(toastRes);
        toastRes.present();
      });
    }
    else{
      const now = new Date();
      this.storage.set('fund', {date:now.toLocaleDateString(),loan_percentage:this.loan_percentage,emergency_loan_percentage:this.emergency_loan_percentage
        ,capital_percentage:this.capital_percentage,fund_name:this.fund_name,duration_money_sleep:this.duration_money_sleep,fund_fee:this.fund_fee,amount_portion:this.amount_portion});


      this.router.navigateByUrl('/tabs', { replaceUrl: true });


    }



    // this.router.navigateByUrl('/tabs', { replaceUrl: true });






  }


}
