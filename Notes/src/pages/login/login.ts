import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  constructor(private toast:ToastController,private storage: Storage,private afauth:AngularFireAuth,
    public navCtrl: NavController) {
  }

  presentToast(message: string) {
    let newtoast = this.toast.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    newtoast.present();
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
 register(toast:ToastController) {
    this.navCtrl.push(RegisterPage);
  }

}
