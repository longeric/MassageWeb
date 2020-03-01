//引入核心模块里面的component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',   //使用这个组件的名称
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';     //定义一个属性
  
}
