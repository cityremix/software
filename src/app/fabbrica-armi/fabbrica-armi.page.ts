import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-fabbrica-armi',
  templateUrl: './fabbrica-armi.page.html',
  styleUrls: ['./fabbrica-armi.page.scss'],
})
export class FabbricaArmiPage implements OnInit {
  images = ['arma1.jpg', 'arma2.jpg', 'arma3.jpg'];
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
      this.nativeaudio.preloadSimple('id', 'assets/audio/fabbrica-armi-ita.mp3').then((success)=>{
        console.log("success");
      },(error)=>{
        console.log(error);
      });
      this.nativeaudio.preloadSimple('eng', 'assets/audio/fabbrica-armi-eng.mp3').then((success)=>{
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
    if (this.ita)
    {
      this.nativeaudio.play('id').then((success)=>{
        console.log("success playing");
      },(error)=>{
        console.log(error);
      });
    }
    else
    {
      this.nativeaudio.play('eng').then((success)=>{
        console.log("success playing");
      },(error)=>{
        console.log(error);
      });
    }
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
      this.nativeaudio.stop('id');
      this.nativeaudio.stop('eng');
      this.ita = false;
      pulsante.innerHTML="IT";
      elem.innerHTML="The pole of maintenance of small arms ensures the efficiency of the materials, means and equipment supplied to the Armed Forces and to the Armed Corps of the State especially of small arms (both individual and team), to individual and vehicular ballistic protections, to instrumenters and ballistic equipment in general.";
    }else{
      this.nativeaudio.stop('id');
      this.nativeaudio.stop('eng');
      this.ita = true;
      pulsante.innerHTML="En";
      elem.innerHTML="Polo di Mantenimento delle Armi Leggere (PMAL), già S.M.A.L (Stabilimento Militare Armamento Leggero), ha il compito di assicurare l’efficienza di materiali, mezzi e equipaggiamenti in dotazione alle Forze Armate e ai Corpi Armati dello Stato con particolare riferimento alle armi leggere (sia individuali che di squadra), alle protezioni balistiche individuali e veicolari, agli strumenti verificatori ed alle attrezzature balistiche in genere.";
    }
    console.log("prova");
  }
  ngOnInit() {
  }
}