import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, ToastController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
// import { ListPage } from '../pages/list/list';
import { CustomerPage } from "../pages/customer/customer";
import { ProductPage } from "../pages/product/product";
import { AccountPage } from "../pages/account/account";
import { LoginPage } from "../pages/login/login";
//import { ChangePasswordPage } from "../pages/change-password/change-password";
import { OdooRPCService } from "angular4-odoo-jsonrpc";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string; component: any }>;

  constructor(
    public toastCtrl: ToastController,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public odooRPC: OdooRPCService
  ) {
    this.initializeApp();
    this.odooRPC.init({
      odoo_server: "http://35.197.28.1:8069",
      http_auth: "admin:admin" // optional
    });
    this.odooRPC
      .login("test", "admin", "zaq12wsx")
      .then(res => {
        console.log("login success");
      })
      .catch(err => {
        console.error("login failed", err);
      });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Home", component: HomePage },
      { title: "Customer", component: CustomerPage },
      { title: "Product", component: ProductPage },
      { title: "Account", component: AccountPage }
    ];

    platform.ready().then(() => {
      //back button handle
      //Registration of push in Android and Windows Phone
      var lastTimeBackPress = 0;
      var timePeriodToExit = 2000;

      platform.registerBackButtonAction(() => {
        // get current active page
        let view = this.nav.getActive();
        if (
          view.component.name == "HomePage" ||
          view.component.name == "LoginPage"
        ) {
          //Double check to exit app
          if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
            this.platform.exitApp(); //Exit from app
          } else {
            let toast = this.toastCtrl.create({
              message: "Press back again to exit App?",
              duration: 3000,
              position: "bottom"
            });
            toast.present();
            lastTimeBackPress = new Date().getTime();
          }
        } else {
          // go to Home Page
          this.nav.setRoot(HomePage);
        }
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
