import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Feedback } from '../../models/feedback';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  public feedback={} as Feedback;
  constructor(public navCtrl: NavController, private toast:ToastController) {
  }

  sendFeedback(content:string){
    if(content!=null){
      this.presentToast(content);
      console.log(content);
    }
    else{
      this.presentToast("Fill field");
    }
  }

  presentToast(message: string) {
    let newtoast = this.toast.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    newtoast.present();
  }

}
