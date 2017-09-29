import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";

import { CustomerPage } from "../pages/customer/customer";
import { ProductPage } from "../pages/product/product";
import { AccountPage } from "../pages/account/account";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { TaskComponent } from "../components/task/task";
import { AlertComponent } from "../components/alert/alert";
import { LoginPage } from "../pages/login/login";
import { ChangePasswordPage } from "../pages/change-password/change-password";
import { OdooRPCService } from "angular4-odoo-jsonrpc";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CustomerPage,
    AccountPage,
    ProductPage,
    TaskComponent,
    AlertComponent,
    LoginPage,
    ChangePasswordPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductPage,
    CustomerPage,
    AccountPage,
    LoginPage,
    ChangePasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OdooRPCService,

    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
