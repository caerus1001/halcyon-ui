import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { DialogData } from '../DialogData';

@Component({
  selector: 'app-quick-score-modal',
  templateUrl: './quick-score-modal.component.html',
  styleUrls: ['./quick-score-modal.component.css']
})
export class QuickScoreModalComponent {
  components: string[];

  constructor(public dialogRef: MatDialogRef<QuickScoreModalComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.components = ['Graphics', 'Gameplay', 'Sound'];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
