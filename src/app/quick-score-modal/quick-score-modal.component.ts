import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { DialogData } from '../DialogData';
import { Game } from '../models/game';

@Component({
  selector: 'app-quick-score-modal',
  templateUrl: './quick-score-modal.component.html',
  styleUrls: ['./quick-score-modal.component.css']
})
export class QuickScoreModalComponent {
  components: string[];
  test: number;
  game: Game;

  rate(graphics: number, gameplay: number, sound: number): void {
    // TODO: Make a post call to API to rate game with user id.
    this.dialogRef.close();
    console.log(`Here is log: ${this.game.title} - ${graphics} - ${gameplay} - ${sound}`);
    this.displaySnackBar();
  }

  displaySnackBar() : void {
    this.snackBar.open('Thanks for the rating!', 'Close', {duration: 2000});
  }

  constructor(public dialogRef: MatDialogRef<QuickScoreModalComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private snackBar: MatSnackBar) {
    this.game = data.game;
  }
}