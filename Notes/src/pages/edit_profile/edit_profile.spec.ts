import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import {EditProfilePage} from "./edit_profile";
import { async } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { IonicModule, NavController, Platform, ToastController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock } from "../../../test-config/mocks-ionic";
import { By } from "@angular/platform-browser";
import { AngularFireAuth } from "angularfire2/auth";
import { FirebaseApp, AngularFireModule } from "angularfire2";
import { FirebaseProvider } from "../../providers/firebase/firebase";
import { IonicStorageModule } from "@ionic/storage";

describe('LoginPage', () => {
	let de: DebugElement;
	let comp: EditProfilePage;
    let fixture: ComponentFixture<EditProfilePage>;

    beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [EditProfilePage],
		imports: [
			IonicModule.forRoot(EditProfilePage),
			IonicStorageModule.forRoot()            
		],
		providers: [
			NavController,
{ provide: Platform, useClass: PlatformMock},
{ provide: StatusBar, useClass: StatusBarMock },
{ provide: SplashScreen, useClass: SplashScreenMock },
		]
	});
}));
beforeEach(() => {
	fixture = TestBed.createComponent(EditProfilePage);
    comp = fixture.componentInstance;
});
it('should be defined', () => expect(fixture).toBeDefined);

});