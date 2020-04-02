
//配置路由的模块
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//import { CommonModule } from '@angular/common';

//
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';

import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { FormcontentComponent } from './components/formcontent/formcontent.component';

import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingComponent } from './components/home/setting/setting.component';
import { PcateComponent } from './components/form/pcate/pcate.component';
import { PlistComponent } from './components/form/plist/plist.component';

export const routes: Routes = [
  {
    path:'home', component:HomeComponent,
    children:[
      { path:'welcome', component:WelcomeComponent },
      { path:'setting', component:SettingComponent },
      { path: '**', redirectTo:'welcome' }
    ]
  },
  {
    path:'news', component:NewsComponent
  },
  {
    path:'form', component:FormComponent,
    children:[
      { path:'pcate', component:PcateComponent },
      { path:'plist', component:PlistComponent },
      { path: '**', redirectTo:'pcate' }
    ]
  },
  {
    path:'newscontent/:aid', component:NewscontentComponent
  },
  {
    path:'formcontent/:pid', component:FormcontentComponent
  },
  //匹配不到是，默认的路由
  {
    path:'**',redirectTo:'home'
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
