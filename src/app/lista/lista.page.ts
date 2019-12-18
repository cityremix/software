import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  constructor(private router:Router) 
  {
  }
  changepage()
  {
      this.router.navigateByUrl('pagina');
  }
  changepagefabbrica()
  {
      this.router.navigateByUrl('fabbrica-armi');
  }

    
  ngOnInit() {
  }
}
