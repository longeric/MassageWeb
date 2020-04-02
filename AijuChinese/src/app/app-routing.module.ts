import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'serivces',
    component: ServicesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
