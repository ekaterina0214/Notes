import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import {AboutPage} from "./about";
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

describe('AboutPage', () => {
	let de: DebugElement;
	let comp: AboutPage;
    let fixture: ComponentFixture<AboutPage>;

    beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [AboutPage],
		imports: [
			IonicModule.forRoot(AboutPage),
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
	fixture = TestBed.createComponent(AboutPage);
	comp = fixture.componentInstance;
	de = fixture.debugElement.query(By.css('h5'));   
	
});
it('should be defined', () => expect(fixture).toBeDefined);

it('should have expected <h5> text', () => {
	fixture.detectChanges();
	const h5 = de.nativeElement;
	expect(h5.innerText).toMatch('This ap is created by Kateryna Fomin and Igor Batrak');
});

it('should be empty when page starts', () => {
	fixture.detectChanges();
	let feedback=fixture.debugElement.query(By.css('#basic_input'));
	expect(feedback.nativeElement.innerText.length).toEqual(0);
});

});