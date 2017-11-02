import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth} from 'angularfire2/auth'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user={} as User;

  constructor(private afauth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user:User){
    try
    {
      if(user.password!=user.confirm_password)
      {
        console.error("Passwords are not similar!");
      }
      else{
        const result=await this.afauth.auth.createUserWithEmailAndPassword(user.email,user.password);
        console.log(result);
        this.navCtrl.pop();
      }      
    }
    catch(e){
      console.error(e);
    }
  }
}
