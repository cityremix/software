import { Component } from '@angular/core';
import { MenuController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController, private router: Router) {}

    openFirst() {
      this.menu.open('first');
      console.log("ok");
    }
    clicklog()
    {
      console.log("log");
    }
    changepage()
    {
      this.menu.close('first');
      this.router.navigateByUrl('lista');
    }
  
}
