import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Events, MenuController, NavController } from '@ionic/angular';
import { R3BoundTarget } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
ciao:String;
  constructor(private navctrl: NavController, private router: Router, private menu : MenuController,private prova1:Router,private prova2:Router,private prova3:Router,private prova4:Router) {
    this.ciao='assets/icon/piazza.jpg';
  }
  gotopage(){
    this.prova1.navigateByUrl('archeologia');
  }
  
  gotopage2(){
    this.prova2.navigateByUrl('caso-terni');
  }

  showmap()
  {
    this.prova4.navigateByUrl('mappa');
  }

  gotopage3(){
    this.prova3.navigateByUrl('elencositi');
  }
    aprimenu()
    {
      this.menu.enable(true);
      this.menu.open();
      console.log("open");
    }
    clicklog()
    {
      console.log("log");
    }
    changepage()
  {
      this.menu.close();
      this.menu.enable(false);
      this.router.navigateByUrl('lista');
  }
}
