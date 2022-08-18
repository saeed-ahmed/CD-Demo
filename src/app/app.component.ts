import { Component, OnInit } from '@angular/core';
import { FileStatus, IFile } from './model/file.model';
import { FileService } from './service/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'CS-Demo';
  fileList:Array<IFile>;
  selectAll:boolean;
  selectedCount:number = 0;
  unSelectedCount:number = 0;
  indeterminateFlag:boolean = false;
  constructor(private fileService:FileService){
    this.fileList = new Array<IFile>();
    this.selectAll = false;
  }
  ngOnInit(){
    this.fileService.getFileList().subscribe((fileList)=>{
      this.fileList = fileList;
      console.log('file list ', this.fileList);
    });
  }
  downloadClick(){
    let message:string = '';
    this.fileList.forEach(file=>{
      if(file.isChecked){
        message += `Device: ${file.device}, Path: ${file.path} \n`;
      }
    });
    if(!message){
      message = 'No file seleted, please select a file to downlaod.';
    }
    window.alert(message);
  }
  changeToAll(event:any){
    this.selectedCount = 0;
    this.unSelectedCount = 0;
    this.selectAll = false;
    this.indeterminateFlag = false;

    const allState = event.target.checked;
    //event.target.checked = false;
    this.fileList.forEach(file=>{
      if(file.status === FileStatus.Available.toLowerCase()){
        file.isChecked = allState;
        if(file.isChecked){
          this.selectedCount++;
        }
      }
      if(!file.isChecked){
        this.unSelectedCount++;
      }
    });
    this.selectCheckboxState();

  }
  handleCheckBoxTick(selectedFile:IFile){
    this.selectedCount = 0;
    this.unSelectedCount= 0;
    this.indeterminateFlag = false;
    this.selectAll = false;

    this.fileList.forEach(file=>{
      if(file.name === selectedFile.name){
        file = selectedFile;
      }
      if(file.isChecked){
        this.selectedCount++;
      } else {
        this.unSelectedCount++;
      }
    });

    this.selectCheckboxState();
  }
  selectCheckboxState(){
    let totalFiles:number = this.fileList.length;
    if(totalFiles === this.selectedCount){
      this.selectAll = true;
      this.indeterminateFlag = false;
    } else if(totalFiles === this.unSelectedCount){
      this.indeterminateFlag = false;
      this.selectAll = false;

    } else {
      this.selectAll = false;
      this.indeterminateFlag = true;
    }
    console.log(`total: ${totalFiles}, selected: ${this.selectedCount}, unselected:${this.unSelectedCount}, indeterminateFlag:${this.indeterminateFlag},selectAll:${this.selectAll}`);
  }
}


