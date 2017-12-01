import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Note } from '../../models/note';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the CreateNewNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-new-note',
  templateUrl: 'create-new-note.html',
})
export class CreateNewNotePage {
  note = {} as Note;
  constructor(private toastCtrl:ToastController, private firebaseProvider:FirebaseProvider,
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

  createNewNote() {
    try{
      if(this.note.title!=null)
      {
        this.firebaseProvider.addItem(this.note);
        this.navCtrl.pop();
      }
      else{
        this.presentToast("Title is empty");
      }
    }
    catch(e){
      this.presentToast(e);
    }
  }
}
