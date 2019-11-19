import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {
  audio: any;
  constructor(private router:Router, private menu : MenuController) { }
  play()
  {
    this.audio.play();
   this.audio.loop = true;
    console.log("play");
  }
  aprimenu()
  {
    this.menu.open('first2');
  }
  changepage()
  {
      this.menu.close('first2');
      this.router.navigateByUrl('home');
  }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = 'file.mp3';
    this.audio.load();
  }

}
