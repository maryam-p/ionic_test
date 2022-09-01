
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

 

  constructor(

    private alertController: AlertController,
    private router: Router,
    private storage: Storage,
    private loadingController: LoadingController
  ) { }
  users=[{fname:'مریم',lname:'پورعباس',status:'پرداخت نشده',loan:0,avatar:'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png'},
  {fname:'رضا',lname:'رضایی',status:'پرداخت نشده',loan:0,avatar:'https://w7.pngwing.com/pngs/997/887/png-transparent-avatar-computer-icons-user-profile-internet-avatar-man-thumbnail.png'},
  {fname:'مینا',lname:'مهرانی',status:'پرداخت شده',loan:1,avatar:'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png'},
  {fname:'شیرین',lname:'کریمی',status:'پرداخت شده',loan:1,avatar:'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png'},
  {fname:'ندا',lname:'رمضانی',status:'پرداخت شده',loan:1,avatar:'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png'},
  {fname:'کریم',lname:'شهابی',status:'پرداخت نشده',loan:0,avatar:'https://w7.pngwing.com/pngs/997/887/png-transparent-avatar-computer-icons-user-profile-internet-avatar-man-thumbnail.png'}];
  ngOnInit() {
    this.storage.set('users', this.users);
  }

  edit(item){
    console.log(item)
  }
  delete(item){
    console.log(item)
  }

  nextpage() {

    this.router.navigateByUrl('/add', { replaceUrl: true });

  }


}

