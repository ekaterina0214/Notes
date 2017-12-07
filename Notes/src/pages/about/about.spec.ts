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
import { ComponentFixtureAutoDetect } from "@angular/core/testing";
import { Feedback } from "../../models/feedback";

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
{ provide: ComponentFixtureAutoDetect, useValue: true }
		]
	});
}));
beforeEach(() => {
	fixture = TestBed.createComponent(AboutPage);
	comp = fixture.componentInstance;
	de = fixture.debugElement.query(By.css('h5'));   
});

afterEach(() => {
	fixture.destroy();
	comp = null;
	de = null;
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

it('should after click present feedback.content',()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn = fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		let inpt=fixture.debugElement.query(By.css('ion-input [name=feedback]'));
		let input=inpt.nativeElement;
		input.value="feedback";
		input.dispatchEvent(new Event('input'));
		button.click();
		expect(comp.feedback.content).toEqual("feedback");
	});
});

it('should present "Fill field" if feedback is empty',async()=>{
	let btn = fixture.debugElement.query(By.css('#button'));
	let button=btn.nativeElement;
	let inpt=fixture.debugElement.query(By.css('#basic_input'));
	let input=inpt.nativeElement;
	button.click();
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		console.log(comp.test);
		expect(comp.test.data.message).toEqual("Fill field");
	});
});

it('should present toast with feedback.content',async()=>{
	let btn = fixture.debugElement.query(By.css('#button'));
	let button=btn.nativeElement;
	let inpt=fixture.debugElement.query(By.css('ion-input [name=feedback]'));
	let input=inpt.nativeElement;
	let message="feedback";
	input.value=message;
	input.dispatchEvent(new Event('input'));
	button.click();
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		console.log(comp.test.data.message);
		expect(comp.test.data.message).toEqual(message);
	});
});

it('button should have text "Send feedback"',async()=>{
	let btn = fixture.debugElement.query(By.css('#button'));
	let button=btn.nativeElement;
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		expect(button.textContent).toEqual('Send feedback');
	});
});

it('input should have not empty title',async()=>{
	let ttl=fixture.debugElement.query(By.css('#title'));
	let title=ttl.nativeElement;
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		expect(title.textContent).not.toEqual("");
});
});

it('input should have title "About"',async()=>{
	let ttl=fixture.debugElement.query(By.css('#title'));
	let title=ttl.nativeElement;
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		expect(title.textContent).toEqual("About");
});
});

});