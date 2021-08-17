import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";

@NgModule({

  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ]
})

export class MatModule {

}
