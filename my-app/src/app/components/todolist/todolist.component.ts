import { Component, OnInit } from '@angular/core';
//引入服务
import { StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keyword:string='';

  public todolist:any[]=[];

  constructor(public storage:StorageService) {

    //console.log(this.storage.get());
  }

  ngOnInit(): void {
    let todolist:any=this.storage.get('todolist');

    if(todolist){
      this.todolist = todolist;
    }
  }

  doAdd(e){
    
    if(e.keyCode==13){
      
      if(!this.todolistHasKeyword(this.todolist,this.keyword)){
        this.todolist.push({
          title:this.keyword,
          status:0    //0表示待办，1表示已完成,对应了checkbox的true false
        });
        this.keyword='';

        this.storage.set('todolist',this.todolist); //注意this指向
      }
      else{
        alert('数据已存在');
        this.keyword='';
      }
    }
  }

  deleteData(key){
    this.todolist.splice(key,1);
    this.storage.set('todolist',this.todolist);
  }

  todolistHasKeyword(todolist:any, keyword:any){
    // todolist.forEach(element => {
    //   if(element.title == keyword){
    //     return true;
    //   }
    // });
    // return false;
    if(!keyword) return false;
    for(var i=0; i <todolist.length; i++){
      if(todolist[i].title==keyword){
        return true;
      }
    }
    return false;
  }
  checkboxChange(){

    console.log('checkboxchange触发了');
  }
}
