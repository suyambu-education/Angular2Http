import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonDataService {

  constructor( private _serviceHttp:Http ) { }

  getAllJson(){

    return this._serviceHttp.get('dats/db.json')
                .map(resp => resp.json());

  }

}
