import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { HomePage } from "../../pages/home/home";
import { ChangePasswordPage } from "../../pages/change-password/change-password";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}
  data = [
    {
      username: "admin",
      password: "admin",
      isFirstLogin: true
    }
  ];

  checkLogin() {
    return true;
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: "Error Sign In",
      subTitle: "The user name or password is incorrect",
      buttons: ["OK"]
    });
    alert.present();
  }
  signin() {
    if (!this.data[0].isFirstLogin && this.checkLogin())
      this.navCtrl.setRoot(HomePage);
    else if (this.data[0].isFirstLogin && this.checkLogin()) {
      this.navCtrl.push(ChangePasswordPage);
    } else {
      this.showAlert();
    }
  }
}
