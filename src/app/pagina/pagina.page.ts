import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {
  constructor(private router:Router, private menu : MenuController) { }
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
