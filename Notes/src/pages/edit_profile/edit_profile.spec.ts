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

describe('EditProfilePage', () => {
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



it('input shouldn`t have empty title',async()=>{
	let ttl=fixture.debugElement.query(By.css('#title'));
	let title=ttl.nativeElement;
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		expect(title.textContent).not.toEqual("");
	});
});

it('input should have title "Edit Profile"',async()=>{
	let ttl=fixture.debugElement.query(By.css('#title'));
	let title=ttl.nativeElement;
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		expect(title.textContent).toEqual("Edit Profile");
	});
});

it('should have label "First name"',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let lbl=fixture.debugElement.query(By.css('#first_name'));
		let label=lbl.nativeElement;
		expect(label.innerText).toEqual("First name");
	});	
});

it('should have label "Last name"',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let lbl=fixture.debugElement.query(By.css('#last_name'));
		let label=lbl.nativeElement;
		expect(label.innerText).toEqual("Last name");
	});	
});

it('should have label "Phone"',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let lbl=fixture.debugElement.query(By.css('#phone'));
		let label=lbl.nativeElement;
		expect(label.innerText).toEqual("Phone");
	});	
});

it('should have label "Phone"',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn=fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		expect(button.textContent).toEqual("Save");
	});	
});

it('First name shouldn`t have less than 2 symbols',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn = fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		let inpt=fixture.debugElement.query(By.css('ion-input [name=first_name]'));
		let input=inpt.nativeElement;
		input.value="n";
		input.dispatchEvent(new Event('input'));
		button.click();
		console.log(comp.user.first_name.length);
		expect(comp.user.first_name.length).not.toBeGreaterThanOrEqual(2);
	});		
});

it('Last name shouldn`t have less than 2 symbols',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn = fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		let inpt=fixture.debugElement.query(By.css('ion-input [name=last_name]'));
		let input=inpt.nativeElement;
		input.value="n";
		input.dispatchEvent(new Event('input'));
		button.click();
		expect(comp.user.last_name.length).not.toBeGreaterThanOrEqual(2);
	});		
});

it('Phone shouldn`t have less than 6 symbols',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn = fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		let inpt=fixture.debugElement.query(By.css('ion-input [name=phone]'));
		let input=inpt.nativeElement;
		input.value="09520";
		input.dispatchEvent(new Event('input'));
		button.click();
		expect(comp.user.last_name.length).not.toBeGreaterThanOrEqual(6);
	});		
});

it('Phone should have type number',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn = fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		let inpt=fixture.debugElement.query(By.css('ion-input [name=phone]'));
		let input=inpt.nativeElement;
		input.dispatchEvent(new Event('input'));
		button.click();
		expect(input.type).toBe('number');
	});		
});

it('First name shouldn`t have more than 20 symbols',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn = fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		let inpt=fixture.debugElement.query(By.css('ion-input [name=first_name]'));
		let input=inpt.nativeElement;
		input.value="nnbkdfjlsfj;dsfjjkmlr";
		input.dispatchEvent(new Event('input'));
		button.click();
		console.log(comp.user.first_name.length);
		expect(comp.user.first_name.length).not.toBeLessThanOrEqual(20);
	});		
});

it('Last name shouldn`t have more than 20 symbols',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn = fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		let inpt=fixture.debugElement.query(By.css('ion-input [name=last_name]'));
		let input=inpt.nativeElement;
		input.value="nnbkdfjlsfj;dsfjjkmlr";
		input.dispatchEvent(new Event('input'));
		button.click();
		expect(comp.user.last_name.length).not.toBeLessThanOrEqual(20);
	});		
});

it('Phone shouldn`t have more than 20 symbols',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn = fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		let inpt=fixture.debugElement.query(By.css('ion-input [name=phone]'));
		let input=inpt.nativeElement;
		input.value="095200952009520095205";
		input.dispatchEvent(new Event('input'));
		button.click();
		expect(comp.user.last_name.length).not.toBeLessThanOrEqual(20);
	});		
});

it('First name should have more or equal than 2 symbols',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn = fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		let inpt=fixture.debugElement.query(By.css('ion-input [name=first_name]'));
		let input=inpt.nativeElement;
		input.value="nn";
		input.dispatchEvent(new Event('input'));
		button.click();
		console.log(comp.user.first_name.length);
		expect(comp.user.first_name.length).toBeGreaterThanOrEqual(2);
	});		
});

it('Last name should have more or equal than 2 symbols',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn = fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		let inpt=fixture.debugElement.query(By.css('ion-input [name=last_name]'));
		let input=inpt.nativeElement;
		input.value="nn";
		input.dispatchEvent(new Event('input'));
		button.click();
		expect(comp.user.last_name.length).toBeGreaterThanOrEqual(2);
	});		
});

it('Phone should have more or equal than 6 symbols',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn = fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		let inpt=fixture.debugElement.query(By.css('ion-input [name=phone]'));
		let input=inpt.nativeElement;
		input.value="095200";
		input.dispatchEvent(new Event('input'));
		button.click();
		expect(comp.user.last_name.length).toBeGreaterThanOrEqual(6);
	});		
});

it('First name should have less or equal than 20 symbols',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn = fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		let inpt=fixture.debugElement.query(By.css('ion-input [name=first_name]'));
		let input=inpt.nativeElement;
		input.value="nnbkdfjlsfj;dsfjjkml";
		input.dispatchEvent(new Event('input'));
		button.click();
		console.log(comp.user.first_name.length);
		expect(comp.user.first_name.length).toBeLessThanOrEqual(20);
	});		
});

it('Last name should have kess or equal than 20 symbols',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn = fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		let inpt=fixture.debugElement.query(By.css('ion-input [name=last_name]'));
		let input=inpt.nativeElement;
		input.value="nnbkdfjlsfj;dsfjjkmr";
		input.dispatchEvent(new Event('input'));
		button.click();
		expect(comp.user.last_name.length).toBeLessThanOrEqual(20);
	});		
});

it('Phone should have less or equal than 20 symbols',async()=>{
	fixture.detectChanges();
	fixture.whenStable().then(() => {
		let btn = fixture.debugElement.query(By.css('#button'));
		let button=btn.nativeElement;
		let inpt=fixture.debugElement.query(By.css('ion-input [name=phone]'));
		let input=inpt.nativeElement;
		input.value="09520095200952009520";
		input.dispatchEvent(new Event('input'));
		button.click();
		expect(comp.user.last_name.length).toBeLessThanOrEqual(20);
	});		
});
});