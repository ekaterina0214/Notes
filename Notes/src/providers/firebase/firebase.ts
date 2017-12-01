import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  
   constructor(public afd: AngularFireDatabase) { }
  
   getUserNotes() {
     var list=this.afd.list('/userNotesTitles/');
     return list;
   }
  
   addItem(name) {
     this.afd.list('/userNotes/').push(name);
     this.afd.list('/userNotesTitles/').push(name.title);
   }
  
   removeItem(id) {
     this.afd.list('/userNotes/').remove(id);
   }
 }