//本文件是angular根模块，告诉angular如何组装应用

//browserModule，浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
//angular核心模块
import { NgModule } from '@angular/core';
//引入formModule，为了双向绑定
import {FormsModule} from '@angular/forms';
//根组件
import { AppComponent } from './app.component';

import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

//引入并配置service
import { StorageService} from './services/storage.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { FormcontentComponent } from './components/formcontent/formcontent.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingComponent } from './components/home/setting/setting.component';
import { PcateComponent } from './components/form/pcate/pcate.component';
import { PlistComponent } from './components/form/plist/plist.component';

//@NgModule装饰器，@NgModule接收一个元数据对象，告诉angular如何编译和启动应用
@NgModule({
  declarations: [   //配置当前运行的组件
    AppComponent, 
    NewsComponent, 
    HomeComponent, 
    FormComponent, 
    SearchComponent, 
    TodolistComponent, 
    HeaderComponent, 
    FooterComponent, NewscontentComponent, FormcontentComponent, WelcomeComponent, SettingComponent, PcateComponent, PlistComponent
  ],
  imports: [        //配置当前模块运行依赖的其他模块
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StorageService],    //配置项目所需求的服务
  bootstrap: [AppComponent]
})

//根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
