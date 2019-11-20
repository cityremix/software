import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { R3BoundTarget } from '@angular/compiler';

@Component({
  selector: 'app-archeologia',
  templateUrl: './archeologia.page.html',
  styleUrls: ['./archeologia.page.scss'],
})
export class ArcheologiaPage implements OnInit {

  constructor(private home: Router,private menu : MenuController,private router: Router) {}

  returnHome()
  {
    this.home.navigateByUrl('home');
  }
  ngOnInit() {
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
