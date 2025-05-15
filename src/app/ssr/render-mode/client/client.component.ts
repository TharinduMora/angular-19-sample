import { JsonPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { map, of, take } from "rxjs";

@Component({
  selector: "app-client",
  imports: [JsonPipe],
  templateUrl: "./client.component.html",
  styleUrl: "./client.component.scss",
  providers: [],
})
export class ClientComponent implements OnInit {
  private url = "https://dummyjson.com/todos/user/";
  private http = inject(HttpClient);

  todos: any[] = [];

  ngOnInit() {
    this.getToDos(1).subscribe((todos) => {
      this.todos = todos;
    });
  }

  getToDos(id: number) {
    if (!id) return of([]);
    return this.http.get<{ todos: any[] }>(`${this.url}${id}`).pipe(
      take(1),
      map((res) => res.todos)
    );
  }
}
