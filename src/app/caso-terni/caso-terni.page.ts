import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { R3BoundTarget } from '@angular/compiler';
@Component({
  selector: 'app-caso-terni',
  templateUrl: './caso-terni.page.html',
  styleUrls: ['./caso-terni.page.scss'],
})
export class CasoTerniPage implements OnInit {

  constructor(private home: Router,private menu : MenuController,private router: Router) { }

  ngOnInit() {
  }
  returnHome()
  {
    this.home.navigateByUrl('home');
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
