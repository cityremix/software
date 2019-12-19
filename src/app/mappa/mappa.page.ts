import { Component, ViewChild, OnInit, ElementRef, Injectable } from '@angular/core';
import { Platform, NavController } from "@ionic/angular";
import { NgModule } from '@angular/core';
import { Map, tileLayer} from 'leaflet';
import { Router } from '@angular/router';
import * as L from 'leaflet';

var prova = [ 
  ["pressa",42.5698675,12.6511036],
  ["fabbrica armi",42.5637679,12.6575752]
  ];

var marker;
@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.page.html',
  styleUrls: ['./mappa.page.scss'],
})

@Injectable()
export class MappaPage implements OnInit {
  map: Map;
  propertyList = [];
  
  constructor(public platform: Platform,
    public nav: NavController,
    public router: Router,) { }

  ngOnInit() {
  }
 
  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = new L.Map('mapId').setView([42.5698675,12.6511036], 9);

    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);

    var marker = new L.Marker(new L.LatLng(42.5698675, 12.6511036));
    marker.addTo(this.map).bindPopup("pressa").openPopup();
    var marker = new L.Marker(new L.LatLng(42.5637679, 12.6575752));
    marker.addTo(this.map).bindPopup("fabbrica armi").openPopup();

    /*for (var i = 0; i < prova.length; i++) {
			marker = new L.marker([prova[i][1],prova[i[2]]])
				.bindPopup(prova[i][0])
				.addTo(this.map);
		}
    /* 
    marker([42.5698675,12.6511036]).addTo(this.map)
    .bindPopup('Pressa')
    .openPopup();*/
   
    
}
  
goback()
{
  this.router.navigateByUrl("home");
}
  ionViewWillLeave() {
    this.map.remove();
  }
}
