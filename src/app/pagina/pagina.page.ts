import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  constructor(private router:Router, private menu : MenuController ,public navCtrl: NavController) { }
  play()
  {
    console.log("play");
  }
  aprimenu()
  {
    this.menu.enable(true);
    this.menu.open();
  }
  changepage()
  {
      this.menu.close();
      this.menu.enable(false);
      this.router.navigateByUrl('home');
  }

  ngOnInit() {
  }

}
