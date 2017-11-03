import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewNotePage } from './create-new-note';

@NgModule({
  declarations: [
    CreateNewNotePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewNotePage),
  ],
})
export class CreateNewNotePageModule {}
