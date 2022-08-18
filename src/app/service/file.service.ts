import { Injectable } from "@angular/core";
import { IFile } from "../model/file.model";
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class FileService{
  public fileList:Array<IFile>;
  private url:string = '';
  constructor(private http:HttpClient){
    this.fileList = new Array<IFile>();
    this.url = 'http://localhost:4300/assets/data/mock-data.json';
  }
  getFileList() {
    return this.http.get<Array<IFile>>(this.url);
  }
}
