import { JsonPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { take } from "rxjs";

@Component({
  selector: "app-prerender",
  imports: [JsonPipe],
  templateUrl: "./prerender.component.html",
  styleUrl: "./prerender.component.scss",
})
export class PrerenderComponent implements OnInit {
  private http = inject(HttpClient);
  post: any;

  ngOnInit() {
    this.getPost().subscribe((res) => {
      this.post = res;
    });
  }

  getPost() {
    return this.http.get<any>(`https://dummyjson.com/posts/1`).pipe(take(1));
  }
}
