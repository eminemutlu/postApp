import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppModel } from '../_models/app.model';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { ActionNotificationComponent } from 'src/app/shared/action-notification/action-notification.component';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.scss']
})
export class AppDetailComponent implements OnInit {
  public appForm!: FormGroup;
  public appModel!: AppModel;
  textValue: string = '';
  durationInSeconds = 5000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _location: Location,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.appModel = new AppModel();

    //RESOLVE
    this.activatedRoute.data.subscribe(data => {
      if(data) {
        this.appModel = data['appDetail'];
        this.textValue = this.appModel.caption;
      }
    });
    this.createForm();
  }
  ngAfterViewInit(): void {
  
  }

  createForm() {
    this.appForm = this.formBuilder.group({
      caption: [this.appModel.caption, Validators.required]
    });
  }
  checkDataIsValid(): boolean {
    return this.appForm.valid;
  }

  onSubmit() {
    const message = "Your feedback was received"
    this.openSnackBar(message);
    this.cdr.detectChanges();
  }

  isNotEmpty(value: any): boolean {
    return value !== undefined && value !== null && value !== '';
  }


  back() {
    if(this.isNotEmpty(this.textValue)) {
      const title = 'Warning';
      const description = 'If you leave before saving, your changes will be lost. Do you want to continue?';
      const dialogRef = this.confirmDialog(title, description);
      dialogRef.afterClosed().subscribe((res: any) => {
        if(res){
          return this._location.back()
        }
        if (!res) {
          return;
        } 
      });
    } else {
      return this._location.back()
    }
    
  }

  confirmDialog(title: string,  description: string) {
    return this.dialog.open(ConfirmDialogComponent, {
			data: {title, description},
			width: '440px',
		});
  }
  
  textAreaEmpty(){
    if (this.textValue != '') {
      //console.log(this.textValue);
    }
  }

  openSnackBar(message: String) {
    this._snackBar.openFromComponent(ActionNotificationComponent, {
      data: {
        message
      },
      duration: this.durationInSeconds,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}