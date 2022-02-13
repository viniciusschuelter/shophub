import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {CommonModule} from "@angular/common";
import {ReplaceModule} from "../../pipes/replace/replace.module";
import {SplitModule} from "../../pipes/split/split.module";
import {BreadcrumbModule} from "../breadcrumb/breadcrumb.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
    imports: [
        CommonModule,
        ReplaceModule,
        SplitModule,
        BreadcrumbModule,
        FormsModule
    ]
}) export class HeaderModule{};
