import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth} from 'angularfire2/auth'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user={} as User;

  constructor(private afauth:AngularFireAuth, private toastCtrl: ToastController,
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

  async register(user:User){
    try
    {
      if(user.password!=user.confirm_password)
      {
        this.presentToast("Passwords are not similar!"); 
      }
      else{
        const result=await this.afauth.auth.createUserWithEmailAndPassword(user.email,user.password);
        this.navCtrl.pop();
      }      
    }
    catch(e){
      this.presentToast(e);
    }
  }
}
