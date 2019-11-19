import { Component } from '@angular/core';
import { MenuController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menuu: MenuController, private router: Router) {}

    openFirst() {
      this.menuu.open('first');
      console.log("ok");
    }
    clicklog()
    {
      console.log("log");
    }
  
}
