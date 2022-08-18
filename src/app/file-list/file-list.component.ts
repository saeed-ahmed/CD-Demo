import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { IFile } from '../model/file.model';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  @Input()
  fileList:Array<IFile>;
  @Output()
  checkBoxTickFileList:EventEmitter<IFile>;


  constructor() {
    this.fileList = Object.assign({});
    this.checkBoxTickFileList = new EventEmitter<IFile>();
  }

  ngOnInit(): void {
    console.log('file list component ', this.fileList);
  }
  ngOnChanges(changes: SimpleChanges){
    for(const propName in changes){
      if(propName === 'fileList' ){
        this.fileList = changes.fileList.currentValue;
      }
    }

  }
  onClick(e:any){
    e.target.indeterminate = true;
  }
  handleCheckBoxTick(selectedFile:IFile){
    //console.log(checkboxState);
    //this.selectedRow = checkboxState;
    this.checkBoxTickFileList.emit(selectedFile);
  }

}
