import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Platform, NavController } from "@ionic/angular";
import { NgModule } from '@angular/core';
import { Map, tileLayer, marker } from 'leaflet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.page.html',
  styleUrls: ['./mappa.page.scss'],
})
export class MappaPage implements OnInit {
  map: Map;
  propertyList = [];
  
  constructor(public platform: Platform,
    public nav: NavController,
    public router: Router) { }

  ngOnInit() {
  }
 
  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = new Map('mapId').setView([42.5698675,12.6511036], 9);

    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);

  

    marker([42.5698675,12.6511036]).addTo(this.map)
    .bindPopup('Pressa')
    .openPopup();
    
    
}
  
goback()
{
  this.router.navigateByUrl("home");
}
  ionViewWillLeave() {
    this.map.remove();
  }

}
