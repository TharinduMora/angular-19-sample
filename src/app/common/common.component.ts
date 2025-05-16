import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-common",
  imports: [RouterOutlet, RouterModule],
  templateUrl: "./common.component.html",
  styleUrl: "./common.component.scss",
})
export class CommonComponent {}
