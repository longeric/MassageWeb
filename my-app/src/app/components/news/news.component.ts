import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title="我是一个新闻组件";

  username:string='zhangsan';

  public userinfo:object={
    username:"eric",
    age:'20'
  }

  public message:any;

  public content="<h2>I am h2 label</h2>";
  constructor() { 
    this.message='this is change of variable';
  }

  ngOnInit() {
  }

}
