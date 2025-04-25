import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: "app-signals-landing",
  imports: [RouterOutlet, RouterModule, MatSidenavModule, MatListModule],
  templateUrl: "./signals-landing.component.html",
  styleUrl: "./signals-landing.component.scss",
})
export class SignalsLandingComponent {}
