import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {CommonModule} from "@angular/common";
import {ReplaceModule} from "../../pipes/replace/replace.module";
import {SplitModule} from "../../pipes/split/split.module";
import {FormsModule} from "@angular/forms";
import {BreadcrumbComponent} from "../breadcrumb/breadcrumb.component";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
    imports: [
        CommonModule,
        ReplaceModule,
        SplitModule,
        BreadcrumbComponent,
        FormsModule
    ]
}) export class HeaderModule{};
