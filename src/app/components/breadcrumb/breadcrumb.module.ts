import {NgModule} from "@angular/core";
import {BreadcrumbComponent} from "./breadcrumb.component";
import {CommonModule} from "@angular/common";
import {ReplaceModule} from "../../pipes/replace/replace.module";
import {SplitModule} from "../../pipes/split/split.module";


@NgModule({
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
  imports: [
    CommonModule,
    ReplaceModule,
    SplitModule
  ]
}) export class BreadcrumbModule{};
