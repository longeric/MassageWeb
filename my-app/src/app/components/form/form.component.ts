import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public peopleInfo:any = {
    username:'123',
    sex:'1',
    cityList:['北京','上海','广州','深圳'],
    city:'北京',
    hobby:[{
      title:'吃饭',
      checked:false
    },{
      title:'睡觉',
      checked:false
    },{
      title:'打豆豆',
      checked:true
    }],
    mark:''
  }

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  doSubmit(){
    //可以用js的 dom操作
    //let namedom;
    console.log(this.peopleInfo);
  }

  goFormcontent(){
    //路由跳转, 适合普通路由和动态路由

    this.router.navigate(['/formcontent/','1234'])
  }

  goForm(){
    
    //跳转并进行传值
    let queryParams:NavigationExtras={
      queryParams:{'aid':123}
    }

    this.router.navigate(['/news'],queryParams);

  }

}
