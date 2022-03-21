import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { AppModel } from '../_models/app.model';
import { AppService } from '../_services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  loading: boolean = false;
  datasource: AppModel[] = [];

  constructor(
    private service: AppService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
      this.loading = true;
      return this.service.getAppList()
      .pipe(
        finalize(() => {}),
        tap(res => {
          if (res.status === 'OK') {
            this.loading = false;
            return this.datasource = res.result.map(function (value: AppModel) {
              return value;
            })
          }
          else {
            return this.datasource = [];
          }
        },
        err => {
          this.datasource = [];
          this.cdr.detectChanges();
        }), catchError(err => of(this.loading = false)),
      ).toPromise();
  }

  goDetail(id: string) {
    this.router.navigate([`/detail/${id}`]);
  } 

}
