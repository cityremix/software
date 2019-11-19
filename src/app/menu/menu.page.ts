import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  static menu: MenuController;

  constructor(private router: Router) { }

  static openFirst() {
    this.menu.open('first');
  }
  static close()
  {
    this.menu.close('first');
  }
  ngOnInit() {
  }

}
