import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDetailComponent } from './components/app-detail/app-detail.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { AppDetailResolve } from './components/_resolvers/appDetailResolve';

const routes: Routes = [
  { 
    path: '',
    component: AppListComponent,
  },
  {
    path: 'detail/:id',
    component: AppDetailComponent,
    resolve: {
      appDetail: AppDetailResolve
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AppDetailResolve
  ]
,})
export class AppRoutingModule { }
