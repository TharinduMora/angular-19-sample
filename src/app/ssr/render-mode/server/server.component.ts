import { AsyncPipe, JsonPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { take } from "rxjs";

@Component({
  selector: "app-server",
  imports: [JsonPipe],
  templateUrl: "./server.component.html",
  styleUrl: "./server.component.scss",
})
export class ServerComponent implements OnInit {
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
