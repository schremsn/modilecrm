import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ChangePasswordPage } from "../../pages/change-password/change-password";
import { LoginPage } from "../../pages/login/login";
/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-account",
  templateUrl: "account.html"
})
export class AccountPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  signOut() {
    this.navCtrl.setRoot(LoginPage);
  }
  changePass() {
    this.navCtrl.setRoot(ChangePasswordPage);
  }
}
