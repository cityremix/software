import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private menu : MenuController) {}
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
