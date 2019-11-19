import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goback()
  {
    this.router.navigateByUrl('home');
  }
}
