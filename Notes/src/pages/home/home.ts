import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { CreateNewNotePage } from '../create-new-note/create-new-note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userNotes: FirebaseListObservable<any[]>;
  newItem = '';
 
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.userNotes = this.firebaseProvider.getUserNotes();
    var n=0;
  }
 
  addItem() {
    //this.firebaseProvider.addItem(this.newItem);
    this.navCtrl.push(CreateNewNotePage);
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }
}
