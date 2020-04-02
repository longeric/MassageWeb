import { Component, OnInit } from '@angular/core';

//引入service，哪里用还是要引入
import { StorageService } from '../../services/storage.service';

//不推荐如此使用
//let storage = new StorageService();

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public keyword:string;
  public historyList:any[]=[];

  constructor(public storage:StorageService) { 

    //let s = this.storage.get();
    console.log();
  }

  ngOnInit(){
    
    console.log('页面刷新会出发这个生命周期函数');

    var searchlist:any=this.storage.get('searchlist');

    if(searchlist){
      this.historyList = searchlist;
    }

  }

  doSearch(){

    if(this.historyList.indexOf(this.keyword)==-1){
      this.historyList.push(this.keyword);

      this.storage.set('searchlist',this.historyList);
    }
    
    this.keyword='';


    console.log(this.keyword);
  }
  deleteHistory(key){
    //alert(key);
    this.historyList.splice(key,1)

    this.storage.set('searchlist',this.historyList);
  }
}
