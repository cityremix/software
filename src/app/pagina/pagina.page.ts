import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

  progress=0;

  constructor(private router:Router, private menu : MenuController ,public navCtrl: NavController, public nativeaudio : NativeAudio, public platform : Platform) 
  {
    this.platform.ready().then(() => {
      this.nativeaudio.preloadSimple('id', 'assets/audio/file.mp3').then((success)=>{
        console.log("success");
      },(error)=>{
        console.log(error);
      });
    });

    setInterval(() => {
      this.progress += .1;
    }, 1000);
    
  }
  play(){
    this.nativeaudio.play('id').then((success)=>{
      console.log("success playing");
    },(error)=>{
      console.log(error);
    });
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
  stop()
  {
    this.nativeaudio.stop('id').then((success)=>{
      console.log("success stop");
    },(error)=>{
      console.log(error);
    });
  }
  ngOnInit() {
  }

}
