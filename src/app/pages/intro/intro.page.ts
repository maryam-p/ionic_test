import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
 
 
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild(IonSlides)slides: IonSlides;
 
  constructor(private router: Router) { }
 
  ngOnInit() {
  }
 
  next() {
    this.slides.slideNext();
  }
 
  async start() {
  
    this.router.navigateByUrl('/users', { replaceUrl:true });
  }
}