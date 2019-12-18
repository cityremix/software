import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  constructor(private router:Router, private menu : MenuController) 
  {
  }

  aprimenu()
  {
    this.menu.enable(true);
    this.menu.open();
  }
  changepage()
  {
      this.menu.close();
      this.router.navigateByUrl('pagina');
  }
  changepagefabbrica()
  {
      this.menu.close();
      this.router.navigateByUrl('fabbrica-armi');
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
