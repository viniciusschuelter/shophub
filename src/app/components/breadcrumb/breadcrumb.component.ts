import {Component, inject} from '@angular/core';
import { Router} from "@angular/router";
import {ReplaceModule} from "../../pipes/replace/replace.module";
import {SplitModule} from "../../pipes/split/split.module";

@Component({
  standalone: true,
  selector: 'app-breadcrumb',
  imports: [ReplaceModule, SplitModule],
  template: `
    <div class="flex items-center font-bold text-black">
      <span class="text-white">Home</span>
      <span class="mx-2">/</span>
      <span class="capitalize truncate">
        {{(router.routerState.snapshot.url | replace: '/' : '') | split: '/'}}
      </span>
    </div>
  `,

})
export class BreadcrumbComponent {
  router = inject(Router)
}
