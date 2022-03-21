
/**
 * Summary
 *
 * Description
 *
 * @author  Emişne Yasenova
 * @version 1.0
 * @since   20/03/2022
 */

import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
		this.dialogRef.close();
	}

  onYesClick(): void {
		this.dialogRef.close(true);
	}

}
