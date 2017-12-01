import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-edit_profile',
  templateUrl: 'edit_profile.html'
})
export class EditProfilePage {
  user={} as User;

  constructor(private toast:ToastController,private storage: Storage,
    public navCtrl: NavController) {
      this.storage.get('first_name').then((val) => {
        this.user.first_name=val;
      });
      this.storage.get('last_name').then((val) => {
        this.user.last_name=val;
      });
      this.storage.get('phone').then((val) => {
        this.user.phone=val;
      });
  }

  presentToast(message: string) {
    let newtoast = this.toast.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    newtoast.present();
  }

  save(user:User){
    if(user.first_name!=null && user.last_name!=null && user.phone!=null){
      this.storage.set('first_name',user.first_name);
      this.storage.set('last_name',user.last_name);
      this.storage.set('phone',user.phone);

      this.navCtrl.setRoot(HomePage);
    }
    else{
      this.presentToast("Please, fill all fields");
    }
  }
}
