export interface IFile{
  name:string;
  device:string;
  path:string;
  status:FileStatus;
  isChecked:boolean;
}

export enum FileStatus{
  Available = 'Available',
  Scheduled = 'Scheduled'
}
