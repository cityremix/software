import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { element } from 'protractor';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  progress=0;
  private ita:boolean = true;
  constructor
    (
    private router:Router,
    private menu : MenuController,
    public navCtrl: NavController,
    public nativeaudio : NativeAudio,
    public platform : Platform
    ) 
    
  {
    this.platform.ready().then(() => {
      this.nativeaudio.preloadSimple('id', 'assets/audio/file.mp3').then((success)=>{
        console.log("success");
      },(error)=>{
        console.log(error);
      });
    });

    setInterval(() => {
      if(this.progress!=.6){
        this.progress += .1;
      }
      else {
        this.progress=.0;
      }
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

  cambiatesto()
  {
    var elem = document.getElementById("elem");
    var pulsante=document.getElementById("pulsantelingua");
    if(this.ita){
      this.ita = false;
      pulsante.innerHTML="IT";
      elem.innerHTML="The 12,000-ton press dates back to 1934 when the 'Terni' company was entrusted with the implementation of the weapons programs that required the construction of a new fleet of battleships. As part of the plant modernization project, it was ordered by the British company Davy Brothers. For more than one novel feature, it was immediately considered the vanguard of technological progress.";
    }else{
      this.ita = true;
      pulsante.innerHTML="En";
      elem.innerHTML="La pressa da dodicimila tonnellate risale al 1934 quando alla Società \"Terni\" fu affidata la realizzazione dei programmi di armamento che richiedevano l'allestimento di una nuova flotta di navi da battaglia. Nell’ambito del progetto di ammodernamento degli impianti, fu ordinata alla ditta inglese Davy Brothers. Per più d'una caratteristica inedita, venne subito considerata avanguardia del progresso tecnologico.";
    }
    console.log("prova");
  }
  ngOnInit() {
  }

}
