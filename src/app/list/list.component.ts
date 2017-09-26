import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {JsonDataService} from './../services/json-data.service';

import 'rxjs/add/operator/map'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    list:Array<any>;
    error:String;
    Demo:String;

  constructor(
    private _http:Http,
    private jsonsrvs:JsonDataService
  
  ) { }

  ngOnInit() {
    
    this.jsonsrvs.getAllJson()
        .subscribe(
          data => this.list=data,
          error => this.error=error.statusText
        );
    debugger;
  }
  

}

class demo {
  demo(p){
    alert("Test success!"+this.demo);
  }
}