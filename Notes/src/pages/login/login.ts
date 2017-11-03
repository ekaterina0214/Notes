import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(private afauth: AngularFireAuth, private toastCtrl: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  async login(user: User) {
    try {
      if (user.email != null && user.password != null) {
        const result = await this.afauth.auth.signInWithEmailAndPassword(user.email, user.password);
        if (this.afauth.auth.currentUser != null) {
          this.navCtrl.setRoot(HomePage);
        }
        else{
          this.presentToast("Something happened, please, try again..");
        }
      }
      else{
        this.presentToast("Empty Email or Password fields");
      }
    }
    catch (e) {
      this.presentToast(e);
    }
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}
