import { DetailComponent } from './features/detail/detail.component';
import { CharacterComponent } from './features/character/character.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path:'home',
    component: CharacterComponent,
  },
  {
    path: 'detail-heroe',
    component: DetailComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
},
{path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
