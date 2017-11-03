import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private afauth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  logout(){
    if(this.afauth.auth.currentUser!=null){
      this.afauth.auth.signOut();
      this.navCtrl.setRoot(LoginPage);
    }
  }

}
