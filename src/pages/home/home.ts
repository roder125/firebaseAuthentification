import { LocalstorageService } from './../../services/localStorage/localStorage.service';
import { AuthentificationService } from './../../services/authentification/authentificationservice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  email: string;

  constructor(private storageService: LocalstorageService, public navCtrl: NavController, public navParams: NavParams, private authService: AuthentificationService) {
    // in email wird die email des momentanen users gespeichert
    this.email = authService.getUserEmail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  /**
   * Logout Funktion wenn der Logout Butten gedrückt wird
   * this.navCtrl.setRoot(LoginPage) setzt die LoginPage wieder als Ausgangspunkt bzw. Root im Stack
   */
  logout(){
    this.authService.logout()
    .then(data=>{
      this.storageService.saveLocal("","");
      this.navCtrl.setRoot(LoginPage)
    });    
  }

}
