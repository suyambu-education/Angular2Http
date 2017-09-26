import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

import {JsonDataService} from './services/json-data.service'
 
@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,

  ],
  providers: [JsonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
