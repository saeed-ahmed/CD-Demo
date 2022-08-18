import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileListComponent } from './file-list/file-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FileComponent } from './file/file.component';



@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
