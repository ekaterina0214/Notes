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
  public feedback={'content':null};//: Feedback;
  constructor(public navCtrl: NavController, public toast:ToastController) {
    //this.feedback.content="123";
  }

  public sendFeedback(content:string){
    if(this.feedback.content!=null)
    {
      this.presentToast(this.feedback.content);
    }
    else{
      this.presentToast("Fill field");
    }
  }

public test;
  presentToast(message: string) {
    this.test = this.toast.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    this.test.present();
    //return message;
  }

}
