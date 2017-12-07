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

it('should after click present toast',async()=>{
	spyOn(comp, 'sendFeedback');
	let btn = fixture.debugElement.query(By.css('#button'));
	let button=btn.nativeElement;
	let inpt=fixture.debugElement.query(By.css('#basic_input'));
	let input=inpt.nativeElement;
	input.innerText="MyFeedback";
	let t=comp.sendFeedback(input.innerText);
	button.click();
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		expect(this.comp.presentToast).toHaveBeenCalled();
	});
});

it('should after click present toast with content',async()=>{
	spyOn(comp, 'sendFeedback');
	let btn = fixture.debugElement.query(By.css('#button'));
	let button=btn.nativeElement;
	let inpt=fixture.debugElement.query(By.css('#basic_input'));
	let input=inpt.nativeElement;
	input.innerText="MyFeedback";
	button.click();
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		expect(this.comp.presentToast).toBe(input.innerText);
	});
});

it('should after click write content to the console',async()=>{
	spyOn(console, 'log');
	let btn = fixture.debugElement.query(By.css('#button'));
	let button=btn.nativeElement;
	let inpt=fixture.debugElement.query(By.css('#basic_input'));
	let input=inpt.nativeElement;
	input.innerText="MyFeedback";
	button.click();
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		expect(this.console.log).toBe(input.innerText);
	});
});

it('should present "Fill field" if feedback is empty',async()=>{
	spyOn(comp, 'sendFeedback');
	let btn = fixture.debugElement.query(By.css('#button'));
	let button=btn.nativeElement;
	let inpt=fixture.debugElement.query(By.css('#basic_input'));
	let input=inpt.nativeElement;
	input.innerText="";
	button.click();
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		expect(this.comp.presentToast).not.toBe(input.innerText);
	});
});

it('button should have text "Send feedback"',async()=>{
	let btn = fixture.debugElement.query(By.css('#button'));
	let button=btn.nativeElement;
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		expect(button.innerText.toEqual('Send feedback'));
	});
});

it('input should have hint "Your message"',async()=>{
	let inpt=fixture.debugElement.query(By.css('#basic_input'));
	let input=inpt.nativeElement;
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		expect(this.input.hint).toEqual("Your message");
});
});

it('input should have not empty title',async()=>{
	let ttl=fixture.debugElement.query(By.css('#title'));
	let titlet=ttl.nativeElement;
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		expect(this.title.innerText).not.toEqual("");
});
});

it('input should have title "About"',async()=>{
	let ttl=fixture.debugElement.query(By.css('#title'));
	let titlet=ttl.nativeElement;
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		expect(this.title.innerText).toEqual("About");
});
});

});