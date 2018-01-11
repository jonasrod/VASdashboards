import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardServiceProvider {
  data: any;
  apiURL = 'http://10.160.2.97:8080/api/dashboards';
  token = '1p64dmmcksv5l400kodh92n8kouge1en8kndutrb73p4vjqdvkrk:token';

  constructor(public http: Http) {
    console.log('Hello DashboardServiceProvider Provider');
  }

  getDashboards() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Authorization', 'Basic ' + btoa(this.token));//btoa()
      this.http.get(this.apiURL, {
            headers: headers
        })
        .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }
}
