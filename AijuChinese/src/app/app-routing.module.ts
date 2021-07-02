import { NgModule } from '@angular/core';

import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { TypeComponent } from './components/type/type.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'type',
    component: TypeComponent
  },
  {
    path: 'serivces',
    component: ServicesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
  ,
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
