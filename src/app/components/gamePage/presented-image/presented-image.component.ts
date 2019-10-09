import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../../../DialogData';
import {Image} from '../../../models/image';

@Component({
  selector: 'app-presented-image',
  templateUrl: './presented-image.component.html',
  styleUrls: ['./presented-image.component.css']
})
export class PresentedImageComponent implements OnInit {
  image: Image;

  constructor(public dialogRef: MatDialogRef<PresentedImageComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.image = data.image;
  }

  ngOnInit() {
  }

}
