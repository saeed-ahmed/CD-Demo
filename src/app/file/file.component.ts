import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFile } from '../model/file.model';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  @Input()
  file:IFile;
  @Output()
  checkBoxTick:EventEmitter<IFile>;
  selectedRow:boolean = false;
  constructor() {
    this.file = Object.assign({});
    this.checkBoxTick = new EventEmitter<IFile>();
   }

  ngOnInit(): void {
  }
  onClick(e:any){
    //e.target.indeterminate = true;
    this.file.isChecked = e.target.checked;
    this.selectedRow = e.target.checked;
    this.checkBoxTick.emit(this.file);
  }

}
