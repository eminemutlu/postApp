import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { AppModel } from '../_models/app.model';
import { AppService } from '../_services/app.service';

@Injectable()
export class AppDetailResolve implements Resolve<Promise<AppModel | boolean>>{
  
  appModel: AppModel = new AppModel();

  constructor( private service: AppService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<boolean | AppModel> {
    let id: string = route.params['id'];
    return this.service.getAppById(id)
    .toPromise()
    .then(
      (res: any) => {
        if (res.status === 'OK' && (res.result)) {
          return res.result;
        }
      })
      .catch((error) => {});
  }
}
