import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { R3BoundTarget } from '@angular/compiler';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-caso-terni',
  templateUrl: './caso-terni.page.html',
  styleUrls: ['./caso-terni.page.scss'],
})
export class CasoTerniPage implements OnInit {

  constructor(private geolocation: Geolocation,private home: Router,private menu : MenuController,private router: Router) { }

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
    //this.menu.enable(false);
    this.router.navigateByUrl('lista');
}

localizza() {
  this.geolocation.getCurrentPosition().then((resp) => {
      resp.coords.latitude
      resp.coords.longitude
   }).catch((error) => {
     console.log('Error getting location', error);
   });
   
   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
      data.coords.latitude
      data.coords.longitude
   });
}

}
