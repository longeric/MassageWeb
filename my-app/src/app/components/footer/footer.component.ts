import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() private outer = new EventEmitter();

  public msg="我是子组件footer的一个msg";

  constructor() { }

  ngOnInit(): void {
  }

  run(){
    alert('我是footer子组件的run方法');
  }

  sendParent(){
    //alert('111 send Parent');

    this.outer.emit('我是子组件的数据qweasd');
  }

}
