import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './button';

@NgModule({
  declarations: [Button], // declare your component here
  imports: [CommonModule], // import Angular common directives (ngIf, ngFor, etc.)
  exports: [Button], // export so other apps can use it
})
export class SharedUiModule {}
