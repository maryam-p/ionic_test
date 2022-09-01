import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  date:Date

  constructor(private storage: Storage) {}

  users_received_loans=[];
  users_not_received_loans=[];

  ngAfterViewInit() {
  this.storage.get('users').then((data) => {
    
    this.users_received_loans= data.filter((obj) => {
      return obj.loan === 0;
    });
    this.users_not_received_loans= data.filter((obj) => {
      return obj.loan === 1;
    });

  })
  this.storage.get('fund').then((data) => {
    this.date=data['date']

  })
}

}
