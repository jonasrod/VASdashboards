import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { DashboardServiceProvider } from '../../providers/dashboard-service/dashboard-service'

@IonicPage()
@Component({
  selector: 'page-dashboard-list',
  templateUrl: 'dashboard-list.html',
})
export class DashboardListPage {
  selectedDashboard: any;
  dashboards: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dashboardServiceProvider: DashboardServiceProvider,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
      this.getDashboards();
  }

  getDashboards() {
    this.showLoader();
    this.dashboardServiceProvider.getDashboards().then(data => {
      this.loading.dismiss();
      this.dashboards = data.dashboards;
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Loading...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardListPage');
  }

}
