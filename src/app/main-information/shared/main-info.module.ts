import {NgModule} from "@angular/core";
import {MainInformationComponent} from "./component/main-information.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MainInformationSelfComponent} from "../main-information-self/main-information-self.component";
import {MainInformationSafenessComponent} from "../main-information-safeness/main-information-safeness.component";

@NgModule({
  declarations: [
    MainInformationComponent,
    MainInformationSelfComponent,
    MainInformationSafenessComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [

  ]
})

export class MainInfoModule {

}
