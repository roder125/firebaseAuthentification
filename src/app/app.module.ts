import { LocalstorageService } from './../services/localStorage/localStorage.service';
import { AuthentificationService } from './../services/authentification/authentificationservice';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicStorageModule } from '@ionic/storage';

/**
 * AF2 (Angular Fire 2) Optionen von Firebase Console, um config Objekt zu speichern 
 */
const firebaseAuth = {
  apiKey: "AIzaSyAC6PzDHmLsHDSWLeRgf18uoZUZiIBVGh4",
  authDomain: "fir-authentification-2952a.firebaseapp.com",
  databaseURL: "https://fir-authentification-2952a.firebaseio.com",
  projectId: "fir-authentification-2952a",
  storageBucket: "fir-authentification-2952a.appspot.com",
  messagingSenderId: "34123544541"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // AF Module zu ngModule adden
    AngularFireModule.initializeApp(firebaseAuth),
    // AFDatabaseModule um Datenbanken Interaktionen durchführen zu können
    AngularFireAuthModule,
    // Storage Module für das Speichern im lokalen Speicher
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthentificationService,
    LocalstorageService,
  ]
})
export class AppModule {}
