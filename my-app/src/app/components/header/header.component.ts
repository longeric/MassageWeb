import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title:any;
  @Input() message:any;
  @Input() childrun:any;

  @Input() home:any;

  constructor() { }

  ngOnInit(): void {
  }

  getParentMsg(){
    //获取父组件的数据
    //alert(this.message);
    alert(this.home.msg);
  }
  getParentRun(){
    //this.childrun();
    this.home.run();
  }
}
