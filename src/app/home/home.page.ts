import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { R3BoundTarget } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
ciao:String;
  constructor(private router: Router, private menu : MenuController,private prova1:Router,private prova2:Router) {
    this.ciao='http://www.umbriaexperience.it/wp-content/uploads/Piazza-dei-bambini.jpg';
  }
  gotopage(){
    this.prova1.navigateByUrl('archeologia');
  }
  
  gotopage2(){
    this.prova2.navigateByUrl('caso-terni');
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
