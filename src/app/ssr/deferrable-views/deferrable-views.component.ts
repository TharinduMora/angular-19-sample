import { Component } from "@angular/core";
import { CM1Component } from "./supporting-components/cm1.component";
import { CM2Component } from "./supporting-components/cm2.component";
import { CM3Component } from "./supporting-components/cm3.component";
import { CM4Component } from "./supporting-components/cm4.component";

@Component({
  selector: "app-deferrable-views",
  imports: [CM1Component, CM2Component, CM3Component, CM4Component],
  templateUrl: "./deferrable-views.component.html",
  styleUrl: "./deferrable-views.component.scss",
})
export class DeferrableViewsComponent {
  loadCM1 = false;
}
