import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptService } from './shared/intercept.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AppDetailComponent } from './components/app-detail/app-detail.component';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ShortenPipe } from './shared/pipes/shorten.pipe';
import { ShortNumberPipe } from './shared/pipes/short-number.pipe';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActionNotificationComponent } from './shared/action-notification/action-notification.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    AppDetailComponent,
    ShortenPipe,
    ShortNumberPipe,
    ConfirmDialogComponent,
    ActionNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  exports: [
    ConfirmDialogComponent,
     ActionNotificationComponent,
  ],
  providers: [
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
     }
  ],
  entryComponents: [
		ConfirmDialogComponent,
    ActionNotificationComponent,
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
