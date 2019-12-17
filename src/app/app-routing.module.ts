import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'lista',
    loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'pagina',
    loadChildren: () => import('./pagina/pagina.module').then( m => m.PaginaPageModule)
  },
  {
    path: 'archeologia',
    loadChildren: () => import('./archeologia/archeologia.module').then( m => m.ArcheologiaPageModule)
  },
  {
    path: 'caso-terni',
    loadChildren: () => import('./caso-terni/caso-terni.module').then( m => m.CasoTerniPageModule)
  },
  {
    path: 'elencositi',
    loadChildren: () => import('./elencositi/elencositi.module').then( m => m.ElencositiPageModule)
  },  {
    path: 'mappa',
    loadChildren: () => import('./mappa/mappa.module').then( m => m.MappaPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
