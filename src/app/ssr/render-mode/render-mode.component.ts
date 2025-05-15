import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-render-mode",
  imports: [RouterOutlet, RouterModule],
  templateUrl: "./render-mode.component.html",
  styleUrl: "./render-mode.component.scss",
})
export class RenderModeComponent {}
