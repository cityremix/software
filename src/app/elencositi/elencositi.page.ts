import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elencositi',
  templateUrl: './elencositi.page.html',
  styleUrls: ['./elencositi.page.scss'],
})
export class ElencositiPage implements OnInit {

  constructor(private router: Router, private menu : MenuController) { }

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
gohome()
  {
      this.menu.close();
      this.menu.enable(false);
      this.router.navigateByUrl('home');
  }
  ngOnInit() {
  }

}
