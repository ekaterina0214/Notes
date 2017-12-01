/*import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import {HomePage} from "./home";
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
import { AngularFireDatabase } from "angularfire2/database";

describe('HomePage', () => {
	let de: DebugElement;
	let comp: HomePage;
    let fixture: ComponentFixture<HomePage>;

    beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [HomePage],
		imports: [
			IonicModule.forRoot(HomePage),
			IonicStorageModule.forRoot()            
		],
		providers: [
			NavController,FirebaseProvider,AngularFireDatabase,FirebaseApp,
{ provide: Platform, useClass: PlatformMock},
{ provide: StatusBar, useClass: StatusBarMock },
{ provide: SplashScreen, useClass: SplashScreenMock },
		]
	});
}));
beforeEach(() => {
	fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
});
it('should be defined', () => expect(fixture).toBeDefined);

});*/